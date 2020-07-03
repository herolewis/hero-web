import React, { useState,useEffect } from 'react';
import {  NavLink,  HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { Layout , Row, Col } from 'antd';
import './App.scss';
import routes from "./router/router";
import { getSentence } from "./api/getData";
const { Header, Content, Footer } = Layout;

const Menu = () => {
    return (
            <Row>
                <Col span={8}></Col>
                <Col span={4} offset={12}>
                    <NavLink className="menu-link" activeClassName="active" activeStyle={{color: '#1DA57A'}} to='/home'>首页</NavLink>
                    <NavLink className="menu-link" activeClassName="active" activeStyle={{color: '#1DA57A'}} to='/help'>帮助</NavLink>
                </Col>
            </Row>
    )
}

const App = (props) => {
    const [sentence, setSentence] = useState<string>('');
    useEffect(()=> {
        (async () => {
            let result = await getSentence({});
            let word = result.data && result.data[0].content;
            setSentence(word)
        })()
    },[])
    return (
        <div className="root">
            <Layout className="lan-layout">
                <HashRouter>
                        <Header className="lan-header">
                            <Menu></Menu>
                        </Header>
                        <Content className="lan-content">
                            {renderRoutes(routes)}
                        </Content>
                        <Footer className="lan-footer">
                            {sentence}
                        </Footer>
                </HashRouter>
            </Layout>
        </div>
    )
}
export default App;