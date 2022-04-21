import React from 'react';
import { Menu } from 'antd';
let { SubMenu } = Menu;
import { SubMenuType } from './type';
export default function SysSubMenu({ children, ...rest }: SubMenuType) {
    return <SubMenu {...rest}>{children}</SubMenu>;
}
