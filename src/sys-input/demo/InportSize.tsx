import SysInput from '../SysInput';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
export default () => (
    <>
        <SysInput size="large" placeholder="large size" prefix={<UserOutlined />} />
        <br />
        <br />
        <SysInput placeholder="default size" prefix={<UserOutlined />} />
        <br />
        <br />
        <SysInput size="small" placeholder="small size" prefix={<UserOutlined />} />
    </>
);
