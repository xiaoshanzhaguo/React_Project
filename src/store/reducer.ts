// 有点像vuex里的state，用来存放数据
const defaultState = {
  num: 20
}
let reducer = (state = defaultState,) => {
  // 先进行深拷贝
  let newState = JSON.parse(JSON.stringify(state));

  return newState;
}

export default reducer