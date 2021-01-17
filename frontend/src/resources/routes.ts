import { RouteConfig } from "vue-router"
import routeList from './main/routes'

const routes: Array<RouteConfig> = [];

for (const item of routeList) {
    routes.push(item)
}

export default routes;