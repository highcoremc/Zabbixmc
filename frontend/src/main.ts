import HttpClientPlugin from "@/plugin/HttpClientPlugin"
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

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
