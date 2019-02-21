import req from '../utils/requst'
export function getFoodCategory(params) {
  return req({
    url: '/shopping/v2/restaurant/category',
    type: 'GET',
    params: Object.assign({
      kw: ''
    }, params)
  })
}
export function getDelivery(params) {
  return req({
    url: '/shopping/v1/restaurants/delivery_modes',
    type: 'GET',
    params: Object.assign({
      kw: ''
    }, params)
  })
}
export function getActivity(params) {
  return req({
    url: '/shopping/v1/restaurants/activity_attributes',
    type: 'GET',
    params: Object.assign({
      kw: ''
    }, params)
  })
}
