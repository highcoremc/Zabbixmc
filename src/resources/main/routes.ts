import { RouteConfig } from "vue-router/types/router";
import shopRoutes from '../shop/routes'
import Home from "@/views/Home.vue";
import Shop from "@/views/Shop/Index.vue";
import News from "@/views/News.vue";
import Rules from "@/views/Rules.vue";
import Product from "@/views/Product/Index.vue";

const routes: Array<RouteConfig> = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'shop',
        path: '/shop',
        component: Shop,
        children: shopRoutes,
    },
    {
        name: 'product.overview',
        path: '/shop/product',
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
];

export default routes;