// 这个文件专门定义请求参数的类型，和响应的类型

interface CaptchAPIRes {
  msg: string,
  img: string,
  code: number,
  captchEnabled: boolean,
  uuid: string;
}