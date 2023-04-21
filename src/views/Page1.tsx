import { useSelector } from "react-redux"

const View = () => {
  // 通过useSelector获取仓库数据
  const { num } = useSelector((state) => ({
    num: state.num
  })) // 这里再加一层小括号，表示要return一个对象
    return (
        <div className="page1">
            <p>这是Page1页面内容</p>
            <p>{num}</p>
        </div>
    )
}

export default View