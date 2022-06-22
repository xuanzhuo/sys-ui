import { Button } from 'antd';
import React, { useState } from 'react';
import {SysDrawer} from 'sys-ui';
const App: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                打开第一层
            </Button>
            <SysDrawer
                title="第一层"
                width={520}
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Button type="primary" onClick={showChildrenDrawer}>
                    打开第二层
                </Button>
                <SysDrawer
                    title="第二层"
                    width={320}
                    closable={false}
                    onClose={onChildrenDrawerClose}
                    visible={childrenDrawer}
                >
                    This is two-level drawer
                </SysDrawer>
            </SysDrawer>
        </>
    );
};

export default App;
