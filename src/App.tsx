import { useState } from 'react'
import { Button } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'  antd5就不需要引入样式了。全局，全部组件的样式都引入
import { Outlet } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* 顶级组件
      <Button type="primary">我们的按钮</Button>
      <UpCircleOutlined style={{ fontSize: '40px', color: 'red' }} /> */}

      {/* 占位符组件，类似于窗口，用来展示组件的，有点像Vue中的 router-view */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
