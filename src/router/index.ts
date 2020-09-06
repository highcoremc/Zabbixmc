import VueRouter, { RouterMode } from 'vue-router'
import routes from '@/resources/routes'
import Vue from 'vue'

Vue.use(VueRouter)

const mode: RouterMode = 'history'
export default new VueRouter({
    mode,
    routes
})
