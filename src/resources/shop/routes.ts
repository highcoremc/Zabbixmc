import Privileges from '@/views/Shop/Category/Privileges.vue'
import Amount from '@/views/Shop/Category/Amount.vue'
import Other from '@/views/Shop/Category/Other.vue'
import Cases from '@/views/Shop/Category/Cases.vue'

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