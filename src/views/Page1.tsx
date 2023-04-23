import { useSelector, useDispatch } from "react-redux"

const View = () => {
  // 通过useDispatch修改仓库数据
  const dispatch = useDispatch();

  // 对num的操作
  // 通过useSelector获取仓库数据
  const { num } = useSelector((state: RootState) => ({
    num: state.handleNum.num
  })) // 这里再加一层小括号，表示要return一个对象

  const changeNum = () => {
    // dispatch({type: "字符串（认为是一个记号）", value: 3})  type是固定的，而value是自定义的
    // dispatch({type: "add1"})
    dispatch({ type: 'add3', val: 100 });
  }

  const changeNum2 = () => {
    dispatch({ type: 'add1'});
  }

  // 对sarr的操作
  const { sarr } = useSelector((state: RootState) => ({
    sarr: state.handleArr.sarr
  }));

  const changeArr = () => {
    dispatch({type: "sarrpush", val: 100});
  }

  return (
    <div className="page1">
      <p>这是Page1页面内容</p>
      <p>{num}</p>
      <button onClick={changeNum}>同步按钮</button>
      <button onClick={changeNum2}>异步按钮</button>

      <p>{sarr}</p>
      <button onClick={changeArr}>按钮</button>
    </div>
  )
}

export default View