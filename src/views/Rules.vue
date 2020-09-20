<template>
  <div class="rules">
    <div class="row">
      <div class="col-md-12">
        <Title :title="'правила'" :subtitle="'для тех, кто их читает'" :content="'Незнание правил не освобождает от ответсвенности.'"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue'

@Component({
  components: {
    Title
  }
})
export default class extends Vue {
}
</script>
