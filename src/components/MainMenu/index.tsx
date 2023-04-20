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
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

// 下面两部分作用：构建菜单数据，构建item

// getItem为一个函数，最终返回一个对象
// function getItem(
//     // 参数
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// // items为一个个对象构成的数组
// // 构造了一个个对象，通过函数去限制对象构造
// const items: MenuItem[] = [
//     getItem('栏目1', '/page1', <PieChartOutlined />),
//     getItem('栏目2', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

// 登陆请求岛数据之后，就可以跟items数组进行匹配
const items: MenuItem[] = [
    {
      label: '栏目1',
      key: '/page1',
      icon: <PieChartOutlined />,
    },
    {
      label: '栏目2',
      key: '/page2',
      icon: <DesktopOutlined />,
    },
    {
      label: '栏目3',
      key: '/page3',
      icon: <UserOutlined />,
      children: [
        {
          label: '栏目 301',
          key: '/page3/page301'
        },
        {
          label: '栏目 302',
          key: '/page3/page302'
        },
        {
          label: '栏目 303',
          key: '/page3/page303'
        }
      ]
    },
    {
      label: '栏目4',
      key: '/page4',
      icon: <TeamOutlined />,
      children: [
        {
          label: '栏目 401',
          key: '/page4/page401'
        },
        {
          label: '栏目 402',
          key: '/page4/page402'
        }
      ]
    },
    {
      label: '栏目5',
      key: '/page5',
      icon: <FileOutlined />,
  },
]

const Comp: React.FC = () => {
    const navigeteTo = useNavigate();
    const currentRoute = useLocation();
    console.log("-------", currentRoute.pathname); // 严格模式下，会打印两次
    // 如果发现加载两次，这是开发环境下才会，生产环境就不会了。在main.tsx把严格模式标签去掉就不会了。
    // 至于为什么React要它加载两次，详见：https://blog.csdn.net/HYHhmbb/article/details/125973790
    

    const menuClick = (e: { key: string }) => {
        // console.log("点击了菜单", e.key);

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
            // defaultSelectedKeys  表示当前样式所在选中项的key
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            // 菜单项数据
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