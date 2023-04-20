import React from 'react'
import ReactDOM from 'react-dom/client'
// 正确的样式引入顺序
// 样式初始化一般放在最前面
import "reset-css"
// UI框架的样式

// 全局样式
import "@/assets/styles/global.scss"
import App from './App'
import { BrowserRouter } from "react-router-dom"
// 组件的样式
// 引入路由对象
// import Router from './router';

// 状态管理
import { Provider } from 'react-redux'
import store from "@/store"
 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    // {/* 之前这里报错的原因是router里的简写有问题 */}
    // {/* <Router /> */}

    // 在这里做注册/管理
    <Provider store={store}>
      {/* 一定要加上BroserRouter，history模式 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
)
