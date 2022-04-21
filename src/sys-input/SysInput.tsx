import { Input } from 'antd';
import React from 'react';
import SysInputProps from './input_interface';
import TextArea from './TextArea';
function SysInput({ ...rest }: SysInputProps) {
    return <Input {...rest} />;
}
SysInput.TextArea = TextArea;
export default SysInput;
