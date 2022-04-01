import React from 'react';
import { SysTwoRowLayout } from 'sys-ui';

import Top from './Top';
import Bottom from './Bottom';
function Basic() {
    return (
        <div style={{ height: 300 }}>
            <SysTwoRowLayout defaultHeight={100}>
                {{
                    top: <Top/>,
                    bottom: <Bottom/>,
                }}
            </SysTwoRowLayout>
        </div>
    );
}

export default Basic;
