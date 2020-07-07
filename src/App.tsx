import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
const App = (props) => {
    return (
        <Switch>
            {
                props.routes.map((item, index) => {
                    return <Route path={item.path}
                                  exact={item.exact}
                                  render={props => {
                                      return <item.component {...props} routes={item.routes}/>
                                  }}
                                  key={index}>
                    </Route>
                })
            }
        </Switch>
    )
}

export default App;