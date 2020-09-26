<template>
  <Card class="product-card">
    <div class="product-card__title">
      {{ title }}
    </div>
    <slot></slot>
  </Card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import Card from './Card.vue'

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @Prop() public title!: string;
}
</script>

<style lang="stylus" scoped>
.product-card > img
  -webkit-touch-callout none
  -webkit-user-select none
  -khtml-user-select none
  -moz-user-select none
  -ms-user-select none
  user-select none
</style>

<style lang="stylus" scoped>
.product-card
  background-image linear-gradient(to right bottom, #e0e0ef, #f5f5fd)
  box-shadow 10px 10px 30px #e4e4f2
  border-radius 3px 15px 0 15px
  transition blur .3s, ease-out .25s
  padding 0

  &:hover
    cursor pointer
    filter blur(1px)
    transform matrix(1, 0, 0, 1, 0, -5)

  &:hover img
    transform scale(1.1)

  > img
    z-index 0
    pointer-events none
    transition all .2s
    position relative
    text-align center

  &__title
    padding 30px
    font-family AcromBold, sans-serif
    font-weight 700
    color #0f0f0f
    width 100%
</style>