import React, { Component } from 'react';
import classnames  from 'classnames';
import './Home.css';
const NAV_CONTENT = ['首页','原创','转载','生活'];
class Home extends Component {
  state = {
    currentIndex: 0
  }
  onNavClick = (index:number) => {
      this.setState({
        currentIndex: index
      })
  }
  render() {
    return (
      <div className="layout source-layout">
          <div className="navbar">
              <ul className="navbar-nav">
                {
                  NAV_CONTENT.map((el,index)=> {
                    return (<li className={classnames({'nav-item': true, 'active': index === this.state.currentIndex})} key={index} onClick={()=> this.onNavClick(index)}>{el}</li>)
                  })
                }
              </ul>
          </div>
          <div className="main-area">
              <div className="source">
                  <div className="entry-list">
                    <ul>
                      
                    </ul>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Home;