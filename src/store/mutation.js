import {
  SAVE_GEOHASH,
  RECORD_ADDRESS, ADD_CART, INIT_BUY_CART, REDUCE_CART,
  CLEAR_CART
} from './mutation-type'
import {setStore, getStore} from '../utils/utils'

export default {
  [SAVE_GEOHASH](state, geohash) {
    state.geohash = geohash
  },
  // 记录当前经纬度
  [RECORD_ADDRESS](state, {latitude, longitude}) {
    state.latitude = latitude
    state.longitude = longitude
  },
  [ADD_CART] (state, {shopId, food, currentFood, specs}) {
    const cart = state.cartList
    let shop = cart[shopId] = (cart[shopId] || {})  // 店铺id
    let category = shop[food.category_id] = (shop[food.category_id] || {}) // 店铺类别id
    let  item = category[food.item_id] = (category[food.item_id] || {}) //
    const foodId = currentFood.food_id
    if (item[foodId]) {
      item[foodId].num++
    } else {
      item[foodId] = {
        num: 1,
        id: foodId,
        name: currentFood.name,
        price: currentFood.price,
        specs: specs,
        packingFee: currentFood.packing_fee,
        skuId: currentFood.sku_id,
        stock: currentFood.stock
      }
    }
    state.cartList = {...cart}
    setStore('buyCart', state.cartList)
  },
  [INIT_BUY_CART] (state) {
    const initCart = getStore('buyCart')
    if (initCart) {
      state.cartList = JSON.parse(initCart)
    }
  },
  [REDUCE_CART] (state, {shopId, categoryId, itemId, foodId}) {
    let cart = state.cartList
    const shop = (cart[shopId] || {})
    const cateGory = (shop[categoryId] || {})
    const item = (cateGory[itemId] || {})
    if (item && foodId) {
      if (item[foodId].num > 0) {
        item[foodId].num--
        state.cartList = {...cart}
        setStore('buyCart', state.cartList)
      } else {
        item[foodId] = null
      }
    }
  },
  [CLEAR_CART] (state, shopId) {
    state.cartList[shopId] = null
    state.cartList = {...state.cartList}
    setStore('buyCart', state.cartList)
  }

}
