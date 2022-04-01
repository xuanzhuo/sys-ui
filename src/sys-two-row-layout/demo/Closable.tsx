import React from 'react';
import { SysTwoRowLayout } from 'sys-ui';

import Top from './Top';
import Bottom from './Bottom';
function Closable() {
    return (
        <div style={{ height: 500 }}>
            <SysTwoRowLayout closable>
                {{
                    top: <Top />,
                    bottom: <Bottom />,
                }}
            </SysTwoRowLayout>
        </div>
    );
}

export default Closable;
