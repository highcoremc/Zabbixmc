<template>
  <div class="news">
    <div class="row">
      <div class="col-md-12">
        <Title :title="'новости'" class="animate__animated animate__fadeInDown"
               :subtitle="'сервера из первых уст'"
               :content="'Узнавай обо-всех новостях из первых уст из верифицированного источника'"/>
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

<style lang="stylus">
</style>
