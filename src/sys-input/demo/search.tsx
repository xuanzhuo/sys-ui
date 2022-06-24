import { SysInput } from 'sys-ui';
import React from 'react';
let { Search } = SysInput;
export default () => {
    return (
        <>
            <Search allowClear></Search>
        </>
    );
};
