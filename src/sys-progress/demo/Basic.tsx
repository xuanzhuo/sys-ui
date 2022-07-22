import React from 'react';
import { SysProgress } from 'sys-ui';

function Basic() {
    return (
        <>
            <SysProgress percent={30} />
            <SysProgress percent={100} />
        </>
    );
}

export default Basic;
