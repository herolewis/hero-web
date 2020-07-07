import React from 'react';
import { Empty } from 'antd';
import './index.scss';
const Notes = () => {
    return (
        <div className="notes">
            <Empty description="暂无数据"></Empty>
        </div>
    );
}
export default Notes;