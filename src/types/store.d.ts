// !!!【】类型声明文件厘米不要直接使用引入import ... from ...，而是使用import("@/store") 这种语法
// import store from "@/store";  // 不建议在声明里这么写，否则在别的地方需要引入，这里需要导出
// TS中提供了ReturnType，用来获取函数类型的返回值
type RootState = ReturnType<typeof import("@/store").getState>

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: funciton;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function;
}