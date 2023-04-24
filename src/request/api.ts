// 统一管理项目中所有的请求路径 api
import request from "./index"

// 请求中，请求的参数和返回值的类型，都需要进行约束

// 验证码请求
export const CaptchaAPI = ():Promise<CaptchAPIRes> => request.get("/prod-api/captchaImage");