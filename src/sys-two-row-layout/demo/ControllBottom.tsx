import React, { useState } from 'react';
import { SysTwoRowLayout } from 'sys-ui';
import { Space, Button } from 'antd';

import Top from './Top';
import Bottom from './Bottom';
function WithPanel() {
    const [isHideBottom, setIsHideBottom] = useState(false);
    return (
        <>
            <Space style={{ padding: 5 }}>
                <Button onClick={() => setIsHideBottom(true)}>隐藏</Button>
                <Button onClick={() => setIsHideBottom(false)}>显示</Button>
            </Space>
            <div style={{ height: 500 }}>
                <SysTwoRowLayout
                    isHideBottom={isHideBottom}
                    closable
                    onHideBottomChange={(isHide: boolean) =>
                        setIsHideBottom(isHide)
                    }
                >
                    {{
                        top: <Top />,
                        bottom: <Bottom />,
                    }}
                </SysTwoRowLayout>
            </div>
        </>
    );
}

export default WithPanel;
