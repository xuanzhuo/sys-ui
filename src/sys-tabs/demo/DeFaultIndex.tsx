import React from 'react';
import { SysTabs } from 'sys-ui';

function DeFaultIndex() {
    return (
        <div style={{ height: 300 }}>
            <SysTabs defaultIndex={1} storageId="SysTabsId">
                <SysTabs.TabPane title="选项一">选项一</SysTabs.TabPane>
                <SysTabs.TabPane title="选项二">选项二</SysTabs.TabPane>
                <SysTabs.TabPane title="选项三">选项三</SysTabs.TabPane>
            </SysTabs>
        </div>
    );
}

export default DeFaultIndex;
