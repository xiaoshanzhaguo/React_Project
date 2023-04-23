import handler from "./index"

let reducer = (state = {...handler.state}, action: {type: string, val: number}) => {
  // 初始化会执行一遍，后面调用dispatch会执行
  // console.log("执行了reducer");
  
  // 先进行深拷贝
  let newState = JSON.parse(JSON.stringify(state));

  for (let key in handler.actionNames) {
    // key是每个键
    // 判断是不是相等
    if (action.type === handler.actionNames[key]) {
      handler.actions[handler.actionNames[key]](newState, action);
      break;
    }
  }
  // 这样写，每一次写一个方法都不需要再手动来添加这里的case
  return newState;
}

export default reducer