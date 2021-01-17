import { RouteConfig } from "vue-router/types/router"
import Product from "@/views/Product/Index.vue"
import Shop from "@/views/Shop/Index.vue"
import Oferta from '@/views/Oferta.vue'
import Rules from "@/views/Rules.vue"
import Home from "@/views/Home.vue"
import News from "@/views/News.vue"

const routes: Array<RouteConfig> = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'shop',
        path: '/shop/:category?',
        component: Shop,
    },
    {
        name: 'product.overview',
        path: '/shop/product/:productId',
        component: Product,
    },
    {
        name: 'news',
        path: '/news',
        component: News,
    },
    {
        path: '/rules',
        name: 'rules',
        component: Rules,
    },
    {
        path: '/oferta',
        name: 'oferta',
        component: Oferta,
    },
]

export default routes