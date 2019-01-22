import axios from 'axios'
axios.defaults.withCredentials = true
const service = axios.create({
  baseURL: '//elm.cangdu.org'
})
axios.interceptors.request.use(config => {
  return config
}, err => {
  console.log(error)
  Promise.reject(error)
})
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
export default service
