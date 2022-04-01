import React from 'react';
import { SysTwoRowLayout } from 'sys-ui';

import Top from './Top'
import Bottom from './Bottom'
function Draggable() {
    return (
        <div style={{height:500}}>
            <SysTwoRowLayout draggable >
                {{
                    top: <Top/>,
                    bottom: <Bottom/>,
                }}
            </SysTwoRowLayout>
        </div>
    );
}

export default Draggable;
