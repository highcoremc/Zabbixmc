import NavigationItem from "@/router/NavigationItem";

import Home from "@/views/Home.vue";
import Shop from "@/views/Shop/Index.vue";
import News from "@/views/News.vue";
import Rules from "@/views/Rules.vue";

const items: Array<NavigationItem> = [
    {
        path: '/',
        title: 'Главная',
        name: 'home',
        component: Home,
        icon: 'far fa-home fa-lg',
    },
    {
        path: '/shop',
        title: 'Магазин',
        name: 'shop',
        component: Shop,
        icon: 'far fa-shopping-cart fa-lg',
    },
    {
        path: '/news',
        title: 'Новости',
        name: 'news',
        component: News,
        icon: 'far fa-newspaper fa-lg',
    },
    {
        path: '/rules',
        title: 'Правила',
        name: 'rules',
        component: Rules,
        icon: 'far fa-minus-circle fa-lg',
    },
]

export default items;