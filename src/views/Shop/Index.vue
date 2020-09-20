<template>
  <div class="shop">
    <div class="row">
      <div class="col-md-12">
        <Title :title="'магазин'" :content="'Ты сможешь большее с всевозможными привилегиями!'"
               :subtitle="'крутых товаров'"/>

        <div class="col-md-12">
          <ul class="categories">
            <li class="categories__category categories__category-active categories__category-privileges">
              <a href="#">
                Привилегии
              </a>
            </li>
            <li class="categories__category categories__category-cases">
              <a href="#">
                Кейсы
              </a>
            </li>
            <li class="categories__category categories__category-amount">
              <a href="#">
                Валюта
              </a></li>
            <li class="categories__category categories__category-others">
              <a href="#">
                Разное
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-12">
          <div class="products">
            <div class="products__product products__product-light">
              <div class="products__product-title">
                Hero
              </div>
              <img src="~@/assets/images/privileges/builder.png" alt="">
              <div class="products__product-price">
                50 rub
              </div>
            </div>
            <div class="products__product products__product-light">
              <div class="products__product-title">
                Hero+
              </div>
              <img src="~@/assets/images/privileges/opaxe.png" alt="">
              <div class="products__product-price">
                150 rub
              </div>
            </div>
            <div class="products__product products__product-light">
              <div class="products__product-title">
                Ninja
              </div>
              <img src="~@/assets/images/privileges/ninja.png" alt="">
              <div class="products__product-price">
                300 rub
              </div>
            </div>
            <div class="products__product products__product-medium">
              <div class="products__product-title">
                Lord
              </div>
              <img src="~@/assets/images/privileges/lord.png" alt="">
              <div class="products__product-price">
                600 rub
              </div>
            </div>
            <div class="products__product products__product-medium">
              <div class="products__product-title">
                Oper
              </div>
              <img src="~@/assets/images/privileges/oper.png" alt="">
              <div class="products__product-price">
                900 rub
              </div>
            </div>
            <div class="products__product products__product-medium">
              <div class="products__product-title">
                Legend
              </div>
              <img src="~@/assets/images/privileges/legend.png" alt="">
              <div class="products__product-price">
                1200 rub
              </div>
            </div>
            <div class="products__product products__product-high">
              <div class="products__product-title">
                Halk
              </div>
              <img src="~@/assets/images/privileges/halk.png" alt="">
              <div class="products__product-price">
                1500 rub
              </div>
            </div>
            <div class="products__product products__product-high">
              <div class="products__product-title">
                Immortal
              </div>
              <img src="~@/assets/images/privileges/immortal.png" alt="">
              <div class="products__product-price">
                2500 rub
              </div>
            </div>
            <div class="products__product products__product-hard">
              <div class="products__product-title">
                Czar
              </div>
              <img src="~@/assets/images/privileges/czar.png" alt="">
              <div class="products__product-price">
                3000 rub
              </div>
            </div>
            <div class="products__product products__product-hard">
              <div class="products__product-title">
                King
              </div>
              <img src="~@/assets/images/privileges/king.png" alt="">
              <div class="products__product-price">
                4000 rub
              </div>
            </div>
            <div class="products__product products__product-hard">
              <div class="products__product-title">
                Major
              </div>
              <img src="~@/assets/images/privileges/major.png" alt="">
              <div class="products__product-price">
                6000 rub
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue'

@Component({
  components: {
    Title
  }
})
export default class extends Vue {
}
</script>

<style lang="stylus" scoped>
@import "~@/styles/common.styl"


.categories
  display flex
  flex-wrap wrap
  flex-direction row
  margin-top 2rem
  justify-content center

  &__category
    box-shadow 15px 10px 20px #e4e4f5
    border-bottom 4px solid #e9e9f5
    font-family AcromBold
    border-radius 4px
    position relative
    margin 0 20px

    > a
      display block
      padding 15px 25px
      padding-left 60px
      color #acb4ca
      width 100%
      height 100%

      &:before
        background-color #acb4ca
        -webkit-mask-size: 35px 35px;
        left 7px
        top 6px
        content ''
        width 35px
        height 35px
        position absolute

    &-privileges a:before
      -webkit-mask-image url("~@mojang/web-theme-bootstrap/assets/svg/icons/line-creeper.svg")

    &-cases a:before
      -webkit-mask-image url("~@mojang/web-theme-bootstrap/assets/svg/icons/line-box.svg")

    &-amount a:before
      -webkit-mask-image url("~@mojang/web-theme-bootstrap/assets/svg/icons/line-wallet.svg")

    &-others a:before
      -webkit-mask-image url("~@mojang/web-theme-bootstrap/assets/svg/icons/pixel-play.svg")

    &-active
      background-image linear-gradient(to right, #d0d0e6 0%, #d1d1ec 75%)
      border-color #b7b7d2

      > a
        color #7f7f96

        &:before
          background-color #7f7f9b

.products
  display flex
  flex-wrap wrap
  flex-direction row
  justify-content center
  margin-top 3rem

  &__product
    background #eeeef9
    background-image linear-gradient(to right bottom, #eeeef9, #f5f5fd)
    align-items center
    justify-content space-between
    flex-direction column
    background-repeat no-repeat
    background-position center
    min-height 250px
    margin 10px 15px
    min-width 250px
    display flex
    transition all .2s
    border-radius 4px

    &:hover
      cursor pointer
      filter blur(1px)

    &:hover img
      transform scale(1.1)

    img
      z-index 0
      pointer-events none
      transition all .2s
      position relative
      text-align center
      @extend .disable-highlight

    &-title
      padding 30px
      font-family AcromBold, sans-serif
      font-weight 700
      color #0f0f0f
      width 100%

    &-price
      z-index 5
      font-family AcromBold, sans-serif
      padding 18px 30px
      width 100%
      color #FFFFFF
      font-size 1.3rem
      text-transform uppercase
      border-radius 0 10px 0 10px

    //&-light &-price
    //  background-image linear-gradient(to right, #313dbb, #8286f9)
    //  text-shadow 2px 2px 8px #383db5

    &-light &-price
      background-color #0d8298
      background-image linear-gradient(to right, #0d8298 0%, #21b4cc 80%)
      text-shadow 2px 2px 8px #137084

    &-medium &-price
      background-color #ffdd00
      background-image linear-gradient(315deg, #ffdd00 0%, #fbb034 74%)
      text-shadow 2px 2px 8px #bd811e

    &-high &-price
      background-color #fd0
      background-image linear-gradient(315deg, #f79f00 0%, #fb8234 90%)
      text-shadow 2px 2px 8px #cc8c10

    &-hard &-price
      background-color #ff2a00
      background-image linear-gradient(315deg, #ff2a00 0%, #ce1717 60%)
      text-shadow 2px 2px 8px #f3dcdc
</style>

