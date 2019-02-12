<template>
    <div class="shop-list-container">
      <ul>
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
    </div>
</template>

<script>
    import RatingStart from '../RatingStart'
    import {mapState} from 'vuex'
    import {getShopList} from '../../api/mySite'
    export default {
      props: {
        geoHash: String
      },
      data () {
        return {
          imgBaseUrl: '//elm.cangdu.org/img/',
          shopList: [], // 店铺列表数据
          offset: 0, // 每次加载20个 limit = 20
        }
      },
      computed: {
        ...mapState(['latitude',
          'longitude'])
      },
      methods: {
        init () {
          getShopList({
            latitude: this.latitude,
            longitude: this.longitude,
            offset: this.offset,
          }).then(resp => {
              this.shopList = [...resp]
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
        }
      },
      mounted () {
        this.init()
      },
      components: {
        RatingStart
      }
    }
</script>

<style lang="scss" scoped>
  @import '../..//style/mixin.scss';
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

</style>
