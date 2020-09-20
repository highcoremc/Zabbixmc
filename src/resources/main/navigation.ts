import NavigationItem from "@/router/NavigationItem";

const items: Array<NavigationItem> = [
    {
        name: 'home',
        title: 'Главная',
        icon: 'far fa-home fa-lg',
    },
    {
        title: 'Магазин',
        name: 'shop',
        icon: 'far fa-shopping-cart fa-lg',
    },
    {
        title: 'Новости',
        name: 'news',
        icon: 'far fa-newspaper fa-lg',
    },
    {
        title: 'Правила',
        name: 'rules',
        icon: 'far fa-minus-circle fa-lg',
    },
]

export default items;