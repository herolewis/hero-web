import React from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import { Menu , Layout } from 'antd';
import RouterComp from "../../router/routerComp";
import './index.scss';
const { Content, Sider } = Layout;
const Home = (props) => {
    const history = useHistory();
    const MenuList = () => {
        return [
            {
                key: '1',
                name: '新闻资讯',
                path: '/home/list'
            },
            {
                key: '2',
                name: '我的笔记',
                path: '/home/notes'
            }
        ]
    }
    const handleClick = (res) => {
        console.log(res,'result')
        let path = MenuList().find(item => item.key === res.key)!.path;
        history.push(path);
    }
    return (
        <Layout className="lan-home">
            <Sider width={200} className="lan-sider" theme="light">
                <Menu
                    onClick={handleClick}
                    defaultSelectedKeys={['1']}
                >
                    {
                        MenuList().map(item => {
                            return (
                                <Menu.Item key={item.key}>
                                    {item.name}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="lan-content"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: '#FFF'
                    }}
                >
                  <RouterComp routes = {props.routes} />
                </Content>
            </Layout>
        </Layout>
    )
};

export default withRouter(Home);