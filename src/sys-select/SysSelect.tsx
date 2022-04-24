import React from 'react';
import { Select } from 'antd';
import { SysSelectProps } from './interface';
let {Option,OptGroup} = Select
function SysSelect({ children, ...rest }: SysSelectProps) {
    return <Select {...rest}>{children}</Select>;
}
SysSelect.Option = Option;
SysSelect.OptGroup = OptGroup
export default SysSelect;
