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
export function getShopList(params) {
  return req({
    url: '/shopping/restaurants',
    type: 'GET',
    params: Object.assign({
      limit: '20',
      'extras[]': 'activities',
      keyword: '',
      'restaurant_category_ids[]': '',
      order_by: '',
      restaurant_category_id: '',
      'delivery_mode[]': ''
    }, params)
  })
}
