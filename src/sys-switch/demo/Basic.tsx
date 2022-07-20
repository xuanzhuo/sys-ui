import React from 'react';
import { SysSwitch } from 'sys-ui';

function Basic() {
    function onChange(checked: boolean) {
        console.log(`${checked ? '开启' : '关闭'}`);
    }
    return <SysSwitch onChange={onChange} />;
}

export default Basic;
