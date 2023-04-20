import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('栏目1', '/page1', <PieChartOutlined />),
    getItem('栏目2', '/page2', <DesktopOutlined />),
    getItem('User', 'page3', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Comp: React.FC = () => {
    const navigeteTo = useNavigate();

    const menuClick = (e: { key: string }) => {
        console.log("点击了菜单", e.key);

        // 点击跳转到对应的路由  编程式导航跳转，利用到一个hook
        navigeteTo(e.key);
    }

    const [openKeys, setOpenKeys] = useState(['']);
    const handleOpenChange = (keys: string[]) => {
        //什么时候执行这个函数里面的代码？ 展开和回收某项菜单的时候，执行这里的代码
        // console.log(keys);  // keys是一个数组，记录了当前哪一项是展开的（用key来记录）
        // 把这个数组修改成最后一项，因为只要一项是展开的，就是刚刚点击的这一项
        setOpenKeys([keys[keys.length - 1]]);
    }

    return (
        <Menu
            theme="dark" 
            defaultSelectedKeys={['/page1']} 
            mode="inline" 
            items={items} 
            onClick={menuClick}
            // 某项菜单展开和回收的事件
            onOpenChange={handleOpenChange}
            // 当前菜单展开项的key数组
            openKeys={openKeys}
        />
    )
}

export default Comp;