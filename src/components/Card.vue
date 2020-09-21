<template>
  <div class="card">
    <div class="card__title">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop() public title!: string;
}
</script>

<style lang="stylus" scoped>
  @import "~@/styles/common.styl"

  .card
    background #eeeef9
    background-image linear-gradient(to right bottom, #eeeef9, #f5f5fd)
    background-repeat no-repeat
    background-position center
    min-height 250px
    margin 10px 15px
    min-width 250px
    transition all .2s
    border-radius 4px

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