<template>
  <div id="root">
    <div class="container">
      <div class="bar">
        <div class="row">
          <div class="col-xs-2">
            <a
              href="/"
              class="logotype"
            />
          </div>
          <div class="col-md-10">
            <ul class="navigation">
              <li
                v-for="(route, i) in navigation"
                :key="'nav_' + route.name + '_' + i"
                class="navigation__item"
                @mouseover="activeIndex = i"
                @mouseout="activeIndex = -1"
              >
                <router-link
                  :to="route.path"
                  class="navigation__link text-underline"
                  :class="{'text-underline-hovered': activeIndex === i}"
                >
                  <i :class="route.icon" />
                  <div class="label-buttonHead">
                    {{ route.title }}
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <router-view />
      </div>
    </div>
    <div class="footer">
      <div class="footer__content container">
        <div class="footer__item footer__social">
          <a
            href="/"
            class="logotype"
          />
          <div class="footer__social-links">
            <a
              href="https://discord.gg/DRJpBWP"
              target="_blank"
              class="footer__social-links__link"
            ><i class="fab fa-discord" /></a>
            <a
              href="https://t.me/zabmc"
              target="_blank"
              class="footer__social-links__link"
            ><i class="fab fa-telegram-plane" /></a>
            <a
              href="https://vk.com/zabmc"
              target="_blank"
              class="footer__social-links__link"
            ><i class="fab fa-vk" /></a>
          </div>
        </div>
        <div class="footer__item footer__navigation">
          <div class="footer__item-title">
            Навигация
          </div>
          <ul class="footer__navigation--list">
            <li
              v-for="(route, i) in navigation"
              :key="'footer_' + route.name + '_' + i"
              class="footer__navigation--item"
            >
              <router-link
                :to="route.path"
                class="footer__navigation--item_link"
              >
                {{ route.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__item footer__navigation">
          <div class="footer__item-title">
            Контакты
          </div>
          <ul class="footer__navigation--list">
            <li class="footer__navigation--item">
              <a
                href="http://discord.gg/DRJpBWP"
                target="_blank"
                class="footer__navigation--item_link"
              >Discord</a>
            </li>
            <li class="footer__navigation--item">
              <a
                href="https://t.me/helpzabmc"
                target="_blank"
                class="footer__navigation--item_link"
              >Telegram</a>
            </li>
            <li class="footer__navigation--item">
              <a
                href="https://vk.me/zabmc"
                target="_blank"
                class="footer__navigation--item_link"
              >VK</a>
            </li>
          </ul>
        </div>
        <!--        <div class="footer__item footer__navigation">-->
        <!--          <div class="footer__item-title">Почитать</div>-->
        <!--          <ul class="footer__navigation&#45;&#45;list">-->
        <!--            <li class="footer__navigation&#45;&#45;item">-->
        <!--              <a href="#" class="footer__navigation&#45;&#45;item_link">Публичная оферта</a>-->
        <!--            </li>-->
        <!--            <li class="footer__navigation&#45;&#45;item">-->
        <!--              <a href="#" class="footer__navigation&#45;&#45;item_link">Политика обработки персональных данных</a>-->
        <!--            </li>-->
        <!--          </ul>-->
        <!--        </div>-->
      </div>
      <div class="footer__copyright">
        <div class="text">
          ZabbixMC Все права защищены
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LightGreenBadge from "@/components/LightGreenBadge.vue"
import { MAIN_NAVIGATION, getRouteNavList } from '@/resources/navigation'
import NavigationItem from "@/router/NavigationItem"

@Component({
  components: {LightGreenBadge}
})
export default class App extends Vue {
  public navigation?: NavigationItem[] = getRouteNavList(MAIN_NAVIGATION)
  public activeIndex = -1
}
</script>

<style lang="stylus">
#root
  font-family Acrom, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  overflow hidden
  color #232121

.text-underline::before,
.text-underline::after
  content ''
  position absolute
  top 81%
  width 0
  height 7px
  background linear-gradient(to top, #12ff2d, #33ff77)
  transition .3s

.text-underline-hovered::before,
.text-underline-hovered::after
  width 60% !important

.text-underline::before
  left 50%

.text-underline::after
  right 50%

.text-underline::hover:before,
.text-underline::hover:after
  width 50%

.content
  min-height 75vh

.ico-buttonHead
  background-position center
  background-repeat no-repeat

.label-buttonHead
  margin-top 9px
  position relative
  z-index 1

.bar
  min-height 150px
  position relative
  background-color #f5f5fd
  z-index 100

  .logotype
    top 75px
    padding 60px

.logotype
  content ''
  background-image url("~@/assets/images/logotype.png") !important
  background-repeat no-repeat !important
  background-size contain !important
  width 110px
  height 110px
  position relative
  text-align center
  transition all .2s

  &:hover
    opacity .85

.navigation
  justify-content center
  display flex
  padding 0
  overflow hidden
  margin-top 49px
  list-style-type none

  &__item
    float left
    text-align center
    margin 0 45px 0
    padding-top 5px

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
    background-color transparent

    &:hover,
    &:focus,
    &:active
      color #5b5b77
      transition 0.3s
      text-decoration none
      background-color transparent

    &::before
      left 50%

    &::after
      right 50%

.footer
  background-color #FFFFFF
  margin-top 120px
  background-image url("~@/assets/images/bg-grid.jpg")
  background-repeat repeat-x
  background-size 60%
  position relative

  &:before
    content ''
    width 100%
    height 100%
    top 0
    left 0
    z-index 0
    position: absolute
    background-image linear-gradient(to right top, rgba(255, 255, 255, 0.3), transparent)

  &__content
    display flex
    align-items flex-start
    position relative

    > *
      z-index 1

  &__item
    display inline-flex
    padding 60px 80px

    &:first-child
      padding 60px 80px 60px 0

    &-title
      font-size .9rem
      font-family AcromBold, sans-serif
      text-transform uppercase
      padding 10px 0

  &__copyright
    font-family AcromBold, sans-serif
    color #acacb9
    position relative
    align-self flex-end
    width 100%
    padding 20px 0
    display flex
    background-image radial-gradient(circle at center, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))
    justify-content center

    .text
      position relative

    .text:before
      content '©'
      top -1px
      color #b1b4bc
      left -17px
      font-size 1.35rem
      position absolute

  &__social
    flex-direction column
    align-items center
    flex-wrap wrap
    display flex

    &-links
      margin-top 5px

      &__link
        display inline-flex
        margin 5px
        color #929598
        justify-content center
        align-items center
        transition all .5s

        &:hover,
        &:active,
        &:focus
          text-decoration none
          color #404040

        > i
          font-size 1.5rem

  &__navigation
    flex-direction column
    align-items flex-start
    display flex
    max-width 450px

    &--item
      padding 5px 0
      transition all .3s

      &:hover
        transform matrix(1, 0, 0, 1, 5, 0)

      &_link
        color #000000
        font-family Acrom

        &:hover,
        &:focus,
        &:active
          text-decoration none
          background transparent
          color #000000
</style>
