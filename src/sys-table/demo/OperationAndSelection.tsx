import React from 'react';
import SysTable, { SysTableColumnType } from '../SysTable';

import data, { DataType } from './data';

const columns: SysTableColumnType[]= [
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
];

function OperationAndSelection() {
    return (
        <div style={{ height: 300 }}>
            <SysTable dataSource={data} columns={columns} />
        </div>
    );
}

export default OperationAndSelection;
