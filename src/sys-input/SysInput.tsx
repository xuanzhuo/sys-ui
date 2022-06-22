/**
 * 输入框
 * @author dhy 2022-04-22
 */
import { Input } from 'antd';
import React from 'react';
import SysInputProps from './input_interface';
import TextArea from './TextArea';
import SysPassword from './Password';
import SysNumber from './Number';
function SysInput({ ...rest }: SysInputProps) {
    return <Input {...rest} />;
}
SysInput.TextArea = TextArea;
SysInput.SysPassword = SysPassword;
SysInput.SysNumber = SysNumber;
export default SysInput;
