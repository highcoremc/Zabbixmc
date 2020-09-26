import router from './router'
import App from './App.vue'
import Vue from 'vue'

import './styles/mojang-bootstrap.scss'
import 'animate.css/animate.css'
import './styles/common.styl'

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
