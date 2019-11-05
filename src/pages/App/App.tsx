import React, { PureComponent } from 'react';
import { NavLink , Switch, Route , Redirect} from 'react-router-dom';
import './App.scss';
import Home from "../home/Home";
import asyncComponent from '../../utils/asyncComponent';
const Original = asyncComponent(() => import("../original/Original"));
const Reprint = asyncComponent(() => import("../reprint/Reprint"));
const Essay = asyncComponent(() => import("../essay/Essay"));


const NAV_CONTENT = [
    {
        'name': '首页',
        'path': '/home'
    },
    {
        'name': '原创',
        'path': '/original'
    },
    {
        'name': '转载',
        'path': '/reprint'
    },
    {
        'name': '随笔',
        'path': '/essay'
    }
];
// 高亮的样式，表示我们在哪个导航下
const selectedStyle = {
    color: 'blue'
}

const Header = () => (
    <header>
        {
            NAV_CONTENT.map((el,index)=> {
                return  <NavLink to={el.path} activeStyle = {selectedStyle} key={index}>{el.name}</NavLink>
            })
        }
    </header>
);


const Main = () => (
    <main className="content">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/original' component={Original}/>
            <Route path='/reprint' component={Reprint}/>
            <Route path='/essay' component={Essay}/>
            <Redirect to='/'/>
        </Switch>
    </main>
)

class App extends PureComponent {

    render() {
        return (
            <div className="root">
                <Header></Header>
                <Main></Main>
            </div>
        );
    }
}

export default App;