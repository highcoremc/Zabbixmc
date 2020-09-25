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
@import "~@/styles/common.styl"

.product-card
  background-image linear-gradient(to right bottom, #eeeef9, #f5f5fd)
  transition all .2s
  background #eeeef9
  padding 0

  &:hover
    cursor pointer
    filter blur(1px)

  &:hover img
    transform scale(1.1)

  img
    z-index 0
    pointer-events none
    transition all .2s
    position relative
    text-align center
    @extend .disable-highlight

  &__title
    padding 30px
    font-family AcromBold, sans-serif
    font-weight 700
    color #0f0f0f
    width 100%
</style>