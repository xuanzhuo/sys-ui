import React from 'react';
import { Button } from 'antd';
import { SysModal } from 'sys-ui';
function Message() {
    function success() {
        SysModal.success('成功！');
    }
    function warning() {
        SysModal.warning('警告！');
    }
    function error() {
        SysModal.error('错误！');
    }
    function confirm() {
        SysModal.confirm('询问！');
    }
    return (
        <>
            <Button onClick={success}>成功</Button>
            <Button onClick={warning}>警告</Button>
            <Button onClick={error}>错误</Button>
            <Button onClick={confirm}>询问</Button>
        </>
    );
}

export default Message;
