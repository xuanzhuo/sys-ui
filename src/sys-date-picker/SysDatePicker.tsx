/**
 * 日期选择器
 * @author sizz 2022-07-27
 */
import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import type { PickerDateProps } from 'antd/es/date-picker/generatePicker';
import zhCn from 'antd/es/date-picker/locale/zh_CN';
import moment, { Moment } from 'moment';
import './style/index.less';

export interface SysPickerDateProps extends Omit<PickerDateProps<Moment>, 'value' | 'onChange'> {
    /**
     * @description 日期
     * @default -
     */
    value?: string;
    /**
     * @description 设置日期格式
     * @default YYYY-MM-DD
     */
    format?: string;
    /**
     * @description 时间发生变化的回调
     * @default -
     */
    onChange?: (value: string) => void;
    /**
     * @description 禁用
     * @default false
     */
    disabled?:PickerDateProps<Moment>['disabled']
    /**
     * @description 输入框提示文字
     * @default 请选择日期
     */
    placeholder?:PickerDateProps<Moment>['placeholder']
    /**
     * @description 是否显示清除按钮
     * @default true
     */
    allowClear?:PickerDateProps<Moment>['allowClear']
    /**
     * @description 自动获取焦点
     * @default false
     */
    autoFocus?:PickerDateProps<Moment>['autoFocus']
    /**
     * @description 是否开启时间选择
     * @default false
     * @type boolean
     */
    showTime?:PickerDateProps<Moment>['showTime']
    /**
     * @description 是否展示“今天”按钮
     * @default true
     */
    showToday?:PickerDateProps<Moment>['showToday']
}

function SysDatePicker({ value, format, onChange, ...rest }: SysPickerDateProps) {
    const [val, setVal] = useState<string>();
    useEffect(() => {
        if (value) {
            setVal(value);
        }
    }, [value]);
    const onChangeHanlde: PickerDateProps<Moment>['onChange'] = (value, dateString) => {
        setVal(dateString);
        onChange?.(dateString);
    };

    return (
        <DatePicker
            className="sys-date-picker"
            value={val ? moment(val, format) : null}
            format={format}
            onChange={onChangeHanlde}
            locale={zhCn}
            {...rest}
        />
    );
}

export default SysDatePicker;
