import { ChangeEvent, useEffect, useState } from "react"
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
  }, []);
  // 获取用户输入的信息
  const [usernameVal, setUsernameVal] = useState("");  // 定义用户输入信息这个变量
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 获取用户输入的用户名
    // console.log(e.target.value);
    setUsernameVal(e.target.value);
  }

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
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" />
            {/* 验证码盒子 */}
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