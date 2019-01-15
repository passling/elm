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
    </nav>
    <section class="hot-city-container">
      <h4 class="city-title">热门城市</h4>
      <ul class="city-group clear">
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
          class="category-item">
          <h4 class="city-title">
            {{key}}
            <span v-if="index === 0">（按字母排序）</span>
          </h4>
        </li>
      </ul>
    </section>
  </div>
</template>

<script >
  import HeaderTop from '../../components/header/HeaderTop'
  export default {
    data () {
      return {
        hotCity: [{
          name: '广州',
          id: 'gz'
        }, {
          name: '深圳',
          id: 'sz'
        }],
        sortGroupCity: {}
      }
    },
    methods: {
      readLoad () {
            window.location.reload()
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
  }
  .hot-city-container{
    background: #fff;
    margin-bottom: 0.4rem;
  }
  .city-group{
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
</style>

