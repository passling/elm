import req from '../utils/requst'
export function getShopDetails(params) {
  return req({
    url: `/shopping/restaurant/${params.shopid}`,
    data: {
      latitude: params.latitude,
      longitude: params.longitude + '&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics'
    }
  })
}
export function getFoodMenu(params) {
  return req({
    url: '/shopping/v2/menu',
    params: params
  })
}
