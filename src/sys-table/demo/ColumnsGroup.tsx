import React from 'react';
import { SysTable,SysTableColumnType} from 'sys-ui';
import data from './data';

const columns: SysTableColumnType[] = [
    {
        title: '姓名',
        children: [
            {
                title: '姓名1',
                dataIndex: 'name',
                width: '25%',
            },
            {
                title: '姓名2',
                dataIndex: 'name2',
                width: '25%',
            },
        ],
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: '50%',
    },
];

function Basic() {
    return (
        <div style={{ height: 300 }}>
            <SysTable dataSource={data} columns={columns} bordered/>
        </div>
    );
}

export default Basic;
