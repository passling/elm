import req from '../utils/requst'
export function searchRestaurant(params) {
  return req({
    url: '/v4/restaurants',
    params: Object.assign({
      'extras[]': 'restaurant_activity',
      type: 'search'
    }, params)
  })
}
