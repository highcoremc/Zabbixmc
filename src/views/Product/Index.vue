<template>
  <div class="product">
    <div class="product__overview">
      <div class="product__overview-title" :class="{'product__overview-title-light': isValidInput}">Phoenix</div>
      <div class="product__overview-content card-content">
        <div class="product__overview-content__preview">
          <img src="~@/assets/images/privileges/phoenix.png" alt="">
        </div>
        <div class="product__overview-content__description" :class="{'product__overview-content__description-light': isValidInput}">
          <p class="product__overview-content__advantages" :class="{'product__overview-content__advantages-light': isValidInput}">Основные преимущества</p>
          <p>Открыть личный верстак - /workbench</p>
          <p>Открыть личный эндер сундук - /ec</p>
          <p>Одеть любой блок на голову - /hat</p>
          <p>Префикс в чате/табе/над головой</p>
          <p>Включить режим АФК - /afk</p>
          <p>Зарплата 1.000 - /salary</p>
          <p class="product__overview-content__benefits"  :class="{'product__overview-content__benefits-light': isValidInput}">Дополнительно</p>
          <p>Набор HERO - /kit hero</p>
          <p>Дополнительных слотов на аукционе - +2</p>
          <p>Доступно 2 региона для привата - /rg claim</p>
        </div>
      </div>
    </div>

    <div class="product__fields card-content">
      <TextInput :disabled="!isValidInput"
                 :placeholder="'Ваш ник'"
                 :name="'username'"
                 :category="'light'"
                 v-model="username"
      />

      <div class="product__fields-buy_button product__fields-buy_button-light" :class="{ 'disabled': !isValidInput }">
        <transition name="custom-classes-transition"
            enter-active-class="animate__animated animate__bounceIn"
            leave-active-class="animate__animated animate__bounceOutDown">
          <div class="btn btn-primary product__fields-buy_button__button"
               v-show="isValidInput">Перейти к оплате</div>
        </transition>
      </div>
    </div>

    <!--    <div class="ago-button">-->
    <!--      <router-link class="ago-button__button" :to="{name: 'shop'}">-->
    <!--        Вернуться назад-->
    <!--      </router-link>-->
    <!--    </div>-->
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
  public username: string = '';

  get isValidInput(): boolean
  {
    return this.username.length >= 4 && !!this.username.match(/^[A-Za-z0-9_]+$/);
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/styles/shared/variables.styl'
@import '~@/styles/shared/functions.styl'

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

  &__overview
    justify-content center
    flex-direction column

    &-title
      font-family AcromExtraBold, sans-serif
      background-image linearGradient(gray, lightViolet)
      -webkit-text-fill-color transparent
      -webkit-background-clip text
      font-size 1.8rem
      position relative

      &-light
        background-image linearGradient(light-primary, light-secondary)

      &-medium
        background-image linearGradient(medium-primary, medium-secondary)

      &-high
        background-image linearGradient(high-primary, high-secondary, to right, 0%, 25%)

    &-content
      justify-content space-around
      line-height 1.23rem
      align-items center
      padding 1.5rem 0
      font-size .93rem
      display flex

      &__benefits
        font-family AcromMedium
        font-size 1.15rem
        margin-left -1px
        padding 7px 0

      &__advantages
        font-family AcromMedium
        font-size 1.2rem
        margin-left -1px
        padding 7px 0

      &__advantages,
      &__benefits
        background-image linearGradient(gray, darkgrey)
        -webkit-text-fill-color transparent
        -webkit-background-clip text
        &-light
          background-image linearGradient(light-primary, light-secondary)
        &-medium
          background-image linearGradient(medium-primary, medium-secondary)
        &-high
          background-image linearGradient(high-primary, high-secondary)

      &__description
        border-left 2px solid
        padding 0 0 0 20px
        color gray

        &-light
          border-color alpha(light-secondary, .7)
        &-medium
          border-color alpha(medium-secondary, .7)
        &-high
          border-color alpha(high-secondary, .7)

  &__fields
    flex-direction column
    align-items flex-end

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
      &-light &__button:before
        background-color #2db3cb
        box-shadow 0 -4px #006375 inset, 0 4px #2be1fb inset, -4px 0 #02f1fd inset, 4px 0 #087f9a inset
      &-medium &__button:before
        background-color #f39a17
        box-shadow 0 -4px #bf6611 inset, 0 4px #ffc500 inset, -4px 0 #fac531 inset, 4px 0 #b7690c inset
      &-high &__button:before
        background-color #b03030
        box-shadow 0 -4px rgb(108 0 0 / 50%) inset, 0 4px rgb(253 31 31 / 99%) inset, -4px 0 rgb(253 31 31 / 50%) inset, 4px 0 rgb(108 0 0 / 50%) inset

.ago-button
  align-self center

  &__button
    font-family AcromMedium, sans-serif
    transition color 0.4s ease-out
    border 4px solid #434367
    position relative
    margin-top 40px
    color #434367
    padding 10px
    overflow hidden
    max-width 200px
    text-align center

    &:before
      transition box-shadow 0.5s ease-out
      position absolute
      content ''
      top 0
      left 0
      bottom 0
      margin auto
      border-radius 50%
      display block
      width 300px
      height 300px
      left -50%
      z-index -1

    &:hover
      color #f5f5fd

      &:before
        box-shadow inset 0 0 0 160px #434367

</style>