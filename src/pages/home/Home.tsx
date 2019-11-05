import React, { Component } from 'react';
import './Home.scss';
class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="earth"></div>
                <div className="earth-shadow"></div>
                <div className="ground-shadow"></div>
            </div>
        );
    }
}

export default Home;