const baseUrl = ''
export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase()
  url = baseUrl + url
  if (type === 'GET') {
    let params = ''
    Object.keys(data).forEach(key => {
      params += `${key}=${data[key]}&`
    })
    if (params) {
      params = params.substr(0, params.lastIndexOf('&'))
      url = `${url}?${params}`
    }
  }
  if (window.fetch && method === 'fetch') {
    const requestConfig = {
      credentials
    }
  }
}
