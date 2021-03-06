import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import home from './views/home/index.vue'
import city from './views/city/index.vue'
import mySite from './views/mySite/index.vue'
import shop from './views/shop/index.vue'
import search from './views/search/index.vue'
import food from './views/food/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '/',
        redirect: '/home'
      }, {
        path: '/home',
        component: home
      }, {
        path: '/city/:id',
        component: city
      }, {
        path: '/mysite',
        component: mySite,
        meta: { keepAlive: true }
      }, {
        path: '/food/',
        component: food
      },  {
        path: '/shop',
        component: shop,
        meta: { keepAlive: true }
      }, {
        path: '/search/:geoHash',
        component: search
      }]
    }
  ]
})
