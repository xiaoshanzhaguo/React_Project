import { useEffect } from "react"
import styles from "./login.module.scss"
import initLoginBg from "./init"
const view = () => {
  // 加载完组件后，加载背景
  useEffect(() => {
    initLoginBg();
    window.onresize = function() {initLoginBg()};
  }, [])

  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{display: "block"}}></canvas>
      {/* 登陆盒子 */}
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>通用后台系统</h1>
          <p>Strive Everday</p>
        </div>
      </div>
    </div>
  )
}

export default view