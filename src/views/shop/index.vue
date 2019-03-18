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
        overflow: hidden;
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
          box-sizing: border-box;
        }
      }
      .activity_menu{
        border-left: 0.15rem solid #3190e8;
        background-color: #fff;
        span:nth-of-type(1){
          font-weight: bold;
        }
      }
    }
    .menu-right{
      flex: 4;
      overflow-y: auto;
      .menu-detail-header{
        width: 100%;
        padding: .4rem;
        position: relative;
        @include fj;
        align-items: center;
        .menu-detail-header-left{
          width: 11rem;
          white-space: nowrap;
          overflow: hidden;
          .menu-item-title{
            @include sc(.7rem, #666);
            font-weight: bold;
          }
          .menu-item-description{
            @include sc(.5rem, #999);
            width: 30%;
            overflow: hidden;
          }
        }
        .menu_detail_header_right{
          @include wh(.5rem, 1rem);
          display: block;
          //@include bis('../../images/icon_point.png');-->
          background-size: 100% .4rem;
          background-position: left center;
        }
      }
      .menu-detail-list{
        background: #fff;
        padding: .6rem .4rem;
        border-bottom: 1px solid #f8f8f8;
        position: relative;
        overflow: hidden;
        .menu-detail-link{
          display: flex;
          .menu-food-img{
            margin-right: .4rem;
            img{
              @include wh(4rem, 4rem);
              display: block;
            }
          }
          .menu-food-description{
            width: 100%;
            .food-description-head{
              @include fj;
              margin-bottom: .2rem;
              .description-food-name{
                @include sc(.5rem, #333);
              }
              .attributes-ul{
                display: flex;
                li{
                  font-size: .3rem;
                  height: .6rem;
                  line-height: .35rem;
                  padding: .1rem;
                  border: 1px solid #666;
                  border-radius: 0.3rem;
                  margin-right: .1rem;
                  transform: scale(.8);
                  p{
                    white-space: nowrap;
                  }
                }
                .attribute_new{
                  position: absolute;
                  top: 0;
                  left: 0;
                  background-color: #4cd964;
                  @include wh(2rem, 2rem);
                  display: flex;
                  align-items: flex-end;
                  transform: rotate(-45deg) translate(-.1rem, -1.5rem);
                  border: none;
                  border-radius: 0;
                  p{
                    @include sc(.4rem, #fff);
                    text-align: center;
                    flex: 1;
                    transform: scale(0.8) translate(0.1rem, -.1rem);
                  }
                }
              }
            }
            .food-description-content{
              @include sc(.5rem, #999);
              line-height: .6rem;
            }
            .food-description-sale-rating{
              line-height: .8rem;
              span{
                @include sc(.5rem, #333)
              }
            }
            .food-activity{
              line-height: .4rem;
              span{
                font-size: .3rem;
                border: 1px solid currentColor;
                border-radius: .3rem;
                padding: .08rem;
                display: inline-block;
                transform: scale(.8);
                margin-left: -.35rem;
              }
            }
          }
        }
        .menu-detail-footer{
          margin-left: 4.4rem;
          font-size: 0;
          margin-top: .3rem;
          @include fj;
          .food-price{
            span{
              font-family: 'Helvetica Neue',Tahoma,Arial;
            }
            span:nth-of-type(1){
              @include sc(.5rem, #f60);
              margin-right: .05rem;
            }
            span:nth-of-type(2){
              @include sc(.7rem, #f60);
              font-weight: bold;
              margin-right: .3rem;
            }
            span:nth-of-type(3){
              @include sc(.5rem, #666);
            }
          }
        }
      }
    }
  }
  .specs-cover{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.4);
    z-index: 17;
  }
  .specs-list{
    position: fixed;
    top: 35%;
    left: 15%;
    width: 70%;
    background: #fff;
    z-index: 18;
    border: 1px;
    border-radius: .2rem;
    .specs-list-header{
      h4{
        @include sc(.7rem, #222);
        font-weight: normal;
        text-align: center;
        padding: .5rem;
      }
      .specs-cancel{
        position: absolute;
        right: .5rem;
        top: .5rem;
      }
    }
    .specs-detail{
      padding: .5rem;
      .specs-detail-title{
        @include sc(.6rem, #666);
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        padding: .4rem 0;
        li{
          font-size: .6rem;
          padding: .3rem .5rem;
          border: 0.025rem solid #ddd;
          border-radius: .2rem;
          margin-right: .5rem;
          margin-bottom: .2rem;
        }
        .specs_activity{
          border-color: #3199e8;
          color: #3199e8;
        }

      }
    }
    .specs-footer{
      @include fj;
      align-items: center;
      background: #f9f9f9;
      padding: .5rem;
      border: 1px;
      border-bottom-left-radius: .2rem;
      border-bottom-right-radius: .2rem;
      .specs-price{
        span{
          color: #ff6000;
        }
        span:nth-of-type(1){
          font-size: .5rem;
        }
        span:nth-of-type(2){
          font-size: .8rem;
          font-weight: bold;
          font-family: Helvetica Neue,Tahoma;
        }
      }
      .specs-add-to-cart{
        @include wh(4rem, 1.3rem);
        background-color: #3199e8;
        border: 1px;
        border-radius: 0.15rem;
        @include sc(.6rem, #fff);
        text-align: center;
        line-height: 1.3rem;
      }
    }
  }
  .show-delete-tip{
    position: fixed;
    top: 50%;
    left: 15%;
    width: 70%;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,.8);
    z-index: 18;
    @include sc(.65rem, #fff);
    text-align: center;
    padding: .5rem 0;
    border: 1px;
    border-radius: 0.25rem;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
  .buy-cart-container{
    position: absolute;
    background: #3d3d3f;
    bottom: 0;
    left: 0;
    z-index: 13;
    display: flex;
    @include wh(100%, 2rem);
    .cart-icon-num{
      flex: 1;
      .cart-icon-container{
        display: flex;
        background: #3d3d3f;
        position: absolute;
        padding: .4rem;
        border: .18rem solid #444;
        border-radius: 50%;
        left: .5rem;
        top: -.7rem;
        .cart-icon{
          @include wh(1.2rem, 1.2rem)
        }
        .cart-list-length {
          position: absolute;
          top: -.25rem;
          right: -.25rem;
          background: #ff461d;
          line-height: .675rem;
          text-align: center;
          border-radius: 50%;
          border: .025rem solid #ff461d;
          min-width: .7rem;
          height: .7rem;
          @include sc(.5rem, #fff);
          font-family: Helvetica Neue,Tahoma,Arial;
        }
      }
      .move_in_cart{
        animation: mymove .5s ease-in-out;
      }
      .cart_icon_activity{
        background-color: #3190e8;
      }
      .cart-num{
        @include ct;
        left: 3.5rem;
        div{
          color: #fff;
        }
        div:nth-of-type(1){
          font-size: .8rem;
          font-weight: bold;
          margin-bottom: .1rem;
        }
        div:nth-of-type(2){
          font-size: .4rem;
        }
      }
    }
    .go-to-pay{
      position: absolute;
      right: 0;
      background: #535356;
      @include wh(5rem, 100%);
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .go-to-pay-button-style{
        @include sc(.7rem, #fff);
        font-weight: bold;
      }
    }
    .gotopay_activity{
      background-color: #4cd964;
    }
  }
  @keyframes mymove {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(.8);
    }
    50% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(.9);
    }
    100% {
      transform: scale(1);
    }
  }
  .move-dot{
    position: fixed;
    bottom: 30px;
    left: 30px;
    svg{
      @include wh(.9rem, .9rem);
      fill: #3190e8;
    }
  }
  .cart-food-list{
    position: fixed;
    width: 100%;
    padding-bottom: 2rem;
    z-index: 12;
    bottom: 0;
    left: 0;
    background: #fff;
    header{
      @include fj;
      align-items: center;
      padding: .3rem .6rem;
      background: #eceff1;
      svg{
        @include wh(.6rem,.6rem);
        vertical-align: middle;
      }
      h4{
        @include sc(.7rem, #666);
      }
      .clear-cart{
        @include sc(.6rem, #666);
      }
    }
    .cart-food-detail{
      background: #fff;
      max-height: 20rem;
      overflow-y: auto;
      .cart-food-li{
        @include fj;
        padding: .6rem .5rem;
        .cart-list-num{
          width: 55%;
          p:nth-of-type(1){
            @include sc(.7rem, #666);
            font-weight: bold;
          }
          p:nth-of-type(2){
            @include sc(.4rem, #666);
          }
        }
        .cart-list-price{
          font-size: 0;
          span:nth-of-type(1){
            @include sc(.6rem, #f60);
            font-family: Helvetica Neue,Tahoma;

          }
          span:nth-of-type(2){
            @include sc(.7rem, #f60);
            font-family: Helvetica Neue,Tahoma;
            font-weight: bold;
          }
        }
        .cart-list-control{
          display: flex;
          align-items: center;
          span{
            display: flex;
            align-items: center;
            justify-content: center;
          }
          svg{
            @include wh(.9rem, .9rem);
            fill: #3190e8;
          }
          .specs-reduce-icon{
            fill: #999;
          }
          .cart-num{
            @include sc(.65rem, #666);
            min-width: 1rem;
            text-align: center;
            font-family: Helvetica Neue,Tahoma;
          }
        }
      }
    }
  }
  .screen-cover{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 11;
  }
  .toggle-cart-enter-active,.toggle-cart-leave-active{
    transition: all .3s ease-out;
  }
  .toggle-cart-enter, .toggle-cart-leave-active {
    transform: translateY(100%);
  }
</style>
<template>
    <div>
      <section  v-if="!showLoading" class="shop-container">
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
          <section v-show="changeShowType==='food'" class="food-container">
            <section class="menu-container">
              <section class="menu-left" ref="wrapperMenu">
                <ul>
                  <li
                    v-for="(item,index) in menuList"
                    :key="item.id"
                    class="menu-left-li ellipsis"
                    :class="{activity_menu: index === menuIndex}"
                    @click="chooseMenu(index)">
                      <img :src="getImgPath(item.icon_url)" v-if="item.icon_url">
                      <span >{{item.name}}</span>
                      <span v-if="categoryNum[index] && item.type === 1" class="category-num">{{categoryNum[index]}}</span>
                  </li>
                </ul>
              </section>
              <section class="menu-right" ref="menuFoodList">
                <ul class="attribute-ul">
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
                        <section class="menu-food-description">
                          <h3 class="food-description-head">
                            <strong class="description-food-name">{{foods.name}}</strong>
                            <ul v-if="foods.attributes.length" class="attributes-ul">
                              <li
                                v-if="attribute" v-for="(attribute, foodindex) in foods.attributes"
                                :key="foodindex"
                                :style="{color: '#' + attribute.icon_color,borderColor:'#' + attribute.icon_color}"
                                :class="{attribute_new: attribute.icon_name == '新'}">
                                <p :style="{color: attribute.icon_name == '新'? '#fff' : '#' + attribute.icon_color}">{{attribute.icon_name == '新'? '新品':attribute.icon_name}}</p>
                              </li>
                            </ul>
                          </h3>
                          <p class="food-description-content">{{foods.description}}</p>
                          <p class="food-description-sale-rating">
                            <span>月售{{foods.month_sales}}份</span>
                            <span>好评率{{foods.satisfy_rate}}%</span>
                          </p>
                          <p v-if="foods.activity" class="food-activity">
                            <span :style="{color: '#' + foods.activity.image_text_color,borderColor:'#' +foods.activity.icon_color}">{{foods.activity.image_text}}</span>
                          </p>
                        </section>
                      </router-link>
                      <footer class="menu-detail-footer">
                        <section class="food-price">
                          <span>￥</span>
                          <span>{{foods.specfoods[0].price}}</span>
                          <span v-if="foods.specifications.length">起</span>
                        </section>
                        <buy-cart
                          :foods='foods'
                          :shop-id="shopId"
                          @show-choose-list="showChooseList"
                          @show-move-dot="handleShowMoveDot"
                          @show-reduce-tip="showReduceTip"
                        ></buy-cart>
                      </footer>
                    </section>
                  </li>
                </ul>
              </section>
            </section>
            <section class="buy-cart-container" ref="cartContainer">
              <section @click="showCartList=!showCartList" class="cart-icon-num">
                <div :class="{cart_icon_activity: totalPrice > 0, move_in_cart:receiveInCart}" class="cart-icon-container">
                  <span v-if="totalNum" class="cart-list-length">{{totalNum}}</span>
                  <svg class="cart-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-icon"></use>
                  </svg>
                </div>
                <div class="cart-num">
                  <div>￥{{totalPrice}}</div>
                  <div>配送费{{deliveryFee}}</div>
                </div>
              </section>
              <section class="go-to-pay" :class="{gotopay_activity: minimumOrderAmount <= 0}">
                <span class="go-to-pay-button-style"
                      v-if="minimumOrderAmount > 0"
                >还差¥{{minimumOrderAmount}}起送</span>
                <router-link
                  v-else
                  :to="{path: '/confirmOrder', query: {geoHash, shopId}}"
                  class="go-to-pay-button-style">去结算</router-link>
              </section>
            </section>
            <transition name="toggle-cart">
              <section v-show="showCartList&&cartFoodList.length" class="cart-food-list">
                <header>
                  <h4>购物车</h4>
                  <div>
                    <svg>
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use>
                    </svg>
                    <span @click="clearCart" class="clear-cart">清空</span>
                  </div>
                </header>
                <section class="cart-food-detail">
                  <ul>
                    <li
                    v-for="(item, index) in cartFoodList"
                    :key="index"
                    class="cart-food-li"
                    >
                      <div class="cart-list-num">
                        <p class="ellipsis">{{item.name}}</p>
                        <p class="ellipsis">{{item.specs}}</p>
                      </div>
                      <div class="cart-list-price">
                        <span>￥</span>
                        <span>{{item.price}}</span>
                      </div>
                      <section class="cart-list-control">
                        <span>
                          <svg @click="removeOutCart(item)">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
                          </svg>
                        </span>
                        <span class="cart-num">{{item.num}}</span>
                        <svg @click="addToCart(item)" class="cart-add">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
                        </svg>
                      </section>
                    </li>
                  </ul>
                </section>
              </section>
            </transition>
          </section>
        </transition>
      </section>
      <section>
        <transition name="fade">
          <div class="specs-cover" @click="showChooseList" v-if="showSpecs"></div>
        </transition>
        <transition name="fade">
          <div class="screen-cover" v-show="showCartList&&cartFoodList.length" @click="showCartList=!showCartList"></div>
        </transition>
        <transition name="fadeBounce">
          <div class="specs-list" v-if="showSpecs">
            <header class="specs-list-header">
              <h4 class="ellipsis">{{chooseFoods.name}}</h4>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" version="1.1" class="specs-cancel" @click="showChooseList">
                <line x1="0" y1="0" x2="16" y2="16"  stroke="#666" stroke-width="1.2"/>
                <line x1="0" y1="16" x2="16" y2="0"  stroke="#666" stroke-width="1.2"/>
              </svg>
            </header>
            <section class="specs-detail">
              <h5 class="specs-detail-title">{{chooseFoods.specifications[0].name}}</h5>
              <ul>
                <li
                  v-for="(item, itemIndex) in chooseFoods.specifications[0].values"
                  :class="{specs_activity: itemIndex === specsIndex}"
                  @click="specsIndex=itemIndex"
                >
                  {{item}}
                </li>
              </ul>
            </section>
            <footer class="specs-footer">
              <div class="specs-price">
                <span>￥</span>
                <span>{{chooseFoods.specfoods[specsIndex].price}}</span>
              </div>
              <div
                class="specs-add-to-cart"
                @click="addSpecs(chooseFoods,chooseFoods.specfoods[specsIndex], chooseFoods.specifications[0].values[specsIndex])"
              >加入购物车</div>
            </footer>
          </div>
        </transition>
      </section>
      <transition name="fade">
        <p class="show-delete-tip" v-if="showDeleteTip">多规格商品只能去购物车删除哦</p>
      </transition>
      <transition
      appear
      @after-appear="afterEnter"
      @before-appear="beforeEnter"
      v-for="item in showMoveDot">
        <span class="move-dot" v-if="item">
          <svg class="move-liner">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
                </svg>
        </span>
      </transition>
      <loading v-show="showLoading"></loading>
    </div>
</template>

<script>
  import {getShopDetails, getFoodMenu} from '../../api/shop'
  import {getMySiteAddress} from '../../api/mySite'
  import {mapState, mapMutations} from 'vuex'
  import {imgBaseUrl} from '../../data/common'
  import {getImgPath} from '../../utils/mixins'
  import BScroll from 'better-scroll'

  // 组件
  import RatingStart from '../../components/RatingStart'
  import BuyCart from '../../components/BuyCart'
  import loading from '../../components/loading'
  export default {
    data () {
          return {
            shopId: '',
            geoHash: '',
            showLoading: true,
            shopDetail: {},
            imgBaseUrl: imgBaseUrl,
            promotionInfo: '',
            showActivity: false,
            changeShowType: 'food',
            menuList: [],
            categoryNum: [],
            shopListTop: [], //商品列表的高度集合
            foodScroll: null,  //食品列表scroll
            menuIndex: 0, //已选菜单索引值，默认为0
            menuIndexChange: true,//解决选中index时，scroll监听事件重复判断设置index的bug
            chooseFoods: null,
            showSpecs: false,
            specsIndex: 0, // 选中规格下标
            showMoveDot: [], //控制下落的小圆点显示隐藏
            elLeft: 0, //当前点击加按钮在网页中的绝对top值
            elBottom: 0, //当前点击加按钮在网页中的绝对left值
            showDeleteTip: false,
            timer: null,
            cartFoodList: [], //购物车商品列表
            totalPrice: 0, //总共价格
            receiveInCart: false, //购物车组件下落的圆点是否到达目标位置
            windowHeight: null, //屏幕的高度
            showCartList: false,//显示购物车列表
          }
        },
    created () {
      this.init()
      this.INIT_BUY_CART()
    },
    mounted () {
      this.windowHeight = window.innerHeight
    },
    mixins: [getImgPath],
    methods: {
      ...mapMutations(['RECORD_ADDRESS', 'ADD_CART', 'INIT_BUY_CART', 'REDUCE_CART', 'CLEAR_CART']),
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
          this.showLoading = false
        })
      },
      getFoodListHeight () {
        const listContainer = this.$refs.menuFoodList
        if (listContainer) {
          const listArr = Array.from(listContainer.children[0].children)
          listArr.forEach((item, index) => {
            this.shopListTop[index] = item.offsetTop;
          })
          this.listenScroll(listContainer)
        }
      },
      listenScroll (element) {
        this.foodScroll = new BScroll(element, {
          probeType: 3,
          deceleration: 3,
          bounce: false,
          swipeTime: 2000,
          click: true
        })
        const menuContainer = this.$refs.wrapperMenu
        const wrapperMenu = new BScroll(menuContainer, {
          click: true
        })
        const wrapMenuHeight = menuContainer.clientHeight
        this.foodScroll.on('scroll', (pos) => {
          if (!menuContainer) return
          this.shopListTop.forEach((item, index) => {
            if (this.menuIndexChange && Math.abs(Math.round(pos.y)) >= item) {
              this.menuIndex = index
              const menuList = this.$refs.wrapperMenu.querySelectorAll('.activity-menu')
              const el = menuList[0]
              wrapperMenu.scrollToElement(el, 800, 0, -(wrapMenuHeight/2 - 50))
            }
          })
        })
      },
      chooseMenu (idx) {
        this.menuIndex = idx
        this.menuIndexChange = false
        this.foodScroll.scrollTo(0, -this.shopListTop[idx], 400)
        this.foodScroll.on('scrollEnd', () => {
          this.menuIndexChange = true;
        })
      },
      showChooseList (foods) {
        if (foods) {
          this.chooseFoods = foods
        }
        this.showSpecs = !this.showSpecs
        this.specsIndex = 0
      },
      addSpecs (food, currentFood, specs) {
        this.ADD_CART({shopId: this.shopId, food, currentFood, specs})
        this.showChooseList()
      },
      handleShowMoveDot (showMoveDot, evtLeft, evtBottom) {
        this.showMoveDot = [...this.showMoveDot, showMoveDot]
        this.elLeft = evtLeft
        this.elBottom = evtBottom
      },
      beforeEnter (el) {
        el.style.transform = `translate3d(0, ${37 + this.elBottom - this.windowHeight}px, 0)`
        el.children[0].style.transform = `translate3d(${this.elLeft - 30}px, 0, 0)`
        el.children[0].style.opacity = 0
      },
      afterEnter (el) {
        el.style.transform = `translate3d(0, 0, 0)`
        el.children[0].style.transform = `translate3d(0,0,0)`
        el.style.transition = 'transform .55s cubic-bezier(0.3, -0.25, 0.7, -0.15)'
        el.children[0].style.transition = 'transform .55s linear'
        el.children[0].style.opacity = 1;
        el.children[0].addEventListener('transitionend', () => {
          this.listenInCart();
        })
        el.children[0].addEventListener('webkitAnimationEnd', () => {
          this.listenInCart();
        })
      },
      listenInCart () {
        if (!this.receiveInCart) {
          this.receiveInCart = true;
          this.$refs.cartContainer.addEventListener('animationend', () => {
            this.receiveInCart = false;
          })
          this.$refs.cartContainer.addEventListener('webkitAnimationEnd', () => {
            this.receiveInCart = false;
          })
        }
      },
      showReduceTip () {
        this.showDeleteTip = true
        clearTimeout(this.timer)
        const self = this
        this.timer = setTimeout(() => {
          clearTimeout(self.timer)
          self.showDeleteTip = false
        }, 3000)
      },
      initCategoryNum () {
        const newArr = []
        this.totalPrice = 0
        this.cartFoodList = []
        this.menuList.forEach((item, idx) => {
          if (this.shopCart && this.shopCart[item.foods[0].category_id]) {
            let num = 0
            Object.keys(this.shopCart[item.foods[0].category_id]).forEach(itemId => {
              Object.keys(this.shopCart[item.foods[0].category_id][itemId]).forEach(foodId => {
                const foodItem = this.shopCart[item.foods[0].category_id][itemId][foodId]
                num += foodItem.num
                if (item.type === 1) {
                  this.totalPrice += foodItem.num * foodItem.price
                  if (foodItem.num > 0) {
                    const foodDetail = {
                      categoryId: item.foods[0].category_id,
                      itemId: itemId,
                      foodId: foodId,
                      num: foodItem.num,
                      price: foodItem.price,
                      name: foodItem.name,
                      specs: foodItem.specs
                    }
                    this.cartFoodList.push(foodDetail)
                  }
                }
              })
            })
            newArr[idx] = num
          } else {
            newArr[idx] = 0
          }
        })
        this.totalPrice = this.totalPrice.toFixed(2)
        this.categoryNum = [...newArr]
      },
      removeOutCart (foods) {
        const {categoryId, itemId, foodId, specs} = foods
        this.REDUCE_CART({shopId: this.shopId, categoryId, itemId, foodId, specs})
      },
      addToCart(foods) {
        const food = {
          category_id: foods.categoryId,
          item_id: foods.itemId
        }
        foods.food_id = foods.foodId
        this.ADD_CART({shopId: this.shopId, food, currentFood: foods, specs:foods.specs})
      },
      clearCart () {
        this.showCartList=!this.showCartList
        this.CLEAR_CART(this.shopId)
      }
    },
    watch: {
      showLoading: function (value) {
        if (!value) {
          this.$nextTick(() => {
            this.getFoodListHeight()
            this.initCategoryNum()
          })
        }
      },
      shopCart: function () {
        this.initCategoryNum()
      }
    },
    computed: {
      ...mapState(['latitude', 'longitude', 'cartList']),
      shopCart: function () {
        return {...this.cartList[this.shopId]}
      },
      totalNum: function () {
        let num = 0
        this.cartFoodList.forEach(item => {
          num += item.num
        })
        return num
      },
      deliveryFee: function () {
        if (this.shopDetail) {
          return this.shopDetail.float_delivery_fee
        } else {
          return null
        }
      },
      minimumOrderAmount: function () {
        if (this.shopDetail) {
          return this.shopDetail.float_minimum_order_amount - this.totalPrice
        } else {
          return null
        }
      }

    },
    components: {
      RatingStart,
      BuyCart,
      loading
    }
  }
</script>


