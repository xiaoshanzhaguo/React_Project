import { useEffect } from "react"
import { Input, Space, Button } from "antd"
import styles from "./login.module.scss"
import initLoginBg from "./init"
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import './login.less'
const view = () => {
  // 加载完组件后，加载背景
  useEffect(() => {
    initLoginBg();
    window.onresize = function () { initLoginBg() };
  }, [])

  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      {/* 登陆盒子 */}
      <div className={styles.loginBox + " loginbox"}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>通用后台系统</h1>
          <p>Strive Everday</p>
        </div>
        {/* 表单部分 */}
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Input placeholder="用户名" />
            <Input.Password placeholder="密码" />
            <div className="captchBox">
              <Input placeholder="验证码" />
              <div className="captchImg">
                <img height="38" src="" alt="" />
              </div>
            </div>
            <Button type="primary" className="loginBtn" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default view