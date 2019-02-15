<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .city-container{
    padding-top: 2.35rem;
  }
  .change-city {
    right: 0.4rem;
    @include sc(0.6rem, #fff);
    @include ct
  }
  .city-form{
    background-color: #fff;
    border-top: 1px solid $bc;
    border-bottom: 1px solid $bc;
    padding-top: 0.4rem;
    div{
      width: 90%;
      margin: 0 auto;
      text-align: center;
      .input-style{
        border-radius: 0.1rem;
        margin-bottom: 0.4rem;
        @include wh(100%, 1.4rem)
      }
      .city-input{
        border: 1px solid $bc;
        padding: 0 0.3rem;
        @include sc(0.65rem, #333);
      }
      .city-submit{
        background-color: $blue;
        @include sc(0.65rem, #fff);
      }
    }
  }
  .search-position-history{
    border-top: 1px solid $bc;
    border-bottom: 1px solid $bc;
    padding-left: 0.5rem;
    @include font(0.475rem, 0.8rem)
  }
  .position-ul{
    background-color: #fff;
    border-top: 1px solid $bc;
    li{
      margin: 0 auto;
      padding-top: 0.65rem;
      border-bottom: 1px solid $bc;
      .position-name{
        margin: 0 auto 0.35rem;
        width: 90%;
        @include sc(0.65rem, #333);
      }
      .position-address{
        width: 90%;
        margin: 0 auto 0.55rem;
        @include sc(0.45rem, #999);
      }
    }
  }
  .clear-all-history{
    @include sc(0.7rem, #666);
    text-align: center;
    line-height: 2rem;
    background-color: #fff;
  }
  .search-none-place{
    margin: 0 auto;
    @include font(0.65rem, 1.75rem);
    color: #333;
    background-color: #fff;
    text-indent: 0.5rem;
  }
</style>
<template>
    <div class="city-container">
      <header-top :head-title="cityName" go-back="true">
        <router-link to="/home" slot="changeCity" class="change-city">切换城市</router-link>
      </header-top>
      <form class="city-form" v-on:submit.prevent>
        <div>
          <input
            type="search"
            name="city"
            placeholder="输入学校、商务楼、地址"
            class="city-input input-style"
            required
            v-model='inputValue'/>
        </div>
        <div>
          <input type="submit" name="submit" class="city-submit input-style" value="提交" @click="handleSearchPosition">
        </div>
      </form>
      <header v-if="showHistoryTitle" class="search-position-history">搜索历史</header>
      <ul class="position-ul">
        <li v-for="(item, index) in placeList" :key="index" @click="toNextPage(index, item.geohash)">
          <h4 class="position-name ellipsis">{{item.name}}</h4>
          <p class="position-address ellipsis">{{item.address}}</p>
        </li>
      </ul>
      <footer  v-if="showHistoryTitle && placeList.length" @click="clearHistory" class="clear-all-history">清空所有</footer>
      <div class="search-none-place" v-if="placeNone">很抱歉！无搜索结果</div>
    </div>
</template>

<script>
  import HeaderTop from '../../components/header/HeaderTop'
  // api
  import {getCurrentCity, searchPlace} from '../../api/city'
  import {getStore, setStore, removeStore} from "../../utils/utils";

  export default {
        data () {
          return {
            cityId: '',
            cityName: '',
            inputValue: '',
            showHistoryTitle: true,
            placeList: [],
            placeNone: false
          }
        },
        created() {
          this.cityId = this.$route.params.id
          getCurrentCity(this.cityId).then(resp => {
            this.cityName = resp.name
          })
          this.init()
        },
        mounted() {},
        methods: {
          init () {
            this.placeList = getStore('placeHistory') ? JSON.parse(getStore('placeHistory')) : []
          },
          handleSearchPosition () {
            if (this.inputValue) {
              searchPlace({
                city_id: this.cityId,
                keyword: this.inputValue
              }).then(resp => {
                this.showHistoryTitle = false
                this.placeList = resp
                this.placeNone = this.placeList.length === 0
              })
            }
          },
          toNextPage(index, geoHash) {
            const history = getStore('placeHistory')
            const choosePlace = this.placeList[index]
            let historyList = []
            if (history) {
              let isRepeat = false
              historyList = JSON.parse(history)
              for (const item of historyList) {
                if (item.geohash === geoHash) {
                  isRepeat = true
                }
                if (!isRepeat) {
                  historyList.push(choosePlace)
                }
              }
            } else {
              historyList.push(choosePlace)
            }
            setStore('placeHistory',historyList)
            this.$router.push({path: '/mysite',query:{geoHash}})
          },
          clearHistory () {
            removeStore('placeHistory')
            this.init()
          }
        },
        components: {
          HeaderTop
        }
    }
</script>


