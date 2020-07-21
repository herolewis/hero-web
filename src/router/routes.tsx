import React from 'react';
import App from '../App';
import Home from '../pages/home';
import Notes from "../pages/home/notes";
import List from '../pages/home/news/list';
import Detail from '../pages/home/news/detail';
import Help from '../pages/help';
export interface RouteItem {
    path: string,
    component?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined,
    exact?: boolean,
    redirect?: string,
    children?: Array<RouteItem>
}
// 登录页
const routes: Array<RouteItem> = [
    {
        path: "/help",
        component: Help,
        exact: true
    },
    {
        path: "/home",
        component: Home,
        children: [{
            path: "/home/list",
            component: List
        },{
            path: "/home/detail/:id",
            component: Detail
        },{
            path: '/home/notes',
            component: Notes
        }]
    },
    {
        path: '/',
        redirect: '/home/list'
    }
]
export default routes