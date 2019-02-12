import {SAVE_GEOHASH,
RECORD_ADDRESS} from './mutation-type'
export default {
  [SAVE_GEOHASH](state, geohash) {
    state.geohash = geohash
  },
  // 记录当前经纬度
  [RECORD_ADDRESS](state, {latitude, longitude}) {
    state.latitude = latitude
    state.longitude = longitude
  }
}
