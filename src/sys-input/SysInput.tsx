/**
 * 输入框
 * @author dhy 2022-04-22
 */
import { Input } from 'antd';
import React from 'react';
import SysInputProps from './input_interface';
import TextArea from './TextArea';
function SysInput({ ...rest }: SysInputProps) {
    return <Input {...rest} />;
}
SysInput.TextArea = TextArea;
export default SysInput;
