import { RouteConfig } from "vue-router/types/router";
import shopRoutes from '../shop/routes'
import Home from "@/views/Home.vue";
import Shop from "@/views/Shop/Index.vue";
import News from "@/views/News.vue";
import Rules from "@/views/Rules.vue";

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop,
        children: shopRoutes,
    },
    {
        path: '/news',
        name: 'news',
        component: News,
    },
    {
        path: '/rules',
        name: 'rules',
        component: Rules,
    },
];

export default routes;