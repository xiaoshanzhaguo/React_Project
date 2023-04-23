import { createStore, combineReducers } from "redux"
import handleNum from "./NumStatus/reducer"
import handleArr from './ArrStatus/reducer'
import handleXxx from './XxxStatus/reducer'

// 组合各个模块的reducer
const reducers = combineReducers({
  handleNum,
  handleArr,
  handleXxx
})

// reducer用于管理数据
// 创建数据仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 为了让浏览器正常使用redux-dev-tools插件
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
export default store