import React, { useEffect, useReducer} from 'react';
import { useHistory, withRouter} from 'react-router-dom';
import {getNewsList, getNewsTypes} from "../../api/getData";
import './Home.scss';
import { List , Tabs } from 'antd';
const { TabPane } = Tabs;
interface listItem {
    title: string,
    imgList: null | string,
    source: string,
    newsId: string,
    digest?: string,
    postTime: string
}
interface typeItem {
    typeId: number,
    typeName: string
}
const NewsList = () => {
    const initialState = {
        list: [],
        types: [],
        typeId: 0,
    };
    function myReducer(state, action) {
        switch(action.type) {
            case 'changeList':
                return {
                    ...state,
                    list: action.list
                }
            case 'changeTypes':
                return {
                    ...state,
                    types: action.types
                }
            case 'changeTypeId':
                return {
                    ...state,
                    typeId: action.typeId
                }
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(myReducer, initialState);
    const getNews = (async (typeId:number) => {
        const result = await getNewsList({typeId: typeId,page: 1});
        dispatch({type: 'changeList', list: result.data})
    });
    useEffect(()=> {
        (async () => {
            const types = await getNewsTypes({});
            dispatch({type: 'changeTypes', types: types.data});
            dispatch({type: 'changeTypeId', typeId: types.data[0].typeId});
            await getNews(types.data[0].typeId);
        })();
    }, []);
    const history = useHistory();
    const handleChange = async (typeId) => {
        dispatch({type: 'changeTypeId', typeId: typeId});
        await getNews(typeId);
    }
    const goDetail = (newsId: string) => {
        history.push(`/home/detail/${newsId}`);
    }
    return (
        <div className="home">
            {
                state.types.length > 0 && <Tabs
                    defaultActiveKey={String(state.typeId)}
                    onChange={handleChange}>
                    {
                        state.types.map((type: typeItem) => {
                            return  <TabPane tab={type.typeName} key={type.typeId}>
                                {
                                    state.list && state.list.length > 0 &&  <List
                                        itemLayout="horizontal"
                                        dataSource={state.list}
                                        renderItem={(item: listItem) => (
                                            <List.Item onClick={() => goDetail(item.newsId)}>
                                                <div>{item.title}</div>
                                                <div className="post-time">
                                                    <span>{item.postTime}</span>
                                                    <span>{item.source}</span>
                                                </div>
                                            </List.Item>
                                        )}
                                    />
                                }
                            </TabPane>
                        })
                    }
                </Tabs>
            }
        </div>
    );
};

export default withRouter(NewsList);