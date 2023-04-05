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

