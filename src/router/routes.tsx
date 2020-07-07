import React from 'react';
import App from '../App';
import Home from '../pages/home';
import Notes from "../pages/home/notes";
import List from '../pages/home/news/list';
import Detail from '../pages/home/news/detail';
import Help from '../pages/help';
export interface RouteItem {
    path: string,
    component: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined,
    exact?: boolean,
    redirect?: string,
    routes: Array<RouteItem>
}
// 登录页
const routes: Array<RouteItem> = [
    {
        path: "/help",
        component: Help,
        exact: true,
        routes: []
    },
    {
        path: "/",
        component: App,
        routes: [{
            path: "/home",
            component: Home,
            redirect: "/home/list",
            routes: [{
                path: "/home/list",
                component: List,
                routes: [],
            },{
                path: "/home/detail/:id",
                component: Detail,
                routes: [],
            },{
                path: '/home/notes',
                component: Notes,
                routes: []
            }]
        }]
    }
]
export default routes