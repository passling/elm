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
</style>
<template>
    <div>
      <header-top sign-up="mySite">
        <router-link to="/home" slot="mySite" class="my-site-title">
          <span class="title-text ellipsis">{{mySiteTitle}}</span>
        </router-link>
      </header-top>
      <nav class="my-site-nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide food-types-container" v-for="(item, index) in foodTypes">
              <router-link
                v-for="foodItem in item"
                :key="foodItem.id"
                :to="{path: '/food', query: {geoHash, title: foodItem.title}}"
                class="link-to-food">
                <figure>
                  <img :src="imgBaseUrl + foodItem.image_url">
                  <figcaption>{{foodItem.title}}</figcaption>
                </figure>
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
  // 组件
  import HeaderTop from '../../components/header/HeaderTop'
  import Swiper from 'swiper'

  // api
  import {getCityGuess} from '../../api/home'
  import {getMySiteAddress, getMySiteFoodTypes} from '../../api/mySite'

  export default {
    data () {
      return {
        geoHash: '',
        mySiteTitle: '请选择地址...',
        foodTypes: [],
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
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
      getMySiteAddress(this.geoHash).then(resp => {
        this.mySiteTitle = resp.name
      })
      getMySiteFoodTypes({geohash: this.geohash}).then(resp => {
        const length = resp.length
        const resArr = [...resp]
        const foodArr = []
        for (let i = 0, j = 0; i < length; i += 8, j++) {
          foodArr[j] = resArr.splice(0, 8)
        }
        this.foodTypes = foodArr
        new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          loop: true
        })
      })
    },
    beforeMount () {

    },
    methods: {
      getCategoryId(rul) {

      }
    },
    components: {
      HeaderTop
    }
  }
</script>


