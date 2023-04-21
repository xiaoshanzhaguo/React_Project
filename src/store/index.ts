import { createStore } from "redux"
import reducer from "./reducer"  // 这里加.ts会报错

// reducer用于管理数据
// 创建数据仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 为了让浏览器正常使用redux-dev-tools插件
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
export default store