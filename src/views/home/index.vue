<template>
  <div>
    <header-top>
      <span slot="logo" class="head-logo" @click="readLoad">xiaomao</span>
    </header-top>
    <nav class="city-nav">
      <div class="city-tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCityId" class="guess-city">
        <span>{{guessCity}}</span>
        <svg class="arrow_right">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </router-link>
    </nav>
    <section class="hot-city-container">
      <h4 class="city-title">热门城市</h4>
      <ul class="city-list-ul clear">
        <router-link tag="li"
        v-for="item in hotCity"
        :to="'/city/' + item.id"
        :key="item.id">
          {{item.name}}
        </router-link>
      </ul>
    </section>
    <section class="all-city-group">
      <ul class="category">
        <li
          v-for="(value, key, index) in sortGroupCity"
          :key="key"
          class="letter-classify-li">
          <h4 class="city-title">
            {{key}}
            <span v-if="index === 0">（按字母排序）</span>
          </h4>
          <ul class="group-city-name-container city-list-ul">
            <router-link
              tag="li"
              v-for="item in value"
              :to="'/city/' + item.id"
              :key="item.id"
              class="ellipsis"
            >{{item.name}}</router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script >
  import HeaderTop from '../../components/header/HeaderTop'

  // api
  import {getCityGuess,  getHotCity, getGroupCity} from '../../api/home'
  export default {
    data () {
      return {
        guessCity: '',
        guessCityId: '',
        hotCity: [],
        groupCity: {}
      }
    },
    created () {
      this.queryCityGuess()
      this.queryHotCity()
      this.queryGroupCity()
    },
    methods: {
      readLoad () {
            window.location.reload()
      },
      queryCityGuess () {
        getCityGuess().then(resp => {
          this.guessCity = resp.data.name
          this.guessCityId = resp.data.id
        })
      },
      queryHotCity () {
        getHotCity({type: 'hot'}).then(resp => {
          this.hotCity = resp.data
        })
      },
      queryGroupCity () {
        getGroupCity({type: 'group'}).then(resp => {
          this.groupCity = resp.data
        })
      }
    },
    computed: {
      sortGroupCity () {
        let formatGroupCity= {}
        for (let i = 65; i <= 90; i++) {
          if (this.groupCity[String.fromCharCode(i)]) {
            formatGroupCity[String.fromCharCode(i)] = this.groupCity[String.fromCharCode(i)]
          }
        }
        return formatGroupCity
      }
    },
    components: {
      HeaderTop
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/mixin";
  .head-logo{
    left: 0.4rem;
    font-weight: 400;
    @include sc(0.7rem, #fff);
    @include wh(2.3rem, 0.7rem);
    @include ct;
  }
  .city-nav{
    padding-top: 2.35rem;
    border-top: 1px solid $bc;
    background: #fff;
    margin-bottom: .4rem;
    .city-tip{
      @include fj;
      line-height: 1.45rem;
      padding: 0 0.45rem;
      span:nth-of-type(1) {
        @include sc(0.55rem, #666);
      }
      span:nth-of-type(2){
        font-weight: 900;
        @include sc(0.475rem, #9f9f9f);
      }
    }
    .guess-city {
      @include fj;
      align-items: center;
      height: 1.8rem;
      padding: 0 0.45rem;
      border-top: 1px solid $bc;
      border-bottom: 2px solid $bc;
      @include font(0.75rem, 1.8rem);
      span:nth-of-type(1){
        color: $blue;
      }
      .arrow_right{
        @include wh(.6rem, .6rem);
        fill: #999;
      }
    }
  }
  .hot-city-container{
    background: #fff;
    margin-bottom: 0.4rem;
  }
  .city-list-ul{
    overflow: hidden;
    li{
      float: left;
      text-align: center;
      color: $blue;
      border-bottom: 0.025rem solid $bc;
      border-right: 0.025rem solid $bc;
      @include wh(25%, 1.75rem);
      @include font(0.6rem, 1.75rem)
    }
    li:nth-of-type(4n){
      border-right: none;
    }
  }
  .city-title{
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid $bc;
    border-bottom: 2px solid $bc;
    @include font(0.55rem, 1.45rem, "Helvetica Neue");
    span{
      @include sc(0.475rem, #999);
    }
  }
  .letter-classify-li{
    margin-bottom: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid $bc;
    .group-city-name-container{
      li{
        color: #666;
      }
    }
  }
</style>

