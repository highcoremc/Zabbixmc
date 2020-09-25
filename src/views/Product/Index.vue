<template>
  <div class="product">
    <img src="~@/assets/images/privileges/major.png" alt="">
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
    background #fdfdff
    border-radius 8px
    box-shadow 3px 4px 40px #eaeaf7
    padding 50px
</style>