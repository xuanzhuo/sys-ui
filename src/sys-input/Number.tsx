import React, { useState } from 'react';
import { Input, InputProps } from 'antd';

export interface SysInputNumberProps extends Omit<InputProps, 'onChange'> {
    value?: number;
    onChange?: (value: number | string | undefined) => void;
    isFloat?: boolean;
    decimalLength?: number;
}

const SysInputNumber = ({
    value,
    onChange,
    isFloat,
    onBlur,
    decimalLength = 6,
    ...rest
}: SysInputNumberProps) => {
    const [number, setNumber] = useState<string>('');
    const onNumberChange: InputProps['onChange'] = (e) => {
        const newInput = e.target.value;
        const pattern = isFloat ? /^-?(\d{1}|[1-9]+\d+)?(\.\d*)?$/ : /^-?(\d{1}|[1-9]+\d+)?$/;
        if (pattern.test(newInput)) {
            setNumber(newInput);
            onChange?.(!isFloat ? Number(newInput) || undefined : newInput);
        } else {
            setNumber(number);
        }
    };

    const changeFloat = (newInput: string) => {
        if (!newInput) return;
        let newNumber = Number(newInput);
        let newNumberString = newInput;
        const decimalLen = newInput.split('.')[1];
        if (decimalLen && decimalLen.length >= decimalLength) {
            newNumberString = newNumber.toFixed(decimalLength);
        } else if (!decimalLen || decimalLen === '0') {
            newNumberString = newNumber.toFixed(1);
        }
        setNumber(newNumberString);
        onChange?.(newNumberString);
    };
    const onBlurHandle: InputProps['onBlur'] = (e) => {
        isFloat && changeFloat(e.target.value);
        onBlur?.(e);
    };
    return (
        <Input
            type="text"
            value={number}
            onChange={onNumberChange}
            onBlur={onBlurHandle}
            {...rest}
        />
    );
};
export default SysInputNumber;
