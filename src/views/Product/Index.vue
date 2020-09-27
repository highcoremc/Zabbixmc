<template>
  <div class="product">
    <div class="product__overview">
      <div class="product__overview-title product__overview-title-light" title="Phoenix"
           :class="{'disabled': !isValidInput}">Phoenix
      </div>
      <div class="product__overview--ago-button">
        <router-link :to="{name:'shop'}">Назад</router-link>
      </div>
      <div class="product__overview-content card-content">
        <div class="product__overview-content__preview">
          <img src="/images/privileges/phoenix.png" alt="">
        </div>
        <div class="product__overview-content__description product__overview-content__description-light"
             :class="{'disabled': !isValidInput}">
          <p class="product__overview-content__advantages product__overview-content__advantages-light"
             title="Основные преимущества"
             :class="{'disabled': !isValidInput}"
          >Основные преимущества</p>
          <p>Открыть личный верстак - /workbench</p>
          <p>Открыть личный эндер сундук - /ec</p>
          <p>Одеть любой блок на голову - /hat</p>
          <p>Префикс в чате/табе/над головой</p>
          <p>Включить режим АФК - /afk</p>
          <p>Зарплата 1.000 - /salary</p>
          <p class="product__overview-content__benefits product__overview-content__benefits-light" title="Дополнительно"
             :class="{'disabled': !isValidInput}"
          >Дополнительно</p>
          <p>Набор HERO - /kit hero</p>
          <p>Дополнительных слотов на аукционе - +2</p>
          <p>Доступно 2 региона для привата - /rg claim</p>
        </div>
      </div>
    </div>

    <div class="product__price product__price-light">
      <transition enter-active-class="animate__animated animate__flash"
                  leave-active-class="animate__animated animate__fadeOutUpBig">
        <div class="product__price-title" v-show="isValidInput">
          Итого к оплате: <span class="product__price-price">{{ price }} рублей</span>
        </div>
      </transition>
    </div>

    <div class="product__fields card-content">
      <TextInput :disabled="!isValidInput"
                 :placeholder="'Введите ваш ник на сервере'"
                 :name="'username'"
                 :category="'light'"
                 v-model="username"
      />

      <div class="product__fields-coupon">
        <a class="product__fields-coupon--active"
           @click="hasCoupon = true" v-show="!hasCoupon"
           href="javascript:void(0)">У меня есть купон</a>

        <transition enter-active-class="animate__animated animate__slideInDown">
          <TextInput :disabled="!isValidCoupon || !isValidInput"
                     :placeholder="'Введите купон'"
                     :name="'coupon'"
                     :category="'light'"
                     v-model="coupon"
                     v-show="hasCoupon"
          />
        </transition>
      </div>

      <div class="product__fields-buy_button product__fields-buy_button-light" :class="{ 'disabled': !isValidInput }">
        <transition enter-active-class="animate__animated animate__bounceIn"
                    leave-active-class="animate__animated animate__fadeOutDownBig">
          <div class="btn btn-primary product__fields-buy_button__button"
               v-show="isValidInput">Перейти к оплате
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TextInput from '@/components/TextInput.vue'

@Component({
  components: {
    TextInput
  }
})
export default class extends Vue {
  public hasCoupon: boolean = false
  public username: string = ''
  public coupon: string = ''
  public price: number = 100

  get isValidInput(): boolean {
    return this.username.length >= 4 && !!this.username.match(/^[A-Za-z0-9_]+$/)
  }

  get isValidCoupon(): boolean {
    return this.coupon.length >= 4
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/styles/common'

.card-content
  box-shadow 3px 4px 40px #eaeaf7
  font-family Acrom, sans-serif
  background #fdfdff
  border-radius 8px
  text-align left
  margin 25px 0
  padding 50px

.product
  display flex
  padding-top 60px
  flex-flow wrap column
  align-items center

  > div
    display flex
    width 50%

  &__price
    align-items center
    position relative
    overflow hidden
    min-height 50px
    display flex

    &-title
      font-family AcromMedium, sans-serif
      font-size 1.8rem
      color #606079

    &-price
      background-image radialGradient(darkgray, gray)
      text-shadow 0 0 7px alpha(gray, .4)
      font-family AcromBold, sans-serif
      -webkit-text-fill-color transparent
      -webkit-background-clip text

    &-light &-price
      background-image radialGradient(darken(light-primary, 15%), darken(light-secondary, 7%))
      text-shadow 0 0 7px alpha(light-primary, .4)

    &-medium &-price
      background-image radialGradient(darken(medium-primary, 15%), darken(medium-secondary, 10%))
      text-shadow 0 0 7px alpha(medium-primary, .4)

    &-high &-price
      background-image radialGradient(darken(high-primary, 15%), darken(high-secondary, 10%))
      text-shadow 0 0 7px alpha(high-primary, .4)


  &__overview
    justify-content center
    flex-direction column
    position relative

    &--ago-button
      position: absolute
      padding-right 5px
      padding-top 25px
      right 0
      top 0
      a
        color #000

    &-title
      font-family AcromExtraBold, sans-serif
      background-image linearGradient(alpha(gray, 70%), darken(gray, 10%))
      -webkit-text-fill-color transparent
      -webkit-background-clip text
      font-size 3.5rem
      position relative

      &:after
        -webkit-text-fill-color transparent
        transition height .2s ease-in-out, text-shadow .3s ease
        -webkit-background-clip text
        content attr(title)
        position absolute
        width 100%
        height 0
        top 0
        left 0

      &-light:after
        background-image linearGradient(light-primary, light-secondary)
        text-shadow 1px 0 20px alpha(light-primary, .3)

      &-medium:after
        background-image linearGradient(medium-primary, medium-secondary)
        text-shadow 1px 0 20px alpha(medium-primary, .3)

      &-high:after
        background-image linearGradient(high-primary, high-secondary, to right, 0%, 25%)
        text-shadow 1px 0 20px alpha(high-primary, .3)

      &.disabled:after
        text-shadow none

      &-light:not(.disabled):after,
      &-medium:not(.disabled):after,
      &-high:not(.disabled):after
        height 100%

    &-content
      justify-content space-around
      line-height 1.23rem
      align-items center
      padding 1.5rem 0
      font-size .93rem
      display flex

      &__benefits
        font-size 1.15rem

      &__advantages
        font-size 1.2rem

      &__advantages,
      &__benefits
        font-family AcromMedium, sans-serif
        background-image linearGradient(gray, darkgrey)
        -webkit-text-fill-color transparent
        -webkit-background-clip text
        margin 7px 0 7px -1px
        position relative

        &:after
          -webkit-text-fill-color transparent
          -webkit-background-clip text
          transition width .2s linear
          content attr(title)
          position absolute
          height 100%
          width 0
          top 0
          left 0

        &-light:after
          background-image linearGradient(light-primary, light-secondary)

        &-medium:after
          background-image linearGradient(medium-primary, medium-secondary)

        &-high:after
          background-image linearGradient(high-primary, high-secondary)

        &-light:not(.disabled):after,
        &-medium:not(.disabled):after,
        &-high:not(.disabled):after
          width 100%

      &__description
        padding 0 0 0 20px
        position relative
        color gray

        &:before
          background-image radialGradient(darkgray, medium-gray)
          height 100%

        &:after
          transition height .2s ease-in-out
          height 0

        &:after,
        &:before
          position absolute
          width 3px
          content ''
          left 0
          top 0

        &-light:after
          background-image radialGradient(light-secondary, light-primary)

        &-medium:after
          background-image radialGradient(medium-secondary, medium-primary)

        &-high:after
          background-image radialGradient(high-secondary, high-primary)

        &-light:not(.disabled):after,
        &-medium:not(.disabled):after,
        &-high:not(.disabled):after
          height 100%

  &__fields
    flex-direction column
    align-items flex-end

    &-coupon
      padding-top 10px
      min-height 80px
      overflow hidden
      width 100%

      &--active
        font-family AcromBold, sans-serif
        -webkit-background-clip text
        font-size 1.2rem
        color alpha(gray, 70%)

    &-buy_button
      margin-bottom -30px
      padding-top 20px
      overflow hidden
      min-height 80px
      width 100%

      &.disabled &__button
        cursor default

      &.disabled &__button:before
        background-color #313131
        box-shadow 0 -4px rgba(0, 0, 0, 0.35) inset, 0 4px rgba(255, 255, 255, 0.25) inset, -4px 0 rgba(255, 255, 255, 0.25) inset, 4px 0 rgba(0, 0, 0, 0.35) inset

      &__button
        width 100%
        min-height 3rem

      &-light &__button:before
        background-color #2db3cb
        box-shadow 0 -4px #006375 inset, 0 4px #2be1fb inset, -4px 0 #02f1fd inset, 4px 0 #087f9a inset

      &-medium &__button:before
        background-color #f39a17
        box-shadow 0 -4px #bf6611 inset, 0 4px #ffc500 inset, -4px 0 #fac531 inset, 4px 0 #b7690c inset

      &-high &__button:before
        background-color #b03030
        box-shadow 0 -4px rgb(108 0 0 / 50%) inset, 0 4px rgb(253 31 31 / 99%) inset, -4px 0 rgb(253 31 31 / 50%) inset, 4px 0 rgb(108 0 0 / 50%) inset

</style>