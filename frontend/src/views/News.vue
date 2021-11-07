<!--
  - Copyright (c) 2021 Loper.me <bizrenay@gmail.com>
  -
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -
  -     http://www.apache.org/licenses/LICENSE-2.0
  -
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -->

<template>
  <div class="news">
    <div class="row">
      <div class="col-md-12">
        <Title
          :title="'новости'"
          class="animate__animated animate__fadeInDown"
          :subtitle="'сервера из первых уст'"
          :content="'Узнавай обо-всех новостях из первых уст из верифицированного источника'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
