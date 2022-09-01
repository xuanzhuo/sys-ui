import Left from '@/sys-two-column-layout/demo/Left';
import React from 'react';

import { SysTable, SysTableColumnType, SysTwoColumnLayout } from 'sys-ui';
import { createData } from './data';

const columns: SysTableColumnType[] = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: 50,
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: '25%',
    },
    {
        title: '性别',
        dataIndex: 'sex',
        width: '75%',
    },
];
const data = createData(10);
function Resizable() {
    return (
        <div style={{ height: 300 }}>
            <SysTwoColumnLayout draggable>
                {{
                    left: <SysTable dataSource={data} columns={columns} resizable={false} />,
                    right: <SysTable dataSource={data} columns={columns} />,
                }}
            </SysTwoColumnLayout>
        </div>
    );
}

export default Resizable;
