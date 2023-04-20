import { createStore } from "redux"
import reducer from "./reducer"  // 这里加.ts会报错

// reducer用于管理数据
// 创建数据仓库
const store = createStore(reducer)

export default store