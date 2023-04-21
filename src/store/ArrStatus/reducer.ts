import handleArr from "./index"

let reducer = (state = {...handleArr.state}, action: {type: string, val: number}) => {
  // 初始化会执行一遍，后面调用dispatch会执行
  // console.log("执行了reducer");
  
  // 先进行深拷贝
  let newState = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case handleArr.sarrpush:
      // newState.num++
      handleArr.actions[handleArr.sarrpush](newState, action)
      break;
    default:
      break;
  }

  return newState;
}

export default reducer