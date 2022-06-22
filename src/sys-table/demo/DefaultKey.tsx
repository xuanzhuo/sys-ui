import React, {useState } from 'react';
import { Button } from 'antd';
import { SysTable,SysTableColumnType} from 'sys-ui';
import {createData, DataType } from './data';

const data:DataType[] = createData(10);
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

function DefaultKeyComp() {
    const [dataSource, setDataSource] = useState<DataType[]>(data);
    const [defaultKeys, setDefaultKeys] = useState<any>(undefined);
    const [selected, setSelected] = useState<any>({keys:[],rows:[]});
    
    function add() {
        const newStu: DataType = {
            id: dataSource.length,
            name: 'name' + dataSource.length,
            age: 18,
        };
        setDataSource([...dataSource, newStu]);
        setDefaultKeys(dataSource.length);
    }
    function edit() {
        const ndataSource = dataSource.map(item=>{
            if(item.id === selected.keys[0]){
                item.name = 'edit' + item.name
            }
            return item
        });
        setDataSource([...ndataSource]);
    }
    function del() {
        const ndataSource = dataSource.filter(item=>item.id !== selected.keys[0]);
        setDataSource(ndataSource);
        setDefaultKeys(undefined);
    }
    function onSelectChange(keys:number[],rows:DataType[]){
        setSelected({keys,rows})
    }
    return (
        <div style={{ height: 300 }}>
            <div>
                <Button onClick={add}>新增</Button>
                <Button onClick={edit}>编辑</Button>
                <Button onClick={del}>删除</Button>
            </div>
            <SysTable
                styleWrap={{ height: 'calc(100% - 32px)' }}
                dataSource={dataSource}
                columns={columns}
                defaultKeys={defaultKeys}
                onSelectChange={onSelectChange}
            />
        </div>
    );
}

export default DefaultKeyComp;
