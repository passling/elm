<template>
  <div class="head-top">
    <slot name="logo"></slot>
    <router-link to='./home' class="head-login" v-if="signUp">
      <span class="login-span">登录|注册</span>
    </router-link>
    <section v-if="headTitle" class="title-head ellipsis">
      <span class="title-text">{{headTitle}}</span>
    </section>
    <slot name="changeCity"></slot>
    <slot name="mySite"></slot>
  </div>
</template>

<script>
    export default {
      props: {
        signUp: String,
        headTitle: String
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
