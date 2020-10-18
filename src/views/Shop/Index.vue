<template>
  <div class="shop">
    <div class="row">
      <div class="col-md-12">
        <Title :title="'магазин'" class="animate__animated animate__fadeInDown"
               :content="'Ты сможешь большее с всевозможными привилегиями!'"
               :subtitle="'крутых товаров'"/>

        <div class="col-md-12" v-if="loaded">
          <ul class="categories">
            <li v-for="(item, i) in categories" :key="'shop_nav_' + item.name"
                class="categories__category animate__animated"
                @click="selectAnotherCategory(item.name)"
                :class="[
                    {'categories__category-active': item.name === activeCategory},
                    `categories__category-${item.name}`,
                    i >= (categories.length / 2)
                      ? 'animate__fadeInRight'
                      : 'animate__fadeInLeft'
                ]">
              <router-link :to="{ name: 'shop', params: { category: item.name } }">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-md-12" v-if="loaded">
        <div class="products" v-if="products.length">
          <div v-for="item in products" :key="'products__' + item.category" class="animate__animated"
               :class="[
                   'products__' + item.category,
                   item.category === activeCategory
                      ? 'animate__fadeInUp'
                      : 'animate__fadeOutLeft'
               ]" v-show="item.category === activeCategory">
            <router-link v-for="product in item.products" :key="'pr'+product.id"
                         :to="{name: 'product.overview', params: { productId: product.id }}">
              <ProductCard :title="product.title" class="products__product"
                           :class="`products__product-${product.metadata.level || ''}`">
                <div class="products__product-preview" :style="{backgroundImage: `url(${product.metadata.src})`}"></div>
                <div class="products__product-price">{{ product.price }} {{ product.currency }}</div>
              </ProductCard>
            </router-link>
            <EmptyProducts v-if="item.products.length === 0"></EmptyProducts>
          </div>
        </div>
        <EmptyProducts v-else></EmptyProducts>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Category, { CategoryProducts } from '@/shop/Category'
import EmptyProducts from "@/components/EmptyProducts.vue"
import ProductCard from "@/components/ProductCard.vue"
import CategoryApi from '@/http/CategoryApi'
import HttpClient from '@/http/HttpClient'
import ProductApi from '@/http/ProductApi'
import Title from '@/components/Title.vue'
import Product from "@/shop/Product"

@Component({
  components: {
    ProductCard,
    Title,
    EmptyProducts
  }
})
export default class extends Vue {

  private products: CategoryProducts[] = []
  private categories: Category[] = []
  private activeCategory: string = ''

  private categoryApi: CategoryApi;
  private productApi: ProductApi;

  private loaded: boolean = false;

  constructor() {
    super();
    const httpClient = new HttpClient('http://dev.highpay.io/public-api/shops/shop_ydu3vYgKzWaklxb5');

    this.productApi = new ProductApi(httpClient)
    this.categoryApi = new CategoryApi(httpClient)
  }

  public async created() {
    await this.loadCategories()
    await this.loadProducts()
    this.onRouteChange()
    this.loaded = true;
  }

  private async loadProducts(): Promise<void> {
    const result = await this.productApi.getProducts()
    this.products = this.prepareProducts(result)
  }

  private async loadCategories() {
    this.categories = await this.categoryApi.getCategories()
  }

  private prepareProducts(input: Product[]): CategoryProducts[] {
    const result = []

    for (const category of this.categories) {
      const products = input
          .filter(product => product.category === category.name)
          .map(product => this.floorPrice(product))

      result.push({
        category: category.name,
        products: products
      })
    }

    return result
  }

  public scrollTop(): void {
    window.scrollTo(0, 0)
  }

  @Watch('$route', {immediate: true, deep: true})
  public onRouteChange(): void {
    this.scrollTop()
    if (!this.categories || this.categories.length === 0) {
      return
    }

    this.selectAnotherCategory(this.$route.params.category)
    this.relocateIfInvalid(this.activeCategory);
    const first = this.categories[0];

    if (this.$route.name === 'shop' && !this.activeCategory) {
      this.$router.replace({
        name: 'shop',
        params: {
          category: first.name
        }
      })
    }
  }

  public selectAnotherCategory(name: string): void {
    this.activeCategory = name
  }

  private relocateIfInvalid(activeCategory: string) {
    const result = this.categories.filter(category => category.name === activeCategory)

    if (1 !== result.length) {
      const first = this.categories[0];
      return this.$router.replace({
        name: 'shop',
        params: {
          category: first.name,
        }
      })
    }
  }

  private floorPrice(product: Product) {
    product.price = Math.floor(product.price);
    return product;
  }
}
</script>

<style lang="stylus" scoped>
.categories
  display flex
  flex-wrap wrap
  flex-direction row
  margin-top 2rem
  justify-content center

  &__category
    box-shadow 15px 10px 20px #e4e4f5
    border-bottom 4px solid #e9e9f5
    -webkit-transition -webkit-transform .2s ease-out
    -moz-transition -moz-transform .2s ease-out
    font-family AcromBold
    border-radius 4px
    position relative
    margin 0 20px

    &:hover
      transform scale(1.05)

    > a
      display block
      padding 15px 25px
      padding-left 60px
      color #acb4ca
      width 100%
      height 100%

      &:hover, &:active, &:focus
        background-color transparent

      &:before
        background-color #acb4ca
        -webkit-mask-size 35px 35px
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

    &-other a:before
      -webkit-mask-image url("~@mojang/web-theme-bootstrap/assets/svg/icons/pixel-play.svg")

    &-active
      background-image linear-gradient(to right, #d0d0e6 0%, #d1d1ec 75%)
      border-color #b7b7d2

      > a
        color #7f7f96

        &:before
          background-color #7f7f9b
</style>

<style lang="stylus" scoped>
@import '~@/styles/common.styl'

.shop
  overflow hidden

.products
  animation fadeInUp
  animation-duration 1.5s
  padding 25px

  > div
    display flex
    flex-wrap wrap
    flex-direction row
    justify-content center
    margin-top 3rem

  &__product
    align-items center
    justify-content space-between
    flex-direction column
    display flex

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

    //&-low &-price
    //  background-image linear-gradient(to right, #313dbb, #8286f9)
    //  text-shadow 2px 2px 8px #383db5

    &-low &-price
      background-color light-primary
      background-image linearGradient(light-primary, light-secondary, to left, 0%, 100%)
      text-shadow 2px 2px 8px light-primary

    &-medium &-price
      background-color medium-primary
      background-image linearGradient(medium-primary, medium-secondary, to left, 0%, 100%)
      text-shadow 2px 2px 8px medium-primary

    &-high &-price
      background-color high-primary
      background-image linearGradient(high-primary, high-secondary, to right, 0%, 100%)
      text-shadow 2px 2px 8px high-primary
</style>

