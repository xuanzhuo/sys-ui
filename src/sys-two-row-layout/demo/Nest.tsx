import React from 'react';
import { SysTwoRowLayout } from 'sys-ui';

import Top from './Top';
import Bottom from './Bottom';
function Nest() {
    return (
        <div style={{ height: 500 }}>
            <SysTwoRowLayout draggable closable bottomMinHeight={300}>
                {{
                    top: <Top />,
                    bottom: (
                        <SysTwoRowLayout draggable closable defaultHeight={100}>
                            {{
                                top: <Top />,
                                bottom: <Bottom />,
                            }}
                        </SysTwoRowLayout>
                    )
                }}
            </SysTwoRowLayout>
        </div>
    );
}

export default Nest;
