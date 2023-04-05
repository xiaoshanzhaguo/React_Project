import { useState } from 'react'
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'  antd5就不需要引入样式了。全局，全部组件的样式都引入
import { Outlet, Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Link to="/home">home</Link>
      <Link to="/about">aobut</Link>
      {/* 占位符组件，类似于窗口，用来展示组件的，有点像Vue中的 router-view */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
