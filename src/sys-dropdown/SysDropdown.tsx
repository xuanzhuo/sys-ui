/**
 * 下拉菜单
 * @author dhy 2022-04-21
 */
import React from 'react';
import { Dropdown } from 'antd';
import SysDropdownButton from './SysDropdownButton';
import SysDropDownProps from './interface'



function SysDropdown({ children, ...rest }: SysDropDownProps) {
    return <Dropdown {...rest}>{children}</Dropdown>;
}

SysDropdown.Button = SysDropdownButton;
export default SysDropdown;
