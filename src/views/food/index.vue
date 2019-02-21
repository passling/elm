<style lang="scss" scoped>
  @import "../../style/mixin";
  .food-container{
    padding-top: 3.6rem;
    .sort-container{
      background: #fff;
      border-bottom: .025rem solid #f1f1f1;
      position: fixed;
      top: 1.95rem;
      right: 0;
      width: 100%;
      display: flex;
      z-index: 13;
      box-sizing: border-box;
      .sort-item{
        @include sc(.55rem, #444);
        @include wh(33.3%, 1.6rem);
        text-align: center;
        line-height: 1rem;
        .sort-item-container{
          @include wh(100%,100%);
          position: relative;
          z-index: 14;
          background: #fff;
          box-sizing: border-box;
          padding-top: .3rem;
          .sort-item-border {
            height: 1rem;
            border-right: 0.025rem solid $bc;
          }
        }
      }
      .sort_icon {
        margin-left: 3px;
        vertical-align: middle;
        transition: all 0.3s;
        fill: #666;
      }
      .choose_type{
        .sort-item-container{
          .category_title{
            color: $blue;
          }
          .sort_icon{
            transform: rotate(180deg);
            fill: $blue;
          }
        }
      }
      .showlist-enter-active,
      .showlist-leave-active{
        transition: all .3s;
        transform: translateY(0);
      }
      .showlist-enter,
      .showlist-leave-active{
        opacity: 0;
        transform: translateY(-100%);
      }
      .sort-detail-type{
        width: 100%;
        position: absolute;
        display: flex;
        top: 1.6rem;
        left: 0;
        border-top: .025rem solid $bc;
        background: #fff;
      }
      .category-container{
        .category-left{
          flex: 1;
          background: #f1f1f1;
          height: 16rem;
          overflow-y: auto;
          span{
            @include sc(.5rem, #666);
            line-height: 1.8rem;
          }
          .category-left-li{
            @include fj;
            padding: 0 .5rem;
            .category-icon{
              @include wh(.8rem, .8rem);
              vertical-align: middle;
              margin-right: .2rem;
            }
            .category-count{
              background: #ccc;
              padding: 0 .1rem;
              border: .025rem solid #ccc;
              border-radius: .8rem;
              vertical-align: middle;
              margin-right: .25rem;
            }
          }
          .category_active{
            background: #fff;
          }
        }
        .category-right{
          flex: 1;
          background: #ffffff;
          padding-left: .5rem;
          height: 16rem;
          overflow-y: auto;
          .category-right-li{
            @include fj;
            height: 1.8rem;
            line-height: 1.8rem;
            padding-right: .5rem;
            border-bottom: .025rem solid $bc;
            span{
              color: #666;
            }
          }
        }
      }
      .sort-list-container{
        width: 100%;
        .sort-list-li{
          height: 2.5rem;
          display: flex;
          align-items: center;
          svg {
            @include wh(0.7rem, 0.7rem);
            margin: 0 0.3rem 0 0.8rem;
          }
          p{
            line-height: 2.5rem;
            flex: auto;
            text-align: left;
            text-indent: .25rem;
            border-bottom: .025rem solid $bc;
            @include fj;
            align-items: center;
            span{
              color: #666;
            }
          }
          .sort_select {
            span {
              color: $blue;
            }
          }
        }
      }
      .filter-container {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        min-height: 10.6rem;
        background: #f1f1f1;
        .filter-header-style{
          @include sc(.4rem, #333);
          line-height: 1.5rem;
          text-align: left;
          padding-left: .5rem;
          background: #fff;
        }
        .filter-ul{
          display: flex;
          flex-wrap: wrap;
          padding: 0 .5rem;
          background-color: #fff;
          .filter-li{
            display: flex;
            align-items: center;
            border: .025rem solid #eee;
            @include wh(4.7rem, 1.4rem);
            margin-right: .25rem;
            border-radius: .125rem;
            padding: 0 .25rem;
            margin-bottom: .25rem;
            svg {
              @include wh(0.8rem, 0.8rem);
              margin-right: 0.125rem;
            }
            span {
              @include sc(0.4rem, #333);
            }
            .filter-icon{
              @include wh(.8rem, .8rem);
              font-size: .5rem;
              border: .025rem solid $bc;
              border-radius: .15rem;
              margin-right: .25rem;
              line-height: .8rem;
              text-align: center;
            }
            .activity-svg {
              margin-right: 0.25rem;
            }
            .selected-filter {
              color: $blue;
            }
          }
        }
        .confirm-filter{
          display: flex;
          background: #f1f1f1;
          width: 100%;
          padding: .3rem .2rem;
          .filter-button-style{
            @include wh(50%, 1.8rem);font-size: .8rem;
            line-height: 1.8rem;
            border-radius: .2rem;
          }
          .clear-all{
            background: #fff;
            margin-right: .5rem;
            border: .025rem solid #fff;
          }
          .confirm-select {
            background: #56d176;
            color: #fff;
            border: .025rem solid #56d176;
            span{
              color: #fff;
            }
          }
        }
      }
    }
    .showcover-enter-active,
    .showcover-levae-active{
      transition: opacity .3s;
    }
    .showcover-enter,
    .showcover-leave-active{
      opacity: 0;
    }
    .back-cover{
      position: fixed;
      @include wh(100%,100%);
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
</style>
<template>
  <div class="food-container">
    <head-top :head-title="headTitle" go-back="true"></head-top>
    <section class="sort-container">
      <!--category-->
      <div class="sort-item" :class="{choose_type: sortBy ==='food'}">
        <div @click="chooseType('food')" class="sort-item-container">
          <div class="sort-item-border">
            <span :class="{category_title: sortBy === 'food'}">{{foodTitle}}</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </div>
        </div>
        <transition name="showlist" v-show="category">
          <section v-show="sortBy === 'food'" class="category-container sort-detail-type">
            <section class="category-left">
              <ul>
                <li
                  v-for="(item, index) in category"
                  :key="item.id"
                  class="category-left-li"
                  :class="{category_active:restaurant_category_id == item.id}"
                  @click="handleSelectCategory(item.id, index)">
                  <section>
                    <img :src="item.img" class="category-icon">
                    <span>{{item.name}}</span>
                  </section>
                  <section>
                    <span class="category-count">{{item.count}}</span>
                    <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" class="category_arrow" >
                      <path d="M0 0 L6 4 L0 8"  stroke="#bbb" stroke-width="1" fill="none"/>
                    </svg>
                  </section>
                </li>
              </ul>
            </section>
            <section class="category-right">
              <ul>
                <li
                  v-for="(item, index) in categoryDetail"
                  :key="item.id"
                  class="category-right-li"
                  @click="changeFoodType(item.id, item.name)">
                  <span>{{item.name}}</span>
                  <span>{{item.count}}</span>
                </li>
              </ul>
            </section>
          </section>
        </transition>
      </div>
      <!--sort-->
      <div class="sort-item" :class="{choose_type: sortBy ==='sort'}">
        <div class="sort-item-container" @click="chooseType('sort')">
          <div class="sort-item-border">
            <span :class="{category_title: sortBy === 'sort'}">排序</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </div>
        </div>
        <transition name="showlist">
          <section  v-show="sortBy === 'sort'"class="sort-detail-type">
            <ul class="sort-list-container">
              <li v-for="item in sortKeyWord" :key="item.value" class="sort-list-li" @click="sortList(item.value)">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="item.href"></use>
                </svg>
                <p :class="{sort_select: sortByType === item.value}">
                  <span>{{item.name}}</span>
                  <svg v-if="sortByType === item.value">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </p>
              </li>
            </ul>
          </section>
        </transition>
      </div>
      <!--filter-->
      <div class="sort-item" :class="{choose_type:sortBy === 'filter'}">
        <div class="sort-item-container" @click="chooseType('filter')">
          <div class="sort-item-border">
            <span :class="{category_title: sortBy === 'filter'}">筛选</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </div>
        </div>
        <transition name="showlist">
          <section v-show="sortBy=== 'filter'" class="sort-detail-type filter-container">
            <section style="width: 100%;">
              <header class="filter-header-style">配送方式</header>
              <ul class="filter-ul" style="padding-bottom: .5rem;">
                <li
                  v-for="(item, index) in Delivery "
                  :key="item.id"
                  class="filter-li"
                  @click="selectedDeliveryMode(item.id)">
                  <svg :style="{opacity: (item.id === '0')&&(deliveryMode!== '0')? 0: 1}">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="deliveryMode === item.id? '#selected':'#fengniao'"></use>
                  </svg>
                  <span :class="{selected_filter: deliveryMode === item.id}">{{item.text}}</span>
                </li>
              </ul>
            </section>
            <section style="width: 100%;">
              <header class="filter-header-style">商家属性（可以多选）</header>
              <ul class="filter-ul" style="padding-bottom: .5rem">
                <li
                  v-for="(item, index) in activity"
                  :key="item.id"
                  class="filter-li"
                  @click="selectSupportIds(index, item.id)"
                >
                  <svg v-show="supportIds[index].status" class="activity-svg">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                  <span class="filter-icon" :style="{color: '#' + item.icon_color, borderColor: '#' + item.icon_color}" v-show="!supportIds[index].status">{{item.icon_name}}</span>
                  <span :class="{selected_filter: supportIds[index].status}">{{item.name}}</span>
                </li>
              </ul>
            </section>
            <footer class="confirm-filter">
              <div @click="clearSelect" class="clear-all filter-button-style" >清空</div>
              <div @click="confirmSelect" class="confirm-select filter-button-style" >确定<span v-show="filterNum">({{filterNum}})</span></div>
            </footer>
          </section>
        </transition>
      </div>
    </section>
    <transition name="showcover">
      <div class="back-cover" v-show="sortBy"></div>
    </transition>
    <section class="shop-list-container">
      <shop-list
      :geo-hash="geoHash"
      :restaurant-category-id="restaurant_category_id"
      :restaurant-category-ids="restaurant_category_ids"
      :sort-by-type="sortByType"
      :delivery-mode="deliveryMode"
      :support-ids="supportIds"
      :confirm-status="confirmStatus"
      ></shop-list>
    </section>
  </div>
</template>

<script>
  // 组件
  import HeadTop from '../../components/header/HeaderTop'
  import ShopList from '../../components/ShopLlist'

  import {mapState, mapMutations} from 'vuex'
  import {getMySiteAddress} from '../../api/mySite'
  import {getFoodCategory, getDelivery, getActivity} from '../../api/food'
  import {handleImgPath} from '../../utils/utils'
  import {sortKeyWord} from './data/common'

  export default {
    data () {
      return {
        headTitle: '',
        foodTitle: '',
        category: null,
        restaurant_category_id: '',
        restaurant_category_ids: '',
        geoHash: '',
        categoryDetail: null,
        sortBy: '',
        sortKeyWord: sortKeyWord,
        sortByType: '',
        Delivery: null,
        deliveryMode: null,
        activity: null,
        supportIds: [],
        filterNum: 0,
        confirmStatus: false
      }
    },
    created() {
      this.init()
    },
    computed: {
      ...mapState(['latitude', 'longitude'])
    },
    methods: {
      ...mapMutations(['RECORD_ADDRESS']),
      init () {
        this.headTitle = this.$route.query.title
        this.geoHash = this.$route.query.geohash
        this.restaurant_category_id = this.$route.query.restaurant_category_id
        this.foodTitle = this.headTitle
        if (!this.latitude) {
          getMySiteAddress(this.geoHash).then(resp => {
            this.RECORD_ADDRESS(resp)
          })
        }
        const params = {
          latitude: this.latitude,
          longitude: this.longitude
        }
        getFoodCategory(params).then(resp => {
          for (const item of resp) {
            item.img = handleImgPath(item.image_url)
            if (this.restaurant_category_id === String(item.id)) {
              this.categoryDetail = item.sub_categories
            }
          }
          this.category = resp
        })
        getDelivery(params).then(resp => {
          this.Delivery = resp
        })
        getActivity(params).then(resp => {
          this.activity = resp
          resp.forEach((item, index) => {
            this.supportIds[index] = {status: false, id: item.id}
          })
        })
      },
      chooseType (type) {
        if (this.sortBy !== type) {
          this.sortBy = type
          if (type === 'food') {
            this.foodTitle = '分类'
          } else {
            this.foodTitle = this.headTitle
          }
        } else {
          this.sortBy = ''
          if (type === 'food') {
            this.foodTitle = this.headTitle
          }
        }
      },
      handleSelectCategory (id, idx) {
        this.restaurant_category_id = id
        this.categoryDetail = this.category[idx].sub_categories
      },
      changeFoodType (id, name) {
        this.restaurant_category_ids = id
        this.foodTitle = this.headTitle = name
        this.sortBy = ''
      },
      sortList(type) {
        this.sortBy = ''
        this.sortByType = type
      },
      selectedDeliveryMode (id) {
        if (this.deliveryMode) {
          this.filterNum--
          this.deliveryMode = null
        } else {
          this.filterNum++
          this.deliveryMode = id
        }
      },
      selectSupportIds (index, id) {
        this.supportIds.splice(index, 1, {
          status: !this.supportIds[index].status,
          id
        })
        this.filterNum = this.deliveryMode ? 1 : 0
        for (const item of this.supportIds) {
          if (item.status) {
            this.filterNum++;
          }
        }
      },
      clearSelect () {
        this.supportIds.map(item => (item.status = false))
        this.filterNum = 0
        this.deliveryMode = null
      },
      confirmSelect () {
        this.sortBy = ''
        this.confirmStatus = !this.confirmStatus
      }
    },
    components: {
      HeadTop,
      ShopList
    }
  }
</script>
