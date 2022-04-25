import {SysCheckbox} from 'sys-ui';
import React from 'react';
function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
}

export default () => <SysCheckbox onChange={onChange}>复选框</SysCheckbox>;
