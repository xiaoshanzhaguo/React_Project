import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// 两种路路由模式的组件：BrowserRouter（History模式），HashRouter（Hash模式）

// const baseRouter = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<App />}>
//                     <Route path="/home" element={<Home />}></Route>
//                     <Route path="/about" element={<About />}></Route>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }
// 以上写法可以简写为：
const baseRouter = () => (
    // 中间没有逻辑，因此不用写return
    <BrowserRouter>
        {/* Routes表示将来可以放多条路由 */}
        <Routes>
            {/* 一个Route就是一条路由 */}
            <Route path="/" element={<App />}>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter


// {
//     path: "/home",
//     component:
// }