<template>
  <div>
    <EmptyProducts/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EmptyProducts from '@/components/EmptyProducts'

@Component({components: {EmptyProducts}})
export default class extends Vue {
}
</script>

<style scoped>

</style>