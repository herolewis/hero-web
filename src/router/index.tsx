import React from 'react';
import routes from './routes'
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {RouteItem} from "./routes";

const RouterConf = () => {
    return (
        <Router>
            <Switch>
                {
                    routes.map((route: RouteItem, index: number) => {
                        return <Route path={route.path}
                                      exact={route.exact}
                                      render={props => {
                                          // @ts-ignore
                                          return <route.component {...props} routes={route.routes}/>
                                      }}
                                      key={index}>
                        </Route>
                    })
                }
            </Switch>
        </Router>
    )
}
export default RouterConf;