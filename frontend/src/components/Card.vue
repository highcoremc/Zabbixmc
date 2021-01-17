<template>
  <div class="simple-card">
    <slot />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({})
export default class extends Vue {
}
</script>

<style lang="stylus" scoped>
  .simple-card
    box-shadow 3px 4px 40px #eaeaf7
    font-family Acrom, sans-serif
    background #fdfdff
    border-radius 8px
    min-height 250px
    margin 10px 15px
    min-width 250px
    padding 15px
</style>