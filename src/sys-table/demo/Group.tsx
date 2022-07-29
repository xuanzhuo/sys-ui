import React, { useState } from 'react';
import { Space, Button } from 'antd';
import { SysTable, SysTableProps, SysTableColumnType } from 'sys-ui';
import data from './data';

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

function Basic() {
    const [group, setGroup] = useState<SysTableProps['group']>({ groupFiled: 'name' });
    function groupByAge() {
        setGroup({
            groupFiled: 'age',
            groupTitleFormat: (title, number) => {
                return `当前按年龄分组 ${title}-（${number}）`;
            },
        });
    }
    function groupByName() {
        setGroup({ groupFiled: 'name' });
    }
    return (
        <div style={{ height: 300 }}>
            <Space>
                <Button onClick={groupByAge}>按年龄分组</Button>
                <Button onClick={groupByName}>按姓名分组</Button>
            </Space>
            <SysTable dataSource={data} columns={columns} group={group} />
        </div>
    );
}

export default Basic;
