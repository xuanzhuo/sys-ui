import React from 'react';
import { Menu } from 'antd';
let { Item } = Menu;
import { MenuItemType } from './type';
export default function SysMenuItem({ children, ...rest }: MenuItemType) {
    return <Item {...rest}>{children}</Item>;
}
