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
