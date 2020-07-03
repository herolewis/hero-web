import React from 'react';
import Home from "../pages/home/Home";
import Help from "../pages/help/Help";
import NewsDetail from "../pages/home/NewsDetail";
import NewsList from "../pages/home/NewsList";
function NotFound() {
    return <h2>404</h2>
}
const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        component: Home,
        routes: [
            {
                path: "/home/list",
                exact: true,
                component: NewsList
            },
            {
                path: "/home/detail/:id",
                exact: true,
                component: NewsDetail
            }
        ]
    },
    {
        path: '/help',
        exact: true,
        component: Help,
        routes: []
    },
    {
        path: '*',
        component: NotFound,
        routes: []
    }
];
export default routes;