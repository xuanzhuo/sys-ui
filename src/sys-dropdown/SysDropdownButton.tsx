import DropdownButton, { DropdownButtonProps } from 'antd/lib/dropdown/dropdown-button';
import React from 'react';
import SysDropDownProps from './interface';
interface ButtonProps extends SysDropDownProps {
    children?: React.ReactNode;
}

function SysDropdownButton({ ...rest }: ButtonProps) {
    return <DropdownButton {...rest}></DropdownButton>;
}
export default SysDropdownButton;
