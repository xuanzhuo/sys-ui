import React from 'react';
import { SysSpin } from 'sys-ui';

function Basic() {
    return (
        <SysSpin tip="努力加载中...">
            <div style={{ height: 100, border: '1px solid blue' }}>内容。。。</div>
        </SysSpin>
    );
}

export default Basic;
