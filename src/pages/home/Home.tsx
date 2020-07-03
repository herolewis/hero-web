import React from 'react';
import './Home.scss';
import {renderRoutes} from 'react-router-config';
import { withRouter, Redirect} from 'react-router-dom'
const Home = (props) => {
    return <div className="home">
        <Redirect to="/home/list"></Redirect>
        {renderRoutes(props.route.routes)}
    </div>
}
export default withRouter(Home);