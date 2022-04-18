import React from 'react';
import { Button } from 'antd';
import { SysModal } from 'sys-ui';
function Basic() {
    function onClick() {
        SysModal.show({
            title: '标题',
            content: '内容',
        });
    }
    return (
        <Button onClick={onClick}>弹框</Button>
    );
}

export default Basic;
