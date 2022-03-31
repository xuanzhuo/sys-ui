import React from 'react';
import { SysTwoColumnLayout } from 'sys-ui';

import Left from './Left'
import Right from './Right'
function Draggable() {
    return (
        <div style={{height:100}}>
            <SysTwoColumnLayout draggable >
                {{
                    left: <Left/>,
                    right: <Right/>,
                }}
            </SysTwoColumnLayout>
        </div>
    );
}

export default Draggable;
