import React from 'react';

import { SysTable, SysTableColumnType } from 'sys-ui';
import { createData } from './data';

const columns: SysTableColumnType[] = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: '20%',
        ellipsis:true
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: '20%',
        minWidth: 200,
        ellipsis:true
    },
    {
        title: '性别',
        dataIndex: 'sex',
        width: '60%',
        ellipsis:true
    },
];
const data = createData(10);
function Resizable() {
    return (
        <div style={{ height: 300 }}>
            <SysTable dataSource={data} columns={columns} resizable />
        </div>
    );
}

export default Resizable;
