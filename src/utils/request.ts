// 進行axios二次封裝
import axios from "axios";
import { ElMessage } from "element-plus";
// step 1. 創建axios實例(其他配置：基礎路徑,超時時間
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 80000, // 超時時間設置
});
// step 2.添加請求與響應攔截器
request.interceptors.request.use((config) => {
  return config;
});

// step 3響應攔截器
request.interceptors.response.use(
  (response) => {
    //成功回调
    //简化数据
    return response.data;
  },
  (error) => {
    console.log("error", error);
    console.log("errRes", error.response);
    //失败回调:处理http网络错误的
    //定义一个变量:存储网络错误信息
    let message = "";
    //http状态码
    const status = error.response.status;
    switch (status) {
      case 401:
        message = "TOKEN过期";
        break;
      case 403:
        message = "无权访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器出现问题";
        break;
      default:
        message = "网络出现问题";
        break;
    }
    //提示错误信息
    ElMessage({
      type: "error",
      message,
    });
    return Promise.reject(error);
  },
);

export default request;
