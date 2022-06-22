import React, { useEffect, useState } from 'react';
import { SysTable, SysTableColumnType } from 'sys-ui';
import { createData, DataType } from './data';

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

function Pagination() {
    const [data, setData] = useState<DataType[]>([]);
    const [total, setTotal] = useState(0);
    const [pageInfo, setPageInfo] = useState({current:1,size:20});
    useEffect(() => {
        //后台接口取数据
        setTimeout(()=>{
            setData(createData(10));
            setTotal(100);
        },100)
    }, [pageInfo]);

    function onPageChange(current: number, size: number) {
        setPageInfo({ current, size });
    }
    return (
        <div style={{ height: 300 }}>
            <SysTable
                dataSource={data}
                columns={columns}
                pagination={{ total: total }}
                onPageChange={onPageChange}
            />
        </div>
    );
}

export default Pagination;
