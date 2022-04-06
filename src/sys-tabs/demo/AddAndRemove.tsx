import React, { useEffect, useState } from 'react';
import { Space,Button } from 'antd';
import { SysTabs } from 'sys-ui';

function Item({index}:{index:number}) {
    useEffect(() => {
        console.log(`挂载选项${index}`);
    }, []);
    return <div>选项{index}的内容。。。。。。</div>;
}

function AddAndRemove() {
    const [tabPanes, setTabPanes] = useState(() => {
        return new Array(5).fill('');
    });
    function onAdd(){
        setTabPanes([...tabPanes,''])
    }
    function onClosed(key:number){
        setTabPanes(tabPanes.filter((item,index)=>index !== key))
    }
    return (
        <div style={{ height: 300 }}>
            <Space style={{padding:5}}>
                <Button onClick={onAdd}>新增</Button>
            </Space>
            <SysTabs tabClickRefresh={true} tabClosable onClosed={onClosed}>
                {tabPanes.map((item,index) => {
                    return (
                        <SysTabs.TabPane title={`选项${index}`} key={index}>
                            选项{index}
                            <Item index={index}/>
                        </SysTabs.TabPane>
                    );
                })}
            </SysTabs>
        </div>
    );
}

export default AddAndRemove;
