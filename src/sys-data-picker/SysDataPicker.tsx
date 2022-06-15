/**
 * 日期选择框
 * @author dhy 2022-04-27
 */
import React from 'react';
import { DatePicker } from 'antd';
import { SysDataPickerProps } from './interface';
import SysRangePicker from './SysRangePicker';
import moment, { Moment } from 'moment';
function SysDataPicker({ value, format, placeholder, ...rest }: SysDataPickerProps) {
    let newValue = value;
    let dateFormat = format as string;
    if (typeof value === 'string' && !!value) {
        newValue = moment(value, dateFormat);
    }
    let newplaceholder = placeholder;
    if (!placeholder) {
        newplaceholder = '';
    }
    return (
        <DatePicker {...rest} placeholder={newplaceholder} value={newValue as Moment}></DatePicker>
    );
}
SysDataPicker.RangePicker = SysRangePicker;
export default SysDataPicker;
