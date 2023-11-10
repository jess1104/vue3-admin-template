// 登入街口需要攜帶參數ts類型
export interface loginForm {
  user_identify: string;
  password: string;
}

interface dataType {
  id: string;
  email: string;
  expirse_at: string;
  message: string;
  name: string;
  token: string;
  username: string;
}

// 登入街口返回的數據類型
export interface loginResponseData {
  redirect_to: string;
  result: dataType;
}
