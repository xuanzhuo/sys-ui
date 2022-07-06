import React from 'react';
import { SysTable, SysTableColumnType } from 'sys-ui';
import { createData } from './data';

const columns: SysTableColumnType[] = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: '50%',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: '50%',
    },
];
const data = createData(10);
function Basic() {
    function onSortChange(field: string, order: string) {
        //请求后端进行排序处理
        console.log(field, order);
    }
    return (
        <div style={{ height: 300 }}>
            <SysTable
                dataSource={data}
                columns={columns}
                sort="remote"
                onSortChange={onSortChange}
            />
        </div>
    );
}

export default Basic;
