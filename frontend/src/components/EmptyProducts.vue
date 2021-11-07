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
  <div>
    <div class="empty">
      в данном разделе нет товаров..
      <i class="fas fa-alien-monster" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  public name = 'EmptyProducts'
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
