import React from 'react';
import SysNumber from '../Number';

export default () => {
    return (
        <>
            <span>浮点数</span>
            <SysNumber isFloat></SysNumber>
            <br />
            <br />
            <span>整数</span>
            <SysNumber></SysNumber>
        </>
    );
};
