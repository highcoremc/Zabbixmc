<template>
  <div>
    <empty-products></empty-products>
  </div>
</template>

<script lang="ts">
import EmptyProducts from "@/components/EmptyProducts.vue"
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    EmptyProducts
  }
})
export default class extends Vue {
}
</script>

<style scoped>

</style>