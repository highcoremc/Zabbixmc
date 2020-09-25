<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({})
export default class extends Vue {
}
</script>

<style lang="stylus" scoped>
  .card
    box-shadow 3px 4px 40px #eaeaf7
    background-repeat no-repeat
    background-position center
    background #fdfdff
    border-radius 4px
    min-height 250px
    margin 10px 15px
    min-width 250px
    padding 15px
</style>