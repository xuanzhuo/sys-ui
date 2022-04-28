import React from 'react';
import { SysTreeTable, SysTreeTableColumn } from 'sys-ui';
import { createData } from './data';

const columns: SysTreeTableColumn[] = [
    {
        title: '姓名',
        dataIndex: 'name',
        minWidth:300
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
];

const data = createData(3, 4);

function Resizable() {
    return (
        <div style={{ height: 300 }}>
            <SysTreeTable dataSource={data} columns={columns} resizable />
        </div>
    );
}

export default Resizable;
