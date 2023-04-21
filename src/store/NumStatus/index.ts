export default {
  state: {
    num: 20
  },
  actions: {
    add1(newState: {num: number}, action: {type: string}) {
      newState.num++
    },
    add2(newState: {num: number}, action: {type: string, val: number}) {
      newState.num += action.val
    }
  },
  // 名字统一管理
  // add1: "add1",  // 这样写的话，reducer.ts中case "add1"就可以替换成 case handleNum.add1
  // add2: "add2"
  actionNames: {
    add1: "add1",
    add2: "add2"
  }
}

// 封装的目的：最终是有利于我们的开发或者维护
// 封装的思路是：将来开发的时候只需要把数据写和方法写入到这个状态文件中，例如：XxxxStatus/index.ts，而不需要再去操作其他的文件。(我们往这个方向去封装)