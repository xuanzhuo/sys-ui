import React from 'react';
import { SysTreeTable, SysTreeTableColumn } from 'sys-ui';
import { createData } from './data';

const columns: SysTreeTableColumn[] = [
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
];
const data = createData(2, 3);

function RowNumberCol() {
    return (
        <div style={{ height: 300 }}>
            <SysTreeTable dataSource={data} columns={columns} rowNumber />
        </div>
    );
}

export default RowNumberCol;
