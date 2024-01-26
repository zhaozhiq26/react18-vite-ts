import request from './index'

//只有返回值的get请求,如请求验证码接口
export const CodeAPI = (): Promise<any> => request.get('/code')

//含有参数的和返回值的post请求，如登录请求接口
export const LoginAPI = (params: any): Promise<any> =>
  request.post('/auth/webLogin', params)
