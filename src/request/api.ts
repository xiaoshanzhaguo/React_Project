// 统一管理项目中所有的请求路径 api
import request from "./index"

// 验证码请求
export const captchaAPI = () => request.get("/prod-api/captchaImage");