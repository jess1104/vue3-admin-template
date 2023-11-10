// 統一管理項目用戶相關街口
import request from "@/utils/request";
import { loginForm, loginResponseData } from "./type";

enum API {
  LOGIN_URL = "login",
  GAMELIST_URL = "category-statistics",
}

// 輸出api方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
export const reqGameList = () => request.get(API.GAMELIST_URL);
