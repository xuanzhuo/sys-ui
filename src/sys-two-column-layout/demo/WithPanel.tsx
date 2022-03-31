import React from 'react';
import { SysTwoColumnLayout } from 'sys-ui';

import Left from './Left';
import Right from './Right';
function WithPanel() {
    return (
        <div style={{ height: 100 }}>
            <SysTwoColumnLayout >
                {{
                    left:<SysTwoColumnLayout.LeftPanel><Left /></SysTwoColumnLayout.LeftPanel> ,
                    right:<SysTwoColumnLayout.RightPanel><Right /></SysTwoColumnLayout.RightPanel>,
                }}
            </SysTwoColumnLayout>
        </div>
    );
}

export default WithPanel;
