<template>
  <div class="subtitle">
    <div class="subtitle__background">
      {{ title }}
    </div>
    <div class="subtitle__content">
      {{ content }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop() private title!: string;
  @Prop() private content!: string;
}
</script>

<style lang="stylus" scoped>

.subtitle
  height 100px

  &__content
    font-family AcromExtraBold, sans-serif
    text-transform uppercase
    color black
    font-size 31px
    max-width 700px
    margin-left 75px
    margin-top -65px
    position relative

    &::after
      position absolute
      content ''
      left 0
      top 40px
      width 80px
      height 8px
      background rgb(46, 179, 30)
      background linear-gradient(120deg, rgba(46, 179, 30, 1) 32%, rgba(125, 218, 80, 1) 82%)

  &__background
    font-family ProximaNovaBlack, sans-serif
    text-transform uppercase
    font-size 6.01875rem
    color #ebebf9
    margin-top 5rem
    margin-left 1rem
    position relative
    -moz-user-select none
    -khtml-user-select none
    -webkit-user-select none
    -ms-user-select none
    user-select none
    padding-left 35px

    &::before
      background-image url('~@/assets/images/grid_subtitle.png')
      background-repeat no-repeat
      content ''
      position absolute
      width 165px
      height 87px
      top 0
      left 0
</style>