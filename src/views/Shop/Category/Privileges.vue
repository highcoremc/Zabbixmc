<template>
  <div class="col-md-12">
    <div class="products">
      <ProductCard :title="'Hero'" class="products__product products__product-light">
        <img src="~@/assets/images/privileges/builder.png" alt="">
        <div class="products__product-price">
          50 rub
        </div>
      </ProductCard>
      <ProductCard :title="'Hero+'" class="products__product products__product-light">
        <img src="~@/assets/images/privileges/opaxe.png" alt="">
        <div class="products__product-price">
          150 rub
        </div>
      </ProductCard>
      <ProductCard :title="'Ninja'" class="products__product products__product-light">
        <img src="~@/assets/images/privileges/ninja.png" alt="">
        <div class="products__product-price">
          300 rub
        </div>
      </ProductCard>
      <ProductCard :title="'Lord'" class="products__product products__product-medium">
        <img src="~@/assets/images/privileges/lord.png" alt="">
        <div class="products__product-price">
          600 rub
        </div>
      </ProductCard>
      <ProductCard :title="'Oper'" class="products__product products__product-medium">
        <img src="~@/assets/images/privileges/oper.png" alt="">
        <div class="products__product-price">
          900 rub
        </div>
      </ProductCard>
      <ProductCard :title="'Legend'" class="products__product products__product-medium">
        <img src="~@/assets/images/privileges/legend.png" alt="">
        <div class="products__product-price">
          1200 rub
        </div>
      </ProductCard>
      <ProductCard :title="'Halk'" class="products__product products__product-high">
        <img src="~@/assets/images/privileges/halk.png" alt="">
        <div class="products__product-price">
          1500 rub
        </div>
      </ProductCard>
      <ProductCard :title="'Immortal'" class="products__product products__product-high">
        <img src="~@/assets/images/privileges/immortal.png" alt="">
        <div class="products__product-price">
          2500 rub
        </div>
      </ProductCard>
      <ProductCard :title="'Czar'" class="products__product products__product-hard">
        <img src="~@/assets/images/privileges/czar.png" alt="">
        <div class="products__product-price">
          3000 rub
        </div>
      </ProductCard>
      <ProductCard :title="'King'" class="products__product products__product-hard">
        <img src="~@/assets/images/privileges/king.png" alt="">
        <div class="products__product-price">
          4000 rub
        </div>
      </ProductCard>
      <ProductCard :title="'Major'" class="products__product products__product-hard">
        <img src="~@/assets/images/privileges/major.png" alt="">
        <div class="products__product-price">
          6000 rub
        </div>
      </ProductCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProductCard from '@/components/ProductCard.vue'

@Component({
  components: {
    ProductCard
  }
})
export default class extends Vue {
}
</script>

<style lang="stylus" scoped>
.products
  &__product
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