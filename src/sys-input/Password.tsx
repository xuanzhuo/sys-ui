import React from 'react';
import { Input, InputProps } from 'antd';

interface PasswordProps extends InputProps {
    /**
     * @description 自定义切换按钮	
     * @type (visible) => ReactNode
     * @default (visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)
     */
    iconRender?: (visible: any) => React.ReactNode;
    /**
     * @description 是否显示切换按钮
     * @type boolean
     */
    visibilityToggle?: boolean;
}
function SysPassword({...rest}:PasswordProps) {
    return <Input.Password {...rest}></Input.Password>
}
export default SysPassword
