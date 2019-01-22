<template>
  <div class="head-top">
    <slot name="logo"></slot>
    <router-link to='./home' class="head-login" v-if="">
      <span class="login-span">登录|注册</span>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "index"
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
</style>
