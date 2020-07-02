import React, { useState,useEffect } from 'react';
import { Switch, Route , Redirect , useHistory} from 'react-router-dom';
import { Layout , Menu } from 'antd';
import './App.scss';
import Home from "../home/Home";
import Original from "../original/Original";
import Reprint from "../reprint/Reprint";
import Essay from "../essay/Essay";
import { getSentence } from "../../api/getData";
const { Header, Content, Footer } = Layout;

interface navItemInterface {
    name: string,
    path: string,
    key: string
}
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
);

const App = () => {
    const [current, setCurrent] = useState<string>('home');
    const [sentence, setSentence] = useState<string>('');
    const [navContent] = useState<Array<navItemInterface>>([
        {
            'name': '首页',
            'path': '/home',
            'key': 'home'
        },
        {
            'name': '原创',
            'path': '/original',
            'key': 'original'
        },
        {
            'name': '转载',
            'path': '/reprint',
            'key': 'reprint'
        },
        {
            'name': '随笔',
            'path': '/essay',
            'key': 'essay'
        }
    ]);
    const history = useHistory();
    const HandleClick = (e: any) => {
        setCurrent(e.key);
        let currentNav = navContent.find((item) => item.key === e.key);
        //非空断言操作符
        let path = currentNav!.path;
        history.push(path);
    }
    useEffect(()=> {
        (async () => {
            let result = await getSentence({});
            let word = result.data && result.data[0].content;
            setSentence(word)
        })()
    },[])
    return (
        <div className="root">
            <Layout>
                <Header className="lan-header">
                    <Menu onClick={HandleClick} selectedKeys={[current]} mode="horizontal">
                        {
                            navContent.map((el:navItemInterface,index: number) => {
                                return <Menu.Item key={el.key}>{el.name}</Menu.Item>
                            })
                        }
                    </Menu>
                </Header>
                <Content className="lan-content">
                    <Main></Main>
                </Content>
                <Footer className="lan-footer">
                    {sentence}
                </Footer>
            </Layout>
        </div>
    )
}

export default App;