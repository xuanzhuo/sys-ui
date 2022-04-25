import { SysCheckbox } from 'sys-ui';
import React from 'react';
function onChange<T>(e: T): void {
    console.log(`checked `);
    console.log(e)
}

export default () => <SysCheckbox onChange={onChange}>复选框</SysCheckbox>;
