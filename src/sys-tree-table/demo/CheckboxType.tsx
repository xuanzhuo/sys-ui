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

const data = createData(3, 4);

function CheckboxType() {
    function onSelectChange(keys: any[], rows: any[], moreInfo: any) {
        console.log(keys, moreInfo);
    }
    return (
        <div style={{ height: 300 }}>
            <SysTreeTable
                dataSource={data}
                columns={columns}
                onSelectChange={onSelectChange}
                checkboxType="linkage"
            />
        </div>
    );
}

export default CheckboxType;
