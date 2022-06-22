import { Button, Radio, Space } from 'antd';
import { SysDrawer } from 'sys-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState<any>('left');

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onChange = (e: any) => {
        setPlacement(e.target.value);
    };

    return (
        <>
            <Space>
                <Radio.Group value={placement} onChange={onChange}>
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </Radio.Group>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
            </Space>
            <SysDrawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={placement}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </SysDrawer>
        </>
    );
};

export default App;
