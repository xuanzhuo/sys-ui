/**
 * 日期选择框
 * @author dhy 2022-04-27
 */
import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import { SysDataPickerProps } from './interface';
import SysRangePicker from './SysRangePicker';
import moment, { Moment } from 'moment';
function SysDataPicker({
    value,
    format,
    onChange,
    picker,
    placeholder,
    ...rest
}: SysDataPickerProps) {
    let [val, setVal] = useState<any>(value);
    // console.log('value', value);
    useEffect(() => {
        // console.log('value', value);
        newOnChange(null, value ? value : '');
    }, [value]);

    function newOnChange(_: Moment | null, dataString: string) {
        setVal(dataString);
        onChange?.(dataString);
    }
    return (
        <DatePicker
            {...rest}
            placeholder={placeholder ? placeholder : ''}
            value={val ? moment(val, (format ? format : 'YYYY-MM-DD') as string) : null}
            onChange={newOnChange}
            picker={picker}
        ></DatePicker>
    );
}
SysDataPicker.RangePicker = SysRangePicker;
export default SysDataPicker;
