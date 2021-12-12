/*
 * Copyright (c) 2021 Loper.me <bizrenay@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import HttpClientPlugin from "@/plugin/HttpClientPlugin"
import globalMixins from './mixin'
import router from './router'
import App from './App.vue'

import Vue from 'vue'
import './styles/mojang-bootstrap.scss'

import 'animate.css/animate.min.css'
import './styles/shared/reset.styl'
import './styles/shared/fonts.styl'
import './styles/common.styl'

Vue.config.productionTip = false
Vue.use(HttpClientPlugin.instance())
Vue.mixin(globalMixins)

console.log(process.env)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
