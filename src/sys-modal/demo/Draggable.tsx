import React from 'react';
import { Button } from 'antd';
import {SysModal} from 'sys-ui'
function App() {
    function onClick(){
        SysModal.show({
            title:'标题',
            content:'内容',
            draggable:true,
        })
    }
    return (
        <Button onClick={onClick}>可拖动的弹出框</Button>
    );
}
export default App;
