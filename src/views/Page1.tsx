import { useSelector, useDispatch } from "react-redux"

const View = () => {
  // 通过useSelector获取仓库数据
  const { num } = useSelector((state) => ({
    num: state.num
  })) // 这里再加一层小括号，表示要return一个对象

  // 通过useDispatch修改仓库数据
  const dispatch = useDispatch();
  const changeNum = () => {
    // dispatch({type: "字符串（认为是一个记号）", value: 3})  type是固定的，而value是自定义的
    // dispatch({type: "add1"})
    dispatch({ type: 'add2', val: 10 })
  }

  return (
    <div className="page1">
      <p>这是Page1页面内容</p>
      <p>{num}</p>
      <button onClick={changeNum}>按钮</button>
    </div>
  )
}

export default View