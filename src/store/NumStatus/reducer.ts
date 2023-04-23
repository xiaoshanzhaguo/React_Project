import handleNum from "./index"

// 就是来管理数据的
// 有点像vuex里的state，用来存放数据
// const defaultState = {
//   // num: NumStatus.state.num  // 这种数据一多要写很多次
//   ...hanldeNum.state,  // 解构的写法
// }

let reducer = (state = {...handleNum.state}, action: {type: string}) => {
  // 初始化会执行一遍，后面调用dispatch会执行
  // console.log("执行了reducer");
  
  // 先进行深拷贝
  let newState = JSON.parse(JSON.stringify(state));

  // switch(action.type) {
  //   case handleNum.add1:
  //     // newState.num++
  //     handleNum.actions[handleNum.add1](newState, action)
  //     break;
  //   case handleNum.add2:
  //     // newState.num += action.val
  //     handleNum.actions[handleNum.add2](newState, action)
  //     break;
  //   default:
  //     break;
  // }

  // 思路：switch的做法是拿着action.type和case后面的每一个进行对比，这种做法很像遍历。
  // 那我们就把case后面的这些值做成对象，acitonNames
  // 【优化】上面这样写，我们每添加一个方法，都要在这里多写一句case
  // 拿着action.type和actionNames进行每一项的对比，如果是相等，就调用模块名.actions[下标](newState, action)
  for (let key in handleNum.actionNames) {
    // key是每个键
    // 判断是不是相等
    if (action.type === handleNum.actionNames[key]) {
      handleNum.actions[handleNum.actionNames[key]](newState, action);
      break;
    }
  }
  // 这样写，每一次写一个方法都不需要再手动来添加这里的case
  return newState;
}

export default reducer