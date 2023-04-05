import React, { lazy } from "react"
// Navigate重定向组件
import { Navigate } from "react-router-dom"

import Home from "../views/Home"
// import About from "../views/About"
// import User from "../views/User"
const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))

// 报错 A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
// 懒加载的模式的组件的写法，外面需要套一层 Loading 的提示加载组件

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <React.Suspense fallback={<div>Loading...</div>}>
            <About />
        </React.Suspense>
    },
    {
        path: "/user",
        element: <React.Suspense fallback={<div>Loading...</div>}>
            <User />
        </React.Suspense>
    }
]

export default routes