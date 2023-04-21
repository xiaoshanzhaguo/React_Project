// 就是来管理数据的
// 有点像vuex里的state，用来存放数据
const defaultState = {
  num: 20
}

let reducer = (state = defaultState, action: {type: string, val: number}) => {
  // 初始化会执行一遍，后面调用dispatch会执行
  // console.log("执行了reducer");
  
  // 先进行深拷贝
  let newState = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case "add1":
      newState.num++
      break;
    case "add2":
      newState.num += action.val
      break;
    default:
      break;
  }

  return newState;
}

export default reducer