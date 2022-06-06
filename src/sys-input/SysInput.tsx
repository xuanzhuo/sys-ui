/**
 * 输入框
 * @author dhy 2022-04-22
 */
import { Input } from 'antd';
import React from 'react';
import SysInputProps from './input_interface';
import TextArea from './TextArea';
import SysPassword from './Password'
function SysInput({ ...rest }: SysInputProps) {
    return <Input {...rest} />;
}
SysInput.TextArea = TextArea;
SysInput.SysPassword = SysPassword;
export default SysInput;
