import React from 'react';
import { DatePicker } from 'antd';
import { RangePickerProps } from './interface';
let { RangePicker } = DatePicker;

function SysRangePicker({ ...rest }: RangePickerProps) {
    return <RangePicker {...rest}></RangePicker>;
}
export default SysRangePicker;
