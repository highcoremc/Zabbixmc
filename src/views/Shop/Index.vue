<template>
  <div class="shop">
    <div class="row">
      <div class="col-md-12">
        <Title :title="'магазин'" :content="'Ты сможешь большее с всевозможными привилегиями!'"
               :subtitle="'крутых товаров'"/>

        <div class="col-md-12">
          <ul class="categories">
            <li v-for="item in navigation" :key="'shop_nav_' + item.name" class="categories__category"
                @click="changeActiveItem(item.name)"
                :class="[{'categories__category-active': item.name === activeCategory}, `categories__category-${item.meta.key}`]">
              <router-link :to="item.path">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SHOP_NAVIGATION, getRouteNavList } from '@/resources/navigation'
import { RouteNavigationItem } from "@/router/RouteNavigationItem"
import { Component, Vue } from 'vue-property-decorator'
import Title from '@/components/Title.vue'

@Component({
  components: {
    Title
  }
})
export default class extends Vue {
  public navigation: Array<RouteNavigationItem> = getRouteNavList(SHOP_NAVIGATION)
  public activeCategory: string = ''

  public mounted(): void
  {
    if (!this.navigation  || this.navigation.length === 0) {
      console.log("Navigation is empty.");
      return
    }

    const firstRoute = this.navigation[0]

    if (this.$route.name === 'shop') {
      this.$router.replace(firstRoute.path)
      return
    }

    this.setUpActiveCategory(firstRoute);
  }

  private setUpActiveCategory(firstRoute: RouteNavigationItem) {
    for (let nav of this.navigation) {
      if (this.$route.name === nav.name) {
        this.activeCategory = nav.name
        return
      }
    }

    this.activeCategory = firstRoute.name
  }

  public changeActiveItem(name: string) {
    this.activeCategory = name
  }
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

<style lang="stylus">
.products
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
</style>

