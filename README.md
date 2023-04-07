# React_Project

## 一、创建项目

## 二、项目目录初始化

## 三、样式初始化

> reset-css比Normalize.css更直接，干净利落去除默认样式，更适合在企业里的场景，所以用reset.css，而不用Normalize.css

路径下执行以下命令，安装reset-css:

```
npm i reset-css
```

在src/main.tsx中引入reset-css:

```tsx
import React from 'react'
import React from 'react-dom/clinet'
import "reset-css"
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```



## 四、scss的安装和初步使用

安装sass:

**打包时，开发依赖不会被打包进去**

```
npm i --save-dev sass
// --save-dev的意思在开发环境中使用
```

src下新建assets/styles/global.scss

```scss
 $color: #eee;
 body {
    background-color: $color;
    // 禁用文字选中
    user-select: none;
 }

 img {
    // 禁止拖动图片
    -webkit-user-drag: none;
 }
```

main.tsx中引入全局样式

```tsx
// 全局样式
import "./assets/styles/global.scss"
```



## 五、路径别名的配置

### 5.1 路径别名的配置

目前ts对@指向src目录的提示是不支持的，vite默认样式不支持的。

所以需要手动配置@符合的指向。

在vite.config.ts中添加配置：

```ts
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src')
        }
    }
})
```

这时候引入的path模块会报红，但其实我们已经有node，所以就已经有path模块，只是缺少ts的一些声明配置。所以需要安装关于node这个库的ts声明配置。

```
npm i -D @types/node
```

安装成功就没有报红了，如果import后面的path报红，就把引入换成 `import * as path from 'path';`



### 5.2 配置路径别名的提示

虽然现在路径别名已经有了，但是在文件中输入@是没有提示路径的

需要我们在tsconfig.json中，添加两项配置

```json
"compilerOptions": {
	...
	"baseUrl": "./",
	"paths": {
		"@/*": [
			"src/*"
		]
	}
},
```





## 七、Antd Design初步引入

安装Antd Design

```bash
// 使用 npm 安装
npm install antd --save

// 使用 yarn 安装
yarn add antd
```

安装图标所需模块

```bash
// 使用 npm 安装
npm install --save @ant-design/icons

// 使用 yarn 安装
yarn add @ant-design/icons
```

App组件中引入即可使用：

```tsx
import { useState } from 'react'
import { Button } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';

// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'  antd5就不需要引入样式了
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      顶级组件
      <Button type="primary">我们的按钮</Button>
      <UpCircleOutlined style={{ fontSize: '40px', color: 'red' }} />
    </div>
  )
}

export default App
```



## 八、配置Antd Design样式自动按需引入

antd的4.x版本以上已经支持组件按需引入，我们只需要解决样式上的自动按需引入即可。

安装插件vite-plugin-style-import（使用这个插件后，就不需要在App.tsx中引入样式了）

```bash
npm install vite-plugin-style-import@1.4.1 -D
```

在vite.config.ts中进行配置：

```tsx
import styleImport, {AntdResolve} from 'vite-plugin-style-import';

export default defineConfig({
    plugins: [
        react(),  // 默认给的
        styleImport({
            resolves: [
                AntdResolve()
            ],
        }),
    ]
    ...
})
```

在去掉APP.tsx中的 `import 'antd/dist/antd.css; // or 'antd/dist/antd.less'` 这一行样式引入

启动项目，发现报错，缺少less，进行安装

```bash
npm i less@2.7.1 -D
```



## 九、React路由——第一种配置方案（旧项目中的写法）

16、17版本，路由是组件的形式来编写的，以前要转成对象的形式，再map出来

### 9.1 初步展示

我们在这里模拟vue中的Home和About两个组件展示

【1. 准备界面】首先src下创建views文件夹，views文件夹下创建Home.tsx和About.tsx，大致代码如下：

```tsx
function View() {
	return (
		<div className="home">
			<p>这是Home组件</p>
		</div>
	)
}

export default View
```

【2. 配置对应关系】/src下创建router文件夹，再进去新建index.tsx

```tsx
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
const baseRouter = () => {
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
}
export default baseRouter


// {
//     path: "/home",
//     component:
// }
```

【3. 替换顶级组件】在/src/main.tsx中**把顶级组件App替换为这个路由对象：**

```tsx
// 引入路由对象
import Router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
    	<Router />
    </React.StrictMode>
)
```

【4. 添加窗口组件】/src/App.tsx中，使用<Outlet/>组件作为占位符组件：

```tsx
import { Outlet } from "react-router-dom"
function App() {
    // const [count, setCount] = useState(0)
    
    return (
    	<div className="App">
        	{/* 占位符组件，类似于窗口，用来展示组件的，有点像Vue中的 router-view */}
            <Outlet></Outlet>
        </div>
    )
}
```

这样就可以在浏览器中访问下面的地址，看到页面了：

```
http://localhost:3002/home
http://localhost:3002/about
```


### 9.2 编程式导航--设置菜单点击跳转

/src/App.tsx中，使用<Link/>组件进行跳转：

```tsx
import { Outlet, link } from "react-router-dom"
...
<div className="App">
	<Link to="/home">home</Link>
    <Link to="/aobut">aobut</Link>
    {/* 占位符组件，类似于窗口，用来展示组件的，有点像Vue中的 router-view */}
    <Outlet />
</div>
```

### 9.3 配置重定向

/src/router/index.tsx中：

```tsx
import { BrowerRouter, Routes, Route, Navigate } from "react-router-dom"
...

<Route path="/" element={<App />}>
    {/* 配置用户访问/的时候，重定向到/home路径 */}
    <Route path="/" element={<Navigate to="/home" />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
</Route>
```



## 十、React路由——第二种配置方案

### 10.1 路由表写法

【1. 修改router/index.tsx】

```tsx
import Home from "../views/Home"
import About from "../views/About"
import User from "../views/User"
// Navigate重定向组件
import { Navigate } from "react-router-dom"

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
        element: <About />
    },
    {
        path: "/user",
        element: <User />
    }
]

export default routes
```

【2. 修改main.tsx】使用原来的App，同时外层要加上BrowerRouter，history模式

```tsx
import App from './App'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 之前这里报错的原因是router里的简写有问题 */}
    {/* <Router /> */}

    {/* 一定要加上BroserRouter，history模式 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

【3. 修改App.tsx】换成Hook形式的对象

```tsx
import { useState } from 'react'
// import { Button } from 'antd'
// import { UpCircleOutlined } from "@ant-design/icons"
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'  antd5就不需要引入样式了。全局，全部组件的样式都引入
// import { Outlet, Link } from "react-router-dom"
import { useRoutes, Link } from 'react-router-dom'
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  // 换成Hook形式的对象
  const outlet = useRoutes(router)

  return (
    <div className="App">
      <Link to="/home">home</Link>
      <Link to="/about">aobut</Link>
      <Link to="/user">user</Link>

      {/* 占位符组件，类似于窗口，用来展示组件的，有点像Vue中的 router-view */}
      {/* <Outlet></Outlet> */}

      {outlet}
    </div>
  )
}

export default App

```

### 10.2 路由懒加载

/router/index.tsx  

- 引入lazy函数，React，注意 `<React.Suspense fallback={<div>Loading...</div>}><About /></React.Suspense>` 的写法
- 即懒加载的模式的组件的写法，外面需要套一层 Loading 的提示加载组件。

```tsx
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
```

### 10.3 抽取Loading组件函数

/router/index.tsx

```tsx
...
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

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
        element: withLoadingComponent(<About />)
    },
    {
        path: "/user",
        element: withLoadingComponent(<User />)
    }
]
```



## 十一、首页布局（含侧边栏）

使用侧边布局：https://ant.design/components/layout-cn#components-layout-demo-side

将代码复制到Home.tsx中，并将App修改为View，只需存在一个App。

此外，新版本不需要复制样式了。



## 十二、页面右侧结构样式的调整

**报错：未找到antd下的一个文件，因此，换用antd版本：5.4.1 -> 4.23.4**

主要修改了Home.tsx中的以下代码：

![image-20230407183040541](https://blog-1301840846.cos.ap-nanjing.myqcloud.com/img/image-20230407183040541.png)

同时，global.scss也修改了一个样式的背景色

```scss
 .site-layout .site-layout-background {
   background: #ccc;
 }
```



## 十三、点击跳转

### 13.1 点击侧边栏获取到路径

home.tsx

![image-20230407184241088](https://blog-1301840846.cos.ap-nanjing.myqcloud.com/img/image-20230407184241088.png)