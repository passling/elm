import axios from 'axios'
axios.defaults.withCredentials = true
const service = axios.create({
  baseURL: '//elm.cangdu.org'
})
service.interceptors.request.use(config => {
  return config
}, err => {
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})
export default service
