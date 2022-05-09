/**
 * 选择器
 * @author dhy 2022-04-21
 */
import React from 'react';
import { Select } from 'antd';
import { SysSelectProps } from './interface';
let {Option,OptGroup} = Select
function SysSelect({ children, ...rest }: SysSelectProps<any>) {
    return <Select {...rest}>{children}</Select>;
}
SysSelect.Option = Option;
SysSelect.OptGroup = OptGroup
export default SysSelect;
