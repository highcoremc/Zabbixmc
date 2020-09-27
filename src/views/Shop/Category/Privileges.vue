<template>
  <div class="col-md-12">
    <div class="products">
      <ProductCard :title="'Hero'" class="products__product products__product-light">
        <div class="products__product-preview" data-image="/images/privileges/hero.png"></div>
        <div class="products__product-price">50 rub</div>
      </ProductCard>
      <ProductCard :title="'Hero+'" class="products__product products__product-light">
        <div class="products__product-preview" data-image="/images/privileges/heroplus.png"></div>
        <div class="products__product-price">150 rub</div>
      </ProductCard>
      <ProductCard :title="'Deluxe'" class="products__product products__product-light">
        <div class="products__product-preview" data-image="/images/privileges/deluxe.png"></div>
        <div class="products__product-price">300 rub</div>
      </ProductCard>
      <ProductCard :title="'Legendary'" class="products__product products__product-light">
        <div class="products__product-preview" data-image="/images/privileges/legendary.png"></div>
        <div class="products__product-price">600 rub</div>
      </ProductCard>
      <ProductCard :title="'Titan'" class="products__product products__product-medium">
        <div class="products__product-preview" data-image="/images/privileges/titan.png"></div>
        <div class="products__product-price">900 rub</div>
      </ProductCard>
      <ProductCard :title="'Hunter'" class="products__product products__product-medium">
        <div class="products__product-preview" data-image="/images/privileges/hunter.png"></div>
        <div class="products__product-price">1200 rub</div>
      </ProductCard>
      <ProductCard :title="'Prime'" class="products__product products__product-medium">
        <div class="products__product-preview" data-image="/images/privileges/prime.png"></div>
        <div class="products__product-price">1500 rub</div>
      </ProductCard>
      <ProductCard :title="'Sponsor'" class="products__product products__product-medium">
        <div class="products__product-preview" data-image="/images/privileges/sponsor.png"></div>
        <div class="products__product-price">2500 rub</div>
      </ProductCard>
      <ProductCard :title="'Phantom'" class="products__product products__product-high">
        <div class="products__product-preview" data-image="/images/privileges/phantom.png"></div>
        <div class="products__product-price">3000 rub</div>
      </ProductCard>
      <ProductCard :title="'Phoenix'" class="products__product products__product-high">
        <div class="products__product-preview" data-image="/images/privileges/phoenix.png"></div>
        <div class="products__product-price">4000 rub</div>
      </ProductCard>
      <ProductCard :title="'Major'" class="products__product products__product-high">
        <div class="products__product-preview" data-image="/images/privileges/major.png"></div>
        <div class="products__product-price">6000 rub</div>
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
  public mounted(): void {
    document.querySelectorAll<HTMLElement>('[data-image]').forEach(el => {
      el.style.backgroundImage = `url('${el.dataset.image}')`
    })
  }
}
</script>

<style lang="stylus" scoped>
.products
  &__product
    img
      max-height 164px
      max-width 177px

    &-preview
      width 195px
      height 165px
      background-repeat no-repeat
      background-position center
      background-size auto
      content ''

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
      background-image linear-gradient(to right, #0d8298 0%, #21b4cc 100%)
      text-shadow 2px 2px 8px #137084

    &-medium &-price
      background-color #fac231
      background-image linear-gradient(to right, #fb8234 0%, #fac231 80%)
      text-shadow 2px 2px 8px #cc8c10

    &-high &-price
      background-color #ff2a00
      background-image linear-gradient(to right, #ff2a00 0%, #ce1717 100%)
      text-shadow 2px 2px 8px #f3dcdc
</style>