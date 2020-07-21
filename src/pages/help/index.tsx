import React from 'react';
import { Empty } from 'antd';

const Index = (props) => {
    console.log(props.routes,'props.routes');
    return (
        <div className="help">
            <Empty description="暂无数据"></Empty>
        </div>
    );
}
export default Index;