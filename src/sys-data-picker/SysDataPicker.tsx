/**
 * 日期选择框
 * @author dhy 2022-04-27
 */
import React from 'react';
import { DatePicker } from 'antd';
import { DataPickerProps } from './interface';
import SysRangePicker from './SysRangePicker';
function SysDataPicker({ ...rest }: DataPickerProps) {
    return <DatePicker {...rest}></DatePicker>;
}
SysDataPicker.RangePicker = SysRangePicker;
export default SysDataPicker;
