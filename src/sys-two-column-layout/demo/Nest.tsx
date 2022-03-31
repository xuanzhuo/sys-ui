import React from 'react';
import { SysTwoColumnLayout } from 'sys-ui';

import Left from './Left';
import Right from './Right';
function Nest() {
    return (
        <div style={{ height: 100 }}>
            <SysTwoColumnLayout draggable closable>
                {{
                    left: <Left />,
                    right: (
                        <SysTwoColumnLayout draggable closable>
                            {{
                                left: <Left />,
                                right: <Right />,
                            }}
                        </SysTwoColumnLayout>
                    ),
                }}
            </SysTwoColumnLayout>
        </div>
    );
}

export default Nest;
