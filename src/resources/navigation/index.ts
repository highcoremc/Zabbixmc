import { RouteNavigationItem } from "@/router/RouteNavigationItem";
import NavigationItem from "@/router/NavigationItem";

import _ from 'lodash'
import { RouteConfig } from "vue-router";

export * from "./types"

export function getRouteNavList(key: string): Array<RouteNavigationItem> {
    const routes: Array<RouteNavigationItem> = [];

    const navigation = require(`../${key}/navigation.ts`)
    const routeList = require(`../${key}/routes.ts`)

    if (navigation.length === 0) {
        throw new Error('Navigation list is empty.');
    }

    routeList.default.forEach((route: RouteConfig) => {
        let closure = (item: NavigationItem) =>
            item.name === route.name
        const navItem = navigation.default.filter(closure).pop()

        routes.push(_.merge(navItem, route))
    })

    return routes
}