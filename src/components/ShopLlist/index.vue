
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .shop-list-container{
    background: #fff;
    margin-bottom: 2rem;
    .shop-li{
      display: flex;
      border-bottom: 0.025rem solid #f1f1f1;
      padding: 0.7rem 0.4rem;
    }
    .shop-img{
      @include wh(2.7rem, 2.7rem);
      display: block;
      margin-right: 0.4rem;
    }
  }
  .shop-right{
    flex: auto;
    .shop-detail-header{
      @include fj;
      align-items: center;
      .shop-title{
        width: 8.5rem;
        color: #333333;
        padding-top: .01rem;
        @include font(0.65rem, 0.65rem, 'PingFangSC-Regular');
        font-weight: 700;
      }
      .premium::before{
        content: '品牌';
        display: inline-block;
        font-size: .5rem;
        line-height: .6rem;
        color: #333;
        background: #ffd930;
        padding: 0 .1rem;
        border-radius: 0.1rem;
        margin-right: 0.2rem;
      }
      .shop-detail-ul{
        display: flex;
        transform: scale(.8);
        margin-right: -.3rem;
        .supports{
          @include sc(0.5rem, #999);
          border: 0.025rem solid #f1f1f1;
          padding: 0 0.04rem;
          border-radius: 0.08rem;
          margin-left: 0.05rem;
        }
      }
    }
    .rating-order-num{
      @include fj(space-between);
      height: 0.6rem;
      margin-top: 0.52rem;
      .rating-order-num-left{
        @include fj(flex-start);
        .rating-section{
          display: flex;
          .rating-num{
            @include sc(0.4rem, #ff6000);
            margin: 0 0.2rem;
          }
        }
        .order-section{
          transform: scale(.8);
          margin-left: -0.2rem;
          @include sc(0.4rem, #666);
        }
      }
      .rating-order-num-right{
        display: flex;
        align-items: center;
        transform: scale(.7);
        min-width: 5rem;
        justify-content: flex-end;
        margin-right: -0.8rem;
        .delivery-style{
          font-size: 0.4rem;
          padding: 0.04rem 0.08rem 0;
          border-radius: 0.08rem;
          margin-left: 0.08rem;
          border: 1px;
        }
        .delivery-left{
          color: #fff;
          background-color: $blue;
          border: 0.025rem solid $blue;
        }
        .delivery-right{
          color: $blue;
          border: 0.025rem solid $blue;
        }
      }
    }
    .fee-distance{
      margin-top: .52rem;
      @include fj;
      @include sc(.5rem, #333);
      .fee{
        transform: scale(.9);
        @include sc(0.5rem, #666);
      }
      .distance-time{
        transform: scale(.9);
        span{
          color: #999;
        }
        .order-time{
          color: $blue;
        }
        .segmentation{
          color: #ccc;
        }
      }
    }
  }
  .empty-data{
    @include font(.6rem, 3);
    text-align: center;
    color: #333;
  }
  .return-top{
    position: fixed;
    bottom: 3rem;
    right: 1rem;
    .back-top-svg{
      @include wh(2rem, 2rem)
    }
  }
</style>
<template>
    <div class="shop-list-container">
      <ul v-load-more="loaderMore" v-if="shopList.length" type="1">
        <router-link
        :to="{path: '/shop',query:{geoHash, id: item.id}}"
        v-for="item in shopList"
        :key="item.id"
        tag="li"
        class="shop-li"
        >
          <section>
            <img :src="imgBaseUrl+item.image_path" class="shop-img">
          </section>
          <hgroup class="shop-right">
            <header class="shop-detail-header">
              <h4 :class="item.is_premium? 'premium': ''"  class="shop-title ellipsis">{{item.name}}</h4>
              <ul class="shop-detail-ul">
                <li
                  v-for="cItem in item.supports"
                  :key="cItem.id" class="supports"
                >{{cItem.icon_name}}</li>
              </ul>
            </header>
            <h5 class="rating-order-num">
              <section class="rating-order-num-left">
                <section class="rating-section">
                  <rating-start :rating='item.rating'></rating-start>
                  <span class="rating-num">{{item.rating}}</span>
                </section>
                <section class="order-section">
                  月售{{item.recent_order_num}}单
                </section>
              </section>
              <section class="rating-order-num-right">
                <span class="delivery-style delivery-left" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
                <span class="delivery-style delivery-right" v-if="zhunShi(item.supports)">准时达</span>
              </section>
            </h5>
            <h5 class="fee-distance">
              <p class="fee">
                ￥{{item.float_minimum_order_amount}}起送
                <span class="segmentation">/</span>
                {{item.piecewise_agent_fee.tips}}
              </p>
              <p class="distance-time">
							<span v-if="Number(item.distance)">{{item.distance > 1000? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}}
								<span class="segmentation">/</span>
							</span>
                <span v-else>{{item.distance}}</span>
                <span class="segmentation">/</span>
                <span class="order-time">{{item.order_lead_time}}</span>
              </p>
            </h5>
          </hgroup>
        </router-link>
      </ul>
      <ul v-else class="animation-opacity">
        <li class="list-back-li"  v-for="item in 10" :key="item">
          <img src="../../images/shopback.svg" class="list-back-svg">
        </li>
      </ul>
      <p v-if="isEnd" class="empty-data">没有更多了</p>
      <aside class="return-top" v-if="showBackStatus" @click="backTop">
        <svg class="back-top-svg">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#backtop"></use>
        </svg>
      </aside>
      <transition name="loading">
        <loading v-show="showLoading"></loading>
      </transition>
    </div>
</template>

<script>
    // 组件
    import RatingStart from '../RatingStart'
    import loading from '../loading'
    // api
    import {mapState} from 'vuex'
    import {getShopList} from '../../api/mySite'
    import {loadMore} from '../../utils/mixin'
    import {animate, showBack} from '../../utils/utils'

    export default {
      props: {
        geoHash: String,               // 位置
        restaurantCategoryId: Number,  // 分类id
        restaurantCategoryIds: String, // 分类下具体商品具id
        sortByType: String,              //排序方式
        deliveryMode: Number,          // 配送方式
        supportIds: Array,            // 商家属性
        confirmStatus: Boolean
      },
      data () {
        return {
          imgBaseUrl: '//elm.cangdu.org/img/',
          shopList: [], // 店铺列表数据
          offset: 0, // 每次加载20个 limit = 20
          isEnd: false,
          preventRepeatRequest: false,
          showLoading: false,
          showBackStatus: false
        }
      },
      computed: {
        ...mapState(['latitude',
          'longitude'])
      },
      mixins: [loadMore],
      created () {
        showBack(status => {
          this.showBackStatus = status
        })
      },
      methods: {
        init () {
          this.showLoading = true
          let supportStr = ''
          if (this.supportIds && this.supportIds.length) {
            for (const item of this.supportIds) {
              if (item.status) {
                supportStr += '&support_ids[]=' + item.id
              }
            }
          }

          getShopList({
            latitude: this.latitude,
            longitude: this.longitude,
            offset: this.offset,
            restaurant_category_id: this.restaurantCateGoryId || '',  // 分类id
            'restaurant_category_ids[]': this.restaurantCateGoryIds || '', // 分类下具体商品具id
            order_by: this.sortByType || '',              //排序方式
            deliveryMode: this.deliveryMode || '',          // 配送方式
            'delivery_mode[]': this.deliveryMode + supportStr || '',
          }).then(resp => {
              this.shopList = [...this.shopList, ...resp]
              if (resp.length < 20) {
                this.isEnd = true
              }
              this.preventRepeatRequest = false
              this.showLoading = false
          })
        },
        zhunShi (supports) {
          let zhunStatus
          if ((supports instanceof Array) && supports.length) {
            supports.forEach(item => {
              if (item.icon_name === '准') {
                zhunStatus = true;
              }
            })
          }else{
            zhunStatus = false;
          }
          return zhunStatus
        },
        loaderMore () {
          if (this.isEnd || this.preventRepeatRequest) return
          this.preventRepeatRequest = true
          this.offset += 20
          this.init()
        },
        backTop () {
          animate(document.documentElement, {scrollTop: '0'}, 400, 'ease-out')
        }
      },
      mounted () {
        this.init()
      },
      components: {
        RatingStart,
        loading
      },
      watch: {
        restaurantCategoryIds: function () {
          this.init()
        },
        sortByType: function () {
          this.init()
        },
        confirmStatus: function () {
          this.init()
        }
      }
    }
</script>

