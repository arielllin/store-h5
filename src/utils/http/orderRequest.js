import axios from 'axios-observable'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['user-key'] = process.env.USER_KEY
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

export default service
