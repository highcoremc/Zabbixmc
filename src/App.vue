<template>
  <div id="root">
    <div class="container">
      <div class="bar">
        <div class="row">
          <div class="col-md-2">
            <LightGreenBadge :title="'ZMC'"/>
          </div>
          <div class="col-md-10">
            <ul class="navigation">
              <li class="navigation__item" v-for="(route, i) in $router.options.routes" :key="i"
                  @mouseover="activeIndex = i"
                  @mouseout="activeIndex = -1">
                <router-link :to="route.path" class="navigation__link text-underline"
                             :class="{'text-underline-hovered': activeIndex === i}">
                  <i :class="route.meta.icon"></i>
                  <div class="label-buttonHead">{{ route.name }}</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LightGreenBadge from "@/components/LightGreenBadge.vue";

@Component({
  components: {
    LightGreenBadge
  }
})
export default class App extends Vue {
  public activeIndex: number = -1
}
</script>

<style lang="stylus">
#root
  font-family Acrom, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #232121

.ico-buttonHead
  background-position center
  background-repeat no-repeat

.label-buttonHead
  margin-top 9px
  position relative
  z-index 1

.bar
  min-height 150px

.navigation
  list-style-type none
  padding 0
  overflow hidden
  margin-top 49px

  &__item
    float left
    text-align center
    margin 0 45px 0

    > i
      font-size 5rem

  &__link
    color #3c3737
    font-size 1.05rem
    text-align center
    font-family AcromBold, sans-serif
    text-decoration none
    position relative
    display inline-block

    &:hover
      color #5b5b77
      transition 0.3s
      background-color transparent
      text-decoration none

    &::before
      left 50%

    &::after
      right 50%

</style>
