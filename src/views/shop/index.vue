<style lang="scss" scoped>
  @import "../../style/mixin";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .shop-container{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
  }
  .go-back{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    z-index: 11;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
  }
  .shop-detail-header{
    overflow: hidden;
    position: relative;
    .header-cover-img{
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;
      filter: blur(10px);
    }
    .description-header{
      position: relative;
      z-index: 10;
      background: rgba(119,103,137,.43);
      padding: .4rem 0 .4rem .4rem;
      width: 100%;
      overflow: hidden;
      .description-top{
        display: flex;
        .description-left{
          margin-right: .3rem;
          img{
            @include wh(2.9rem, 2.9rem);
            display: block;
            border-radius: .15rem;
          }
        }
        .description-right{
          flex: 1;
          .description-title{
            @include sc(.8rem,#fff);
            font-weight: bold;
            width: 100%;
            margin-bottom: 0.3rem;
          }
          .description-text{
            @include sc(.5rem,#fff);
            margin-bottom: .3rem;
          }
          .description-promotion{
            @include sc(.5rem,#fff);
            width: 11.5rem;
          }
        }
        .description-arrow{
          @include ct;
          right: .3rem;
          z-index: 11;
        }
      }
      .description-footer{
        @include fj;
        margin-top: .5rem;
        padding-right: 1rem;
        p{
          @include sc(.5rem,#fff);
          span{
            color: #fff;
          }
          .tip-icon{
            padding: 0 .04rem;
            border: .025rem solid #fff;
            border-radius: 0.1rem;
            font-size: .4rem;
            display: inline-block;
          }
        }
        .ellipsis{
          width: 84%;
        }
        .footer-arrow{
          @include wh(.45rem, .45rem);
          position: absolute;
          right: .3rem;
        }
      }
    }
  }
  .activities-details{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #262626;
    z-index: 200;
    padding: 1.25rem;
    .activities-shop-title{
      text-align: center;
      @include sc(.8rem, #fff);

    }
    .activities-rating-start{
      display: flex;
      justify-content: center;
      transform: scale(2.2);
      margin-top: .7rem;
    }
    .activities-title-style{
      text-align: center;
      margin-bottom: 1rem;
      span{
        @include sc(.5rem, #fff);
        border: 0.025rem solid #555;
        padding: .2rem .4rem;
        border-radius: 0.5rem;
      }

    }
    .activities-shop-info{
      p{
        line-height: .7rem;
        @include sc(.5rem, #fff);
      }
    }
    .activities-list{
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      @include sc(.5rem, #fff);
      li{
        margin-bottom: .2rem;
        .activities-icon{
          padding: 0 .02rem;
          display: inline-block;
          border: 0.025rem solid #fff;
          border-radius: 0.1rem;
        }
        span{
          color: #fff;
          line-height: .6rem;
        }
      }
    }
    .close-activities{
      position: absolute;
      bottom: 1rem;
      @include cl;
    }
  }
  .change-show-type{
    display: flex;
    background: #fff;
    padding: .3rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
    div{
      flex: 1;
      text-align: center;
      span{
        @include sc(.65rem, #666);
        padding: .22rem .1rem;
        border-bottom: 0.12rem solid #fff;
      }
      .activity_show{
        color: #3190e8;
        border-color: #3190e8;
      }
    }
  }
  .food-container{
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
  }
  .menu-container{
    display: flex;
    flex: 1;
    overflow-y: hidden;
    position: relative;
    .menu-left{
      width: 3.8rem;
      .menu-left-li{
        padding: .7rem .3rem;
        border-bottom: .025rem solid #ededed;
        box-sizing: border-box;
        border-left: .15rem solid #f8f8f8;
        position: relative;
        img{
          @include wh(.5rem, .6rem);
          margin-right: 4px;
        }
        span{
          @include sc(.6rem, #666);
        }
        .category-num{
          position: absolute;
          top: .1rem;
          right: .1rem;
          background: #ff461d;
          line-height: .6rem;
          text-align: center;
          border-radius: 50%;
          border: .025rem solid #ff461d;
          min-width: .6rem;
          height: .6rem;
          @include sc(.5rem, #fff);
          font-family: Helvetica Neue,Tahoma,Arial;
        }
      }
    }
  }
</style>
<template>
    <div>
      <section class="shop-container">
        <nav class="go-back" @click="$router.go(-1)">
          <svg width="4rem" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:3"/>
          </svg>
        </nav>
        <header class="shop-detail-header">
          <img :src="imgBaseUrl + shopDetail.image_path" alt="" class="header-cover-img">
          <section class="description-header">
            <router-link to="/shop/shpDetail" class="description-top">
              <section class="description-left">
                <img :src="imgBaseUrl + shopDetail.image_path">
              </section>
              <section class="description-right">
                <h4 class="description-title ellipsis">{{shopDetail.name}}</h4>
                <p class="description-text">商家配送／{{shopDetail.order_lead_time}}分钟送达／配送费¥{{shopDetail.float_delivery_fee}}</p>
                <p class="description-promotion ellipsis">公告：{{promotionInfo}}</p>
              </section>
              <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" version="1.1" class="description-arrow" >
                <path d="M0 0 L8 7 L0 14"  stroke="#fff" stroke-width="1" fill="none"/>
              </svg>
            </router-link>
            <footer
              v-if="shopDetail.activities&&shopDetail.activities.length"
              @click="showActivity = !showActivity"
              class="description-footer">
              <p class="ellipsis">
                <span class="tip-icon" :style="{backgroundColor: '#' + shopDetail.activities[0].icon_color, borderColor: '#' + shopDetail.activities[0].icon_color}">{{shopDetail.activities[0].icon_name}}</span>
                <span>{{shopDetail.activities[0].description}}（APP专享）</span>
              </p>
              <p>{{shopDetail.activities.length}}个活动</p>
              <svg class="footer-arrow">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
              </svg>
            </footer>
          </section>
        </header>
        <transition name="fade">
          <section class="activities-details" v-if="showActivity">
            <h2 class="activities-shop-title">{{shopDetail.name}}</h2>
            <rating-start :rating='shopDetail.rating' class="activities-rating-star"></rating-start>
            <section class="activities-list">
              <header class="activities-title-style"><span>优惠信息</span></header>
              <ul>
                <li v-for="item in shopDetail.activities" :key="item.id">
                  <span class="activities-icon" :style="{backgroundColor: '#' + item.icon_color, borderColor: '#' + item.icon_color}">{{item.icon_name}}</span>
                  <span>{{item.description}}（APP专享）</span>
                </li>
              </ul>
            </section>
            <section class="activities-shop-info">
              <header class="activities-title-style"><span>商家公告</span></header>
              <p>{{promotionInfo}}</p>
            </section>
            <svg  @click="showActivity = !showActivity" width="60" height="60" class="close-activities" >
              <circle cx="30" cy="30" r="25" stroke="#555" stroke-width="1" fill="none"/>
              <line x1="22" y1="38" x2="38" y2="22" style="stroke:#999;stroke-width:2"/>
              <line x1="22" y1="22" x2="38" y2="38" style="stroke:#999;stroke-width:2"/>
            </svg>
          </section>
        </transition>
        <section class="change-show-type">
          <div>
            <span :class='{activity_show: changeShowType =="food"}' @click="changeShowType='food'">商品</span>
          </div>
          <div>
            <span :class='{activity_show: changeShowType =="rating"}' @click="changeShowType='rating'">评价</span>
          </div>
        </section>
        <transition name="fade-choose">
          <section class="food-container">
            <section class="menu-container">
              <section class="menu-left">
                <ul>
                  <li
                    v-for="item in menuList"
                    :key="item.id"
                    class="menu-left-li">
                    <header class="menu-detail-header-left">
                      <img :src="getImgPath(item.icon_url)" v-if="item.icon_url">
                      <span>{{item.name}}</span>
                    </header>
                  </li>
                </ul>
              </section>
              <section class="menu-right">
                <ul>
                  <li v-for="(item, index) in menuList" :key="item.id">
                    <header class="menu-detail-header">
                      <section class="menu-detail-header-left">
                        <strong class="menu-item-title">{{item.name}}</strong>
                        <span class="menu-item-description">{{item.description}}</span>
                      </section>
                      <span class="menu-detail-header-right"></span>
                    </header>
                    <section
                      v-for="(foods, foodIdx) in item.foods"
                      :key="foodIdx"
                      class="menu-detail-list">
                      <router-link
                        :to="{path: 'shop/foodDetail', query: {image_path:foods.image_path, description: foods.description, month_sales: foods.month_sales, name: foods.name, rating: foods.rating, rating_count: foods.rating_count, satisfy_rate: foods.satisfy_rate, foods, shopId}}"
                        tag="div"
                        class="menu-detail-link">
                        <section class="menu-food-img">
                          <img :src="imgBaseUrl + foods.image_path">
                        </section>
                      </router-link>

                    </section>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </transition>
      </section>
    </div>
</template>

<script>
  import {getShopDetails, getFoodMenu} from '../../api/shop'
  import {getMySiteAddress} from '../../api/mySite'
  import {mapState, mapMutations} from 'vuex'
  import {imgBaseUrl} from '../../data/common'
  import {getImgPath} from '../../utils/mixins'

  // 组件
  import RatingStart from '../../components/RatingStart'
  export default {
    data () {
          return {
            shopId: '',
            geoHash: '',
            showLoading: false,
            shopDetail: {},
            imgBaseUrl: imgBaseUrl,
            promotionInfo: '',
            showActivity: false,
            changeShowType: 'food',
            menuList: [],
            categoryNum: []
          }
        },
    created () {
      this.init()
    },
    mixins: [getImgPath],
    methods: {
      ...mapMutations(['RECORD_ADDRESS']),
      init () {
        this.geoHash = this.$route.query.geoHash
        this.shopId = this.$route.query.id
        if (this.latitude) {
          getMySiteAddress().then(resp => {
            this.RECORD_ADDRESS(resp)
          })
        }
        getShopDetails({
          latitude: this.latitude,
          longitude: this.longitude,
          shopid: this.shopId
        }).then(resp => {
          this.shopDetail = resp
          this.promotionInfo = resp.promotion_info || '欢迎光临，用餐高峰期请提前下单，谢谢。'
        })
        getFoodMenu({restaurant_id: this.shopId}).then(resp => {
          this.menuList = resp
        })
      }
    },
    computed: {
      ...mapState(['latitude', 'longitude'])
    },
    components: {
      RatingStart
    }
  }
</script>


