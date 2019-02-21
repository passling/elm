<template>
  <div class="head-top">
    <slot name="logo"></slot>
    <router-link to='./home' class="head-login" v-if="signUp">
      <span class="login-span">登录|注册</span>
    </router-link>
    <section class="head-go-back" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
      </svg>
    </section>
    <section v-if="headTitle" class="title-head ellipsis">
      <span class="title-text">{{headTitle}}</span>
    </section>
    <slot name="changeCity"></slot>
    <slot name="mySite"></slot>
    <slot name="search"></slot>
  </div>
</template>

<script>
    export default {
      props: {
        signUp: String,
        headTitle: String,
        goBack: String
      },
      data () {
        return {}
      }
    }
</script>

<style scoped lang="scss">
  @import '../../style/mixin';
  .head-top{
    background-color: $blue;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    @include wh(100%, 1.95rem)
  }
  .head-login{
    right: 0.55rem;
    @include sc(0.65rem,#fff);
    @include ct;
    .login-span{
      color: #fff;
    }
  }
  .head-go-back{
    left: .4rem;
    @include wh(.6rem, 1rem);
    line-height: 2.2rem;
    margin-left: .4rem;
  }
  .title-head {
    @include center;
    width: 50%;
    color: #fff;
    text-align: center;
    .title-text {
      @include sc(0.8rem, #fff);
      text-align: center;
      font-weight: bold;
    }
  }
</style>
