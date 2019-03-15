<style lang="scss" scoped>
  @import "../../style/mixin";
  .cart-module{
    .add-icon{
      position: relative;
      z-index: 999;
    }
    .cart-button{
      display: flex;
      align-items: center;
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
    .choose-specification{
      .choose-icon-container{
        display: flex;
        align-items: center;
        .show-choose-list{
          display: block;
          @include sc(.55rem, #fff);
          padding: .1rem .2rem;
          background-color: $blue;
          border-radius: 0.2rem;
          border: 1px solid $blue;
        }
      }
    }
  }
  .showReduce-enter-active, .showReduce-leave-active {
    transition: all .3s ease-out;
  }
  .showReduce-enter, .showReduce-leave-active {
    opacity: 0;
    transform: translateX(1rem);
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
<template>
  <section class="cart-module">
    <section  v-if="!foods.specifications.length" class="cart-button">
      <transition name="showReduce">
        <span
          v-if="foodNum"
          @click="removeOutCart(foods)">
          <svg>
             <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
          </svg>
        </span>
      </transition>
      <transition name="fade">
        <span class="cart-num" v-if="foodNum">{{foodNum}}</span>
      </transition>
      <svg class="add-icon" @click="addToCard(foods, foods.specfoods[0], $event)">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
      </svg>
    </section>
    <section v-else class="choose-specification">
      <section class="choose-icon-container">
        <transition name="showReduce">
          <svg v-if="foodNum" @click="showReduceTip" class="specs-reduce-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
          </svg>
        </transition>
        <transition name="fade">
          <span class="cart-num" v-if="foodNum">{{foodNum}}</span>
        </transition>
        <span class="show-choose-list" @click="showChooseList(foods)">选规格</span>
      </section>
    </section>
  </section>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
      props: ['foods', 'shopId'],
      data () {
        return {
          showMoveDot: []
        }
      },
      methods:{
        ...mapMutations(['ADD_CART', 'REDUCE_CART']),
        showChooseList (food) {
          this.$emit('show-choose-list', food)
        },
        addToCard (food, currentFood, evt) {
          this.ADD_CART({shopId: this.shopId, food, currentFood, specs:''})
          let elLeft = evt.target.getBoundingClientRect().left
          let elBottom = evt.target.getBoundingClientRect().bottom
          this.showMoveDot.push(true);
          this.$emit('show-move-dot', this.showMoveDot, elLeft, elBottom)
        },
        removeOutCart (foods) {
          if (this.foodNum > 0) {
            const {category_id, item_id} = foods
            const foodId = foods.specfoods[0].food_id
            this.REDUCE_CART({shopId: this.shopId, categoryId: category_id, itemId: item_id, foodId})
          }
        },
        showReduceTip() {
          this.$emit('show-reduce-tip')
        }
      },
      computed: {
        ...mapState(['cartList']),
        shopCart: function () {
          return Object.assign({}, this.cartList[this.shopId])
        },
        foodNum: function () {
          const categoryId = this.foods.category_id
          const itemId = this.foods.item_id
          if (this.shopCart && this.shopCart[categoryId] && this.shopCart[categoryId][itemId]) {
            let num = 0
            Object.values(this.shopCart[categoryId][itemId]).forEach(item => {
              num += item.num
            })
            return num
          } else {
            return 0
          }
        }
      }
    }
</script>


