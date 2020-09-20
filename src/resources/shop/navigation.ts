import NavigationItem from "@/router/NavigationItem";

const items: Array<NavigationItem> = [
    {
        name: 'category.privileges',
        title: 'Привилегии',
        meta: {
            key: 'privileges'
        }
    },
    {
        name: 'category.cases',
        title: 'Кейсы',
        meta: {
            key: 'cases'
        }
    },
    {
        name: 'category.amount',
        title: 'Валюта',
        meta: {
            key: 'amount'
        }
    },
    {
        name: 'category.other',
        title: 'Разное',
        meta: {
            key: 'other'
        }
    },
]

export default items;