import React from 'react';
import { SysTabs } from 'sys-ui';

function Basic() {
    return (
        <div style={{ height: 300 }}>
            <SysTabs>
                <SysTabs.TabPane title="选项一" >
                    选项一
                </SysTabs.TabPane>
                <SysTabs.TabPane title="选项二" >
                    选项二
                </SysTabs.TabPane>
                <SysTabs.TabPane title="选项三" >
                    选项三
                </SysTabs.TabPane>
            </SysTabs>
        </div>
    );
}

export default Basic;
