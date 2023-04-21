import hanldeNum from "./NumStatus";

// 就是来管理数据的
// 有点像vuex里的state，用来存放数据
const defaultState = {
  // num: NumStatus.state.num  // 这种数据一多要写很多次
  ...hanldeNum.state  // 解构的写法
}

let reducer = (state = defaultState, action: {type: string, val: number}) => {
  // 初始化会执行一遍，后面调用dispatch会执行
  // console.log("执行了reducer");
  
  // 先进行深拷贝
  let newState = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case "add1":
      // newState.num++
      hanldeNum.actions.add1(newState, action)
      break;
    case "add2":
      // newState.num += action.val
      hanldeNum.actions.add2(newState, action)
      break;
    default:
      break;
  }

  return newState;
}

export default reducer