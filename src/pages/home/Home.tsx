import React, { Component } from 'react';
import { Button } from 'antd';
// import classnames  from 'classnames';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="home">
          <Button type="primary">首页</Button>
      </div>
    );
  }
}

export default Home;