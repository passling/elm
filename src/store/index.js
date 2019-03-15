import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  geohash: '',
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  cartList: {}
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
