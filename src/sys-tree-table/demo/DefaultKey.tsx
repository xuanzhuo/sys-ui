import React, {useState } from 'react';
import { Button } from 'antd';
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

const data = createData(2, 4);

function DefaultKeyComp() {
    const [selectedKeys, setSelectedKeys] = useState<string>('2-1');
    function resolve(){
        setSelectedKeys('2-2-1-1')
    }
    
    return (
        <div style={{ height: 300 }}>
            <div>
                <Button onClick={resolve}>定位</Button>
            </div>
            <SysTreeTable
                styleWrap={{ height: 'calc(100% - 32px)' }}
                dataSource={data}
                columns={columns}
                selectedKeys={selectedKeys}
            />
        </div>
    );
}

export default DefaultKeyComp;
