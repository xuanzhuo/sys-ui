import React from 'react';
import { SysInput } from 'sys-ui';

export default () => {
    return (
        <>
            <span>浮点数</span>
            <SysInput.SysNumber isFloat></SysInput.SysNumber>
            <br />
            <br />
            <span>整数</span>
            <SysInput.SysNumber></SysInput.SysNumber>
        </>
    );
};
