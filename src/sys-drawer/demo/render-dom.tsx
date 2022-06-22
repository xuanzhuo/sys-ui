import { Button } from 'antd';
import React, { useState } from 'react';
import SysDrawer from '../SysDrawer';
const App: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div
            style={{
                position: 'relative',
                height: 200,
                padding: 48,
                overflow: 'hidden',
                textAlign: 'center',
                background: '#fafafa',
                border: '1px solid #ebedf0',
                borderRadius: '2px',
            }}
        >
            Render in this
            <div style={{ marginTop: 16 }}>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
            </div>
            <SysDrawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                getContainer={false}
                style={{ position: 'absolute' }}
            >
                <p>Some contents...</p>
            </SysDrawer>
        </div>
    );
};

export default App;
