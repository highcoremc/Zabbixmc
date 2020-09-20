import { RouteConfig } from "vue-router"
import navItems from './navigation'

const routes: Array<RouteConfig> = [];

for (let item of navItems) {
    routes.push({
        path: item.path,
        name: item.name,
        component: item.component
    })
}

export default routes;