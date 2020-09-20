<template>
  <div class="title-block">
    <div class="title">
      <div class="title__background">{{ title }}</div>
      <div class="title__subtitle">{{ subtitle }}</div>
      <div class="title__content">{{ content }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop() private title!: string;
  @Prop() private content!: string;
  @Prop() private subtitle!: null|string;
}
</script>

<style lang="stylus" scoped>

.title
  &-block
    height 170px
    display flex
    justify-content center

  &__subtitle
    font-family AcromExtraBold, sans-serif
    text-transform uppercase
    color black
    font-size 1.48rem
    max-width 700px
    padding 0 15%
    margin-top -90px
    position relative
    text-align center

  &__content
    padding 0 15%
    margin-top 30px
    text-align center
    font-size 1.1rem

  &__background
    font-family ProximaNovaBlack, sans-serif
    text-transform uppercase
    font-size 8rem
    color #ebebf9
    //margin-top 5rem
    //margin-left 1rem
    position relative
    -moz-user-select none
    -khtml-user-select none
    -webkit-user-select none
    -ms-user-select none
    user-select none
    padding-left 35px
    z-index -1

    &::before
      background-image url('~@/assets/images/title_grid_title.png')
      background-repeat no-repeat
      content ''
      position absolute
      width 159px
      height 158px
      top -3px
      left 12px
</style>