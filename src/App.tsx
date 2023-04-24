import { useEffect } from 'react'
// import { Button } from 'antd'
// import { UpCircleOutlined } from "@ant-design/icons"
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'  antd5就不需要引入样式了。全局，全部组件的样式都引入
// import { Outlet, Link } from "react-router-dom"
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from "./router"
import { message } from "antd"

// 去往登录页的组件
function ToLogin() {
  const navigateTo = useNavigate();
  // 加载完这个组件之后，实现跳转  生命周期函数
  useEffect(() => {
    // 加载完组件之后，执行这里的代码
    navigateTo('/login');
    message.warning("您还没有登录，请登录后再访问！");
  }, []);  // 给一个空的数组，函数里的内容就代表加载完后的处理
  return <div></div>
}

// 去往首页的组件
function ToPage1() {
  const navigateTo = useNavigate();
  // 加载完这个组件之后，实现跳转  生命周期函数
  useEffect(() => {
    // 加载完组件之后，执行这里的代码
    navigateTo('/page1');
    message.warning("您已经登录过了！");
  }, []);  // 给一个空的数组，函数里的内容就代表加载完后的处理
  return <div></div>
}

// 手写封装前置路由守卫
function BeforeRouterEnter() {
  // 换成Hook形式的对象
  const outlet = useRoutes(router);

  /*
    后台管理系统，两种经典的调整情况:
    1. 如果访问的是登录页面，并且有token，跳转到首页
    2. 如果访问的不是登录页面，并且没有token，跳转到登录页面
    3. 其余的都可以正常放行
  */
  const location = useLocation();
  let token = localStorage.getItem("lege-react-management-token");
  // 1. 如果访问的是登录页面，并且有token，跳转到首页
  if (location.pathname === "/login" && token) {
    // 这里不能直接用 useNavigate 来实现跳转，因为需要BeforeRouterEnter是一个正常的JSX组件
    return <ToPage1 />
  }
  // 2. 如果访问的不是登录页面，并且没有token，跳转到登录页面
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />
  }

  return outlet;
}

function App() {
  // const [count, setCount] = useState(0);
  // 换成Hook形式的对象
  // const outlet = useRoutes(router)

  return (
    <div className="App">
      {/* <Link to="/home">home</Link>
      <Link to="/about">aobut</Link>
      <Link to="/user">user</Link> */}

      {/* 占位符组件，类似于窗口，用来展示组件的，有点像Vue中的 router-view */}
      {/* <Outlet></Outlet> */}

      {/* {outlet} */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
