import Privileges from '@/views/Shop/Category/Privileges'
import Amount from '@/views/Shop/Category/Amount'
import Other from '@/views/Shop/Category/Other'
import Cases from '@/views/Shop/Category/Cases'

import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        name: 'category.privileges',
        path: '/shop/privileges',
        component: Privileges,
    },
    {
        name: 'category.cases',
        path: '/shop/cases',
        component: Cases,
    },
    {
        name: 'category.amount',
        path: '/shop/amount',
        component: Amount,
    },
    {
        name: 'category.other',
        path: '/shop/other',
        component: Other,
    },
];

export default routes;