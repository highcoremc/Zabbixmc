<template>
  <div
    v-if="!!product"
    class="product"
    :class="[productClass, {'disabled': !isValidInput}]"
  >
    <div class="product__overview">
      <div
        class="product__overview-title animate__animated animate__fadeInDown"
        :title="product.title"
      >
        {{ product.title }}
      </div>
      <div class="product__overview--ago-button animate__animated animate__fadeInRight">
        <a
          href="javascript:void(0)"
          @click="$router.back()"
        >Назад</a>
      </div>
      <Card class="product__overview-content animate__animated animate__fadeInLeft">
        <div class="product__overview-content__preview">
          <img
            :src="product.metadata.src"
            alt=""
          >
        </div>
        <div class="product__overview-content__description">
          <template v-for="(desc, i) in product.description">
            <p :class="'product__overview-content__' + desc.class"
               :title="desc.title">{{ desc.title }}</p>
            <p v-for="(text, e) in desc.content" :key="e + ':' + i">{{ text}}</p>
          </template>
        </div>
      </Card>
    </div>

    <div class="product__price">
      <transition
        enter-active-class="animate__animated animate__flash"
        leave-active-class="animate__animated animate__fadeOutUpBig"
      >
        <div
          v-show="isValidInput"
          class="product__price-title"
        >
          Итого к оплате: <span class="product__price-amount">{{ price }} рублей</span>
        </div>
      </transition>
    </div>

    <Card class="product__fields animate__animated animate__fadeInRight">
      <TextInput
        v-model="username"
        @change="calculatePrice"
        :disabled="!isValidInput || progress"
        :placeholder="'Введите ваш ник на сервере'"
        :name="'username'"
        :level="product.metadata.level"
      />

      <div class="product__fields-coupon">
        <a
          v-show="!hasCoupon"
          class="product__fields-coupon--active"
          href="javascript:void(0)"
          @click="hasCoupon = true"
        >У меня есть купон</a>

        <transition enter-active-class="animate__animated animate__slideInDown">
          <TextInput
            v-show="hasCoupon"
            v-model="coupon"
            :disabled="(!isValidCoupon || !isValidInput) || progress"
            :placeholder="'Введите купон'"
            :name="'coupon'"
            :level="product.metadata.level"
          />
        </transition>
      </div>

      <div class="product__buy-button">
        <transition
          enter-active-class="animate__animated animate__bounceIn"
          leave-active-class="animate__animated animate__fadeOutDownBig"
        >
          <div
            v-show="isValidInput && !progress"
            class="btn btn-primary product__buy-button__button"
            @click="submitForm"
          >
            Перейти к оплате
          </div>
        </transition>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import TextInput from '@/components/TextInput.vue'
import PaymentForm from "@/order/PaymentForm"
import ProductApi from "@/http/ProductApi"
import Card from "@/components/Card.vue"
import OrderApi from "@/http/OrderApi"
import Product from "@/shop/Product"

@Component({
  components: {
    TextInput,
    Card
  }
})
export default class extends Vue {
  private hasCoupon = false
  private username = ''
  private coupon = ''
  private price = 0
  private progress = false

  private productApi: ProductApi
  private orderApi: OrderApi
  private product: null|Product = null

  constructor() {
    super()
    this.productApi = new ProductApi(this.$httpClient)
    this.orderApi = new OrderApi(this.$httpClient)
  }

  public async created(): Promise<void> {
    this.product = await this.productApi.getProduct(this.$route.params.productId)
    this.price = !this.product ? 0 : Math.floor(this.product.price)
  }

  get isValidInput(): boolean {
    return this.username.length >= 4 && !!this.username.match(/^[A-Za-z0-9_]+$/)
  }

  get isValidCoupon(): boolean {
    return this.coupon.length >= 4
  }

  get productClass(): string {
    return this.progress ? '' : `product-${this.product?.metadata?.level}`
  }

  public async calculatePrice(): Promise<void>
  {
    const productId = this.product?.id;
    if (!this.isValidInput || !productId) {
      return
    }

    const result = await this.orderApi.calcPrice({
      recipient: this.username,
      product: productId,
    })

    console.log(result)

    if (null === result) {
      return
    }

    this.price = result
  }

  public orderInProgress(): void
  {
    this.progress = true;
  }

  public orderCanceled(): void
  {
    alert('Произошла ошибка при проведении заказа.')
    this.progress = false
  }

  public async submitForm(): Promise<void>
  {
    this.orderInProgress()

    const id = this.product?.id || ''
    const result = await this.orderApi.createOrder({
      recipient: {name: this.username},
      customer: {name: this.username},
      product: { id },
    })

    if (null === result) {
      this.orderCanceled()
      return
    }

    const formResult = await this.orderApi.processOrder(result)

    if (!formResult.action || !formResult.method) {
      this.orderCanceled()
      return
    }

    this.createAndSubmitDynamicForm(formResult)
  }

  private createAndSubmitDynamicForm(formResult: PaymentForm) {
    const form = document.createElement('form')
    form.setAttribute("method", formResult.method)
    form.setAttribute("action", formResult.action)
    form.style.display = 'none'

    for (const [name, val] of Object.entries(formResult.params)) {
      const input = document.createElement('input')
      input.setAttribute('name', name)
      input.setAttribute('value', val)
      form.appendChild(input)
    }

    document.body.append(form)
    form.submit()
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/styles/common'

.product
  display flex
  padding-top 15px
  flex-flow wrap column
  align-items center

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
        font-size 1.3rem
        font-family: AcromBold, sans-serif
        color alpha(gray, 60%)

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

      &__preview
        img
          transition filter .2s ease-in-out

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

  .disabled &__overview-content__preview
    img
      -webkit-filter grayscale(1) opacity(.5)
      filter grayscale(1) opacity(.5)

  .disabled &__buy-button__button
    cursor default

  .disabled &__buy-button__button:before
    background-color #313131
    box-shadow 0 -4px rgba(0, 0, 0, 0.35) inset, 0 4px rgba(255, 255, 255, 0.25) inset, -4px 0 rgba(255, 255, 255, 0.25) inset, 4px 0 rgba(0, 0, 0, 0.35) inset


  &:not(.disabled) &__overview-title:after,
  &:not(.disabled) &__overview-content__description:after
    height 100%

  &:not(.disabled) &__overview-content__benefits:after,
  &:not(.disabled) &__overview-content__advantages:after
    width 100%

  /** Description styles */

  &-low:not(.disabled) &__overview-content__advantages:after,
  &-low:not(.disabled) &__overview-content__benefits:after
    background-image linearGradient(light-primary, light-secondary)

  &-medium:not(.disabled) &__overview-content__advantages:after,
  &-medium:not(.disabled) &__overview-content__benefits:after
    background-image radialGradient(medium-secondary, medium-primary)

  &-high:not(.disabled) &__overview-content__advantages:after,
  &-high:not(.disabled) &__overview-content__benefits:after
    background-image radialGradient(high-secondary, high-primary)

  /** Advantages & Benefits styles */

  &-low:not(.disabled) &__overview-content__description:after
    background-image radialGradient(light-secondary, light-primary)

  &-medium:not(.disabled) &__overview-content__description:after
    background-image linearGradient(medium-primary, medium-secondary)

  &-high:not(.disabled) &__overview-content__description:after
    background-image linearGradient(high-primary, high-secondary)

  .disabled &__overview-title
    text-shadow none

  /** Title styles */

  &-low:not(.disabled) &__overview-title:after
    background-image linearGradient(light-primary, light-secondary)
    text-shadow 1px 0 20px alpha(light-primary, .3)

  &-low:not(.disabled) &__price-amount
    background-image radialGradient(darken(light-primary, 15%), darken(light-secondary, 7%))
    text-shadow 0 0 7px alpha(light-primary, .4)

  &-medium:not(.disabled) &__overview-title:after
    background-image linearGradient(medium-primary, medium-secondary)
    text-shadow 1px 0 20px alpha(medium-primary, .3)

  &-medium:not(.disabled) &__price-amount
    background-image radialGradient(darken(medium-primary, 15%), darken(medium-secondary, 10%))
    text-shadow 0 0 7px alpha(medium-primary, .4)

  &-high:not(.disabled) &__overview-title:after
    background-image linearGradient(high-primary, high-secondary, to right, 0%, 25%)
    text-shadow 1px 0 20px alpha(high-primary, .3)

  &-high:not(.disabled) &__price-amount
    background-image radialGradient(darken(high-primary, 15%), darken(high-secondary, 10%))
    text-shadow 0 0 7px alpha(high-primary, .4)

  &-low:not(.disabled) &__buy-button__button:before
    background-color #2db3cb
    box-shadow 0 -4px #006375 inset, 0 4px #2be1fb inset, -4px 0 #02f1fd inset, 4px 0 #087f9a inset

  &-medium:not(.disabled) &__buy-button__button:before
    background-color #f39a17
    box-shadow 0 -4px #bf6611 inset, 0 4px #ffc500 inset, -4px 0 #fac531 inset, 4px 0 #b7690c inset

  &-high:not(.disabled) &__buy-button__button:before
    background-color #b03030
    box-shadow 0 -4px rgb(108 0 0 / 50%) inset, 0 4px rgb(253 31 31 / 99%) inset, -4px 0 rgb(253 31 31 / 50%) inset, 4px 0 rgb(108 0 0 / 50%) inset


  > div
    display flex
    width 50%

  &__fields,
  &__overview-content
    padding 30px 50px 50px
    text-align left
    margin 25px 0


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

    &-amount
      background-image radialGradient(darkgray, gray)
      text-shadow 0 0 7px alpha(gray, .4)
      font-family AcromBold, sans-serif
      -webkit-text-fill-color transparent
      -webkit-background-clip text


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

  &__buy-button
    margin-bottom -30px
    overflow hidden
    width 100%

    &__button
      transition opacity .3s
      min-height 3rem
      width 100%

      &:hover
        opacity .8

@media screen and (max-width: 1366px)
  .product > div
    width 60%

@media screen and (max-width: 1280px)
  .product > div
    width 70%

@media screen and (max-width: 1024px)
  .product > div
    width 90%
</style>