import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?:boolean;
}

export enum RoteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RoteNames.LOGIN, component: Login,}
]

export const privateRoutes: IRoute[] = [
    {path: RoteNames.EVENT, component: Event,}
]