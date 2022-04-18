import React from 'react'
import { Button } from 'antd';
import {SysModal} from 'sys-ui'
function Maximizable() {
    function onClick(){
        SysModal.show({
            title:'标题',
            content:'内容',
            maximizable:true,
        })
    }
    return (
        <Button onClick={onClick}>可最大化的弹出框</Button>
    );
}

export default Maximizable