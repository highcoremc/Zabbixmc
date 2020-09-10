import { RouteConfig } from "vue-router"

import Agreement from '@/views/Agreement.vue'
import Rules from '@/views/Rules.vue'
import News from '@/views/News.vue'
import Shop from '@/views/Shop.vue'
import Home from "@/views/Home.vue"

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Главная',
        component: Home,
        meta: {
            icon: 'far fa-home fa-lg',
        },
    },
    {
        path: '/shop',
        name: 'Магазин',
        component: Shop,
        meta: {
            icon: 'far fa-shopping-cart fa-lg',
        },
    },
    {
        path: '/news',
        name: 'Новости',
        component: News,
        meta: {
            icon: 'far fa-newspaper fa-lg',
        },
    },
    {
        path: '/rules',
        name: 'Правила',
        component: Rules,
        meta: {
            icon: 'far fa-minus-circle fa-lg',
        },
    },
]

export default routes;