/*
 * Copyright (c) 2021 Loper.me <bizrenay@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
