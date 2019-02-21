<style lang="scss" scoped>
  @import '../../style/mixin';
  .search-page{
    margin-bottom: 2rem;
  }
  .search-form {
    background: #fff;
    padding: .5rem;
    display: flex;
    input{
      height: 1.5rem;
    }
    .search-input{
      flex: 4;
      border: 0.025rem solid $bc;
      @include sc(.65rem, #333);
      border-radius: .125rem;
      background: #f2f2f2;
      font-weight: bold;
      padding: 0 .25rem;
    }
    .search-submit{
      flex: 1;
      border: .025rem solid $blue;
      margin-left: .2rem;
      @include sc(.65rem, #fff);
      border-radius: .125rem;
      background: $blue;
      font-weight: bold;
      padding: 0 .25rem;
    }
  }
</style>
<template>
  <div class="paddingTop search-page">
    <head-top head-title="搜索" go-back="true"></head-top>
    <form class="search-form">
      <input type="search" v-model="searchValue" @input="checkValue" name="search" placeholder="请输入商家或美食名称" class="search-input">
      <input type="submit" name="submit" class="search-submit" @click.prevent="handleSearch">
    </form>
    <section v-if="restaurantList.length">
      <h4 class="title-restaurant">商家</h4>
      <ul class="list-container">
        <router-link
          v-for="item in restaurantList"
          :to="{path: '/shop', query:{id:item.id}}"
          :key="item.id"
          tag="li"
          class="list-li"
        >
          <section class="item-right">
            <div class="item-right-text">
              <p>
                <span>{{item.name}}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="14" class="pay_icon">
                  <polygon points="0,14 4,0 24,0 20,14" style="fill:none;stroke:#FF6000;stroke-width:1" />
                  <line x1="1.5" y1="12" x2="20" y2="12" style="stroke:#FF6000;stroke-width:1.5"/>
                  <text x="3.5" y="9" style="fill:#FF6000;font-size:9;font-weight:bold;">支付</text>
                </svg>
              </p>
              <p>月售{{item.month_sales|| item.recent_order_num}}单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
            <ul class="item-right-detail">
              <li v-for="activities in item.restaurant_activity" :key="activities.id">
                <span :style="{backgroundColor: '#' + activities.icon_color}" class="activities_icon">{{activities.icon_name}}</span>
                <span>{{activities.name}}</span>
                <span class="only-phone">(手机客户端专享)</span>
              </li>
            </ul>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search-none" v-if="emptyResult">很抱歉！无搜索结果</div>
  </div>
</template>

<script>
  import HeadTop from '../../components/header/HeaderTop'
  // api
  import {searchRestaurant} from '../../api/search'
  export default {
    data () {
      return {
        searchValue: '',
        geoHash: '',
        emptyResult: '',
        restaurantList: []
      }
    },
    created () {
      this.geoHash = this.$route.params.geoHash
    },
    methods: {
      checkValue(val) {},
      handleSearch() {
        if (!this.searchValue) return
        searchRestaurant({
          keyword: this.searchValue,
          geohash: this.geoHash
        }).then(resp => {
          this.restaurantList = resp
          this.emptyResult = !resp.length
        })
      }
    },
    components: {
      HeadTop
    }
  }
</script>

<style scoped>

</style>
