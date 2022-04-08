import React from 'react';
import { SysTwoColumnLayout, SysToolbar } from 'sys-ui';

function Scroll() {
    return (
        <div style={{ height: 100 }}>
            <SysTwoColumnLayout draggable>
                {{
                    left: (
                        <SysToolbar>
                            一般放置按钮 一般放置按钮 一般放置按钮 
                            一般放置按钮 一般放置按钮 一般放置按钮
                            一般放置按钮 一般放置按钮 一般放置按钮
                        </SysToolbar>
                    ),
                    right: 'rihgt',
                }}
            </SysTwoColumnLayout>
        </div>
    );
}

export default Scroll;
