import req from '../utils/requst.js'
export function getMySiteAddress (params) {
  const url = '/v2/pois/' + params
  return req({
    url: url,
    type: 'GET'
  })
}
export function getMySiteFoodTypes(params) {
  return req({
    url: '/v2/index_entry',
    type: 'GET',
    data: Object.assign({
      group_type: '1',
      'flags[]': 'F'
    }, params)
  })
}
