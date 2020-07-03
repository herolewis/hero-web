import React, { useState, useEffect} from 'react';
import { withRouter} from 'react-router-dom';
import {getNewsDetail} from "../../api/getData";
import { Empty } from 'antd';
import './Home.scss';
const NewsDetail = (props: {
    match: {
        params: {
            id: string
        }
    }
}) => {
    const [detail, setDetail] = useState<{
        content: string,
        cover: string,
        title: string
    }>({
        content: '',
        cover: '',
        title: ''
    });
    useEffect(()=> {
        (async () => {
            getListDetail(props.match.params.id);
        })();
    }, [props.match.params.id]);
    const getListDetail = (newsId: string) => {
        getNewsDetail({
            newsId: newsId
        }).then(res => {
            if(res.data) {
                setDetail(res.data);
            }
        })
    }
    return (
        <div className="detail">
            {
                detail.content ?  <div className="article-intro">
                    <h2>{detail.title}</h2>
                    <article  dangerouslySetInnerHTML={{__html: detail.content}}></article>
                </div>: <Empty description="暂无数据"/>
            }
        </div>
    );
}

export default withRouter(NewsDetail);