import req from '../utils/requst'
export function getCurrentCity(id) {
  const url ='/v1/cities/' + id
  return req({
    url: url,
    type: 'GET'
  })
}
export function searchPlace (params) {
  return req({
    url: '/v1/pois',
    type: 'GET',
    params: params
  })
}
