import req from '../utils/requst'
export function getCityGuess(params) {
  return req({
    url: '/v1/cities',
    method: 'GET',
    params: {type: 'guess'}
  })
}
export function getHotCity(params) {
  return req({
    url: '/v1/cities',
    method: 'GET',
    params: params
  })
}
export function getGroupCity(params) {
  return req({
    url: '/v1/cities',
    method: 'GET',
    params: params
  })

}
