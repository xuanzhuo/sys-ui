/**
 * 日期选择框
 * @author dhy 2022-04-27
 */
import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import { SysDataPickerProps } from './interface';
import SysRangePicker from './SysRangePicker';
import moment, { Moment } from 'moment';
function SysDataPicker({ value, format, onChange, placeholder, ...rest }: SysDataPickerProps) {
    let [val, setVal] = useState<any>(value);
    let [newValue, setNewValue] = useState<Moment | null>();

    useEffect(() => {
        let newValue = getNewValue();
        setNewValue(newValue);
    }, [val]);

    function getNewValue() {
        // console.log('value', value);
        let newValue = val;
        let dateFormat = format as string;
        if (typeof val === 'string' && !!val) {
            newValue = moment(val, dateFormat);
        }
        return newValue;
    }

    let newplaceholder = placeholder;
    if (!placeholder) {
        newplaceholder = '';
    }
    function newOnChange(_: Moment | null, dataString: string) {
        setVal(dataString);
        onChange?.(dataString);
    }
    return (
        <DatePicker
            {...rest}
            placeholder={newplaceholder}
            value={newValue as Moment}
            onChange={newOnChange}
        ></DatePicker>
    );
}
SysDataPicker.RangePicker = SysRangePicker;
export default SysDataPicker;
