import React from 'react';
import { SysTreeTable, SysTreeTableColumn} from 'sys-ui';
import { createData } from './data';

const columns: SysTreeTableColumn[] = [
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

const data = createData(2, 3);

function Basic() {
    return (
        <div style={{ height: 300 }}>
            <SysTreeTable dataSource={data} columns={columns}/>
        </div>
    );
}

export default Basic;
