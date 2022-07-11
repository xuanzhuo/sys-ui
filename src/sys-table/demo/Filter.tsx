import React, { useEffect, useState } from 'react';
import { SysTable,SysTableColumnType} from 'sys-ui';
import data from './data';

const columns: SysTableColumnType[] = [
    {
        title: '姓名',
        dataIndex: 'name',
        width:'20%',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width:'30%',
    },
    {
        title: 'a',
        dataIndex: 'a',
        width:'20%'
    },
    {
        title: 'b',
        dataIndex: 'b',
        width:'30%'
    },
];

function Basic() {
    const [col,setCol] = useState<SysTableColumnType[]>();
    useEffect(()=>{
        setCol(columns)
    },[])
    return (
        <div style={{ height: 300 }}>
            <SysTable dataSource={data} columns={col} filter={true}/>
        </div>
    );
}

export default Basic;
