import axios from 'axios'

//创建axios实例
const instance = axios.create({
  baseURL: '/dev-api', //根路径
  timeout: 20000 //请求过期时间
})

//请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

//响应拦截器
instance.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default instance
