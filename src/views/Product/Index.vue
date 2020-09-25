<template>
  <div class="product">
    <div class="product__content">
      <img src="~@/assets/images/privileges/major.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
}
</script>
<style lang="stylus" scoped>
  .product
    display flex
    justify-content center

    &__content
      width 50%
      background #fdfdff
      border-radius 8px
      box-shadow 3px 4px 40px #eaeaf7
      justify-content center
      display flex
      padding 50px
</style>