import React, { useState } from 'react';
import { Input, InputProps } from 'antd';

interface SysInputNumberProps
    extends Omit<InputProps, 'type' | 'min' | 'max' | 'minLength' | 'maxLength'> {
    isFloat?: boolean;
    value?: string;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
}

export default function SysNumber({
    isFloat = false,
    value,
    onChange,
    onBlur,
    ...rest
}: SysInputNumberProps) {
    let [val, setVal] = useState<string>(value as string);
    function change(e: any) {
        let input_value = e.target.value;
        let reg = isFloat ? /^-?(\d{1}|[1-9]+\d+)?(\.\d*)?$/ : /^-?(\d{1}|[1-9]+\d+)?$/;
        if (input_value === '' || reg.test(input_value)) {
            onChange?.(input_value);
            setVal(input_value);
        } else {
            setVal('');
        }
    }
    function changeFloat(e: any) {
        let f_value = e.target.value;
        if (f_value === '') {
            return;
        }
        let newNumber: string | number = Number(f_value);
        let d_array = f_value.split('.')[1];
        if (d_array && d_array.length > 6) {
            newNumber = newNumber.toFixed(6);
        } else if (!d_array || d_array.length == 0) {
            newNumber = newNumber.toFixed(1);
        }
        setVal(newNumber as string);
        onChange?.(newNumber);
    }
    function blur(e: any) {
        isFloat && changeFloat(e);
        onBlur?.(e);
    }
    return <Input type="text" value={val} onChange={change} onBlur={blur}></Input>;
}
