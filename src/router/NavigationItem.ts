import { _RouteConfigBase, Component } from "vue-router/types/router";

export default interface NavigationItem extends _RouteConfigBase {
    title: string;
    component?: Component;
    icon?: string;
}