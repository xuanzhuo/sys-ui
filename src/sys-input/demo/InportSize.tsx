import {SysInput,SysIcon} from 'sys-ui';
import React from 'react';
// import {Input,InputProps} from 'antd'
export default () => (
    <>
        <SysInput size="large" placeholder="large size" style={{width:200}} prefix={<SysIcon name="shared" />} />
        <br />
        <br />
        <SysInput placeholder="default size" prefix={<SysIcon name="shared" />} />
        <br />
        <br />
        <SysInput size="small" placeholder="small size" prefix={<SysIcon name="shared" />} />
    </>
);
