import React from 'react';
import { SysTable,SysTableColumnType} from 'sys-ui';
import data from './data';

const columns: SysTableColumnType[] = [
    {
        title: '姓名',
        dataIndex: 'name',
        width:'50%'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width:'50%'
    },
];

function RowNumberCol() {
    return (
        <div style={{ height: 300 }}>
            <SysTable dataSource={data} columns={columns} rowNumber/>
        </div>
    );
}

export default RowNumberCol;
