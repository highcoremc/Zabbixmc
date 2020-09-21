<template>
  <div>
    <div class="empty">
      в данном разделе нет товаров..
      <i class="fas fa-alien-monster"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  public name: string = 'EmptyProducts'
}
</script>

<style lang="stylus" scoped>
  .empty
    font-size 1.2rem
    font-family AcromBold
    color #d5d5e8
    display flex
    flex-wrap wrap
    align-items center
    flex-direction column
    margin-top 3.5rem

    i
      margin-top 15px
      margin-bottom 30px
      color #e5e5f5
      font-size 18rem
</style>