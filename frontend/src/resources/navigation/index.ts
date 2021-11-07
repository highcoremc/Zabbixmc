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

import { RouteNavigationItem } from "@/router/RouteNavigationItem"
import NavigationItem from "@/router/NavigationItem"
import { RouteConfig } from "vue-router"

import _ from 'lodash'
export * from "./types"

export function getRouteNavList(key: string): Array<RouteNavigationItem> {
    const routes: Array<RouteNavigationItem> = []

    const navigation = require(`../${key}/navigation.ts`)
    const routeList = require(`../${key}/routes.ts`)

    if (navigation.length === 0) {
        throw new Error('Navigation list is empty.')
    }

    navigation.default.forEach((route: RouteConfig) => {
        const closure = (item: NavigationItem) =>
            item.name === route.name
        const navItem = routeList.default.filter(closure).pop()

        routes.push(_.merge(navItem, route))
    })

    return routes
}
