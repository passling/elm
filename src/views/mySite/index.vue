<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .my-site-title{
    @include center;
    width: 50%;
    color: #fff;
    text-align: center;
    margin-left: -0.5rem;
    .title-text{
      @include sc(0.8rem, #fff);
      text-align: center;
      display: block;
    }
  }
  .my-site-nav{
    padding-top: 2.1rem;
    background: #fff;
    border-bottom: 0.025rem solid $bc;
    height: 10.6rem;
    .swiper-container{
      @include wh(100%, auto);
      padding-bottom: 0.6rem;
      .swiper-pagination {
        bottom: 0.2rem;
      }
    }
  }
  .food-types-container {
    display: flex;
    flex-wrap: wrap;
    .link-to-food{
      width: 25%;
      padding: 0.3rem 0;
      @include fj(center)
    }
    figure{
      img{
        margin-bottom: 0.3rem;
        @include wh(1.8rem, 1.8rem);
      }
      figcaption{
        text-align: center;
        @include sc(0.55rem, #666);
      }
    }
  }
  .shop-list-container{
    margin-top: .4rem;
    border-top: .025rem solid $bc;
    background-color: #fff;
    .shop-header{
      .shop-icon{
        fill: #999;
        margin-left: .6rem;
        vertical-align: middle;
        @include wh(.6rem, .6rem)
      }
      .shop-header-title{
        color: #999;
        @include font(.55rem, 1.6rem)
      }
    }
  }
</style>
<template>
    <div>
      <header-top sign-up="mySite">
        <router-link to="/home" slot="mySite" class="my-site-title">
          <span class="title-text ellipsis">{{mySiteTitle}}</span>
        </router-link>
      </header-top>
      <nav class="my-site-nav">
        <div class="swiper-container" v-if="foodTypes.length">
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide class="food-types-container" v-for="(item, index) in foodTypes">
              <router-link
                v-for="foodItem in item"
                :key="foodItem.id"
                :to="{path: '/food', query: {geoHash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}"
                class="link-to-food">
                <figure>
                  <img :src="imgBaseUrl + foodItem.image_url">
                  <figcaption>{{foodItem.title}}</figcaption>
                </figure>
              </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </nav>
      <div class="shop-list-container">
        <header class="shop-header">
          <svg class="shop-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
          </svg>
          <span class="shop-header-title">附近商家</span>
        </header>
        <shop-list v-if="hasGetPosition" :geo-hash="geoHash"></shop-list>
      </div>
    </div>
</template>

<script>
  // 组件
  import HeaderTop from '../../components/header/HeaderTop'
  import ShopList from '../../components/ShopLlist'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  // api
  import {getCityGuess} from '../../api/home'
  import {getMySiteAddress, getMySiteFoodTypes} from '../../api/mySite'
  import {mapMutations} from 'vuex'

  export default {
    data () {
      return {
        geoHash: '',
        mySiteTitle: '请选择地址...',
        foodTypes: [],
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
        swiperOption: {
          pagination: {el: ".swiper-pagination"}
        },
        hasGetPosition: false
      }
    },
    created () {
      let lngLag = this.$route.query.geoHash
      if (!lngLag) {
        getCityGuess().then(resp => {
          this.geoHash = resp.latitude + ',' + resp.longitude
        })
      } else {
        this.geoHash = lngLag
      }
      this.SAVE_GEOHASH(this.geoHash)
      getMySiteAddress(this.geoHash).then(resp => {
        this.mySiteTitle = resp.name
        // 记录当前经度纬度
        this.RECORD_ADDRESS(resp)
        this.hasGetPosition = true
      })
      getMySiteFoodTypes({geohash: this.geohash}).then(resp => {
        const length = resp.length
        const resArr = [...resp]
        const foodArr = []
        for (let i = 0, j = 0; i < length; i += 8, j++) {
          foodArr[j] = resArr.splice(0, 8)
        }
        this.foodTypes = foodArr
      })
    },
    mounted() {},
    methods: {
      ...mapMutations(['SAVE_GEOHASH', 'RECORD_ADDRESS']),
      getCategoryId(url) {
        const urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''))
        if (/restaurant_category_id/gi.test(urlData)) {
          return JSON.parse(urlData).restaurant_category_id.id
        }else{
          return ''
        }
      },
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      HeaderTop,
      swiper,
      swiperSlide,
      ShopList
    }
  }
</script>


