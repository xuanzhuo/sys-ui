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
    let [newValue, setNewValue] = useState<Moment | null>();
    useEffect(() => {
        if (!picker) {
            if (typeof val === 'string') {
                let formatString: string = format ? (format as string) : 'YYYY-MM-DD';
                let newValue = moment(val, formatString);
                setNewValue(newValue);
            }
        }
    }, []);

    let newplaceholder = placeholder;
    if (!placeholder) {
        newplaceholder = '';
    }
    function newOnChange(_: Moment | null, dataString: string) {
        // console.log('Moment', _);
        setVal(dataString);
        setNewValue(_);
        onChange?.(dataString);
    }
    return (
        <DatePicker
            {...rest}
            placeholder={newplaceholder}
            value={newValue as Moment}
            onChange={newOnChange}
            picker={picker}
        ></DatePicker>
    );
}
SysDataPicker.RangePicker = SysRangePicker;
export default SysDataPicker;
