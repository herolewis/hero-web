import React, { useState, useEffect} from 'react';
import { withRouter} from 'react-router-dom';
import {getNewsDetail} from "../../../api/getData";
const Detail = (props:any) => {
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
            const { id } = props.match.params;
            getListDetail(id);
        })();
    }, []);
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
            <h2>{detail.title}</h2>
            <div  dangerouslySetInnerHTML={{__html: detail.content}}>

            </div>
        </div>
    );
}

export default withRouter(Detail);