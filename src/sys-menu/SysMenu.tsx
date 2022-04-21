import React from 'react';
import { Menu } from 'antd';
import { SysMenuProp } from './interface';
import SysMenuItem from './SysMenuItem';
import SysMenuSub from './SysMenuSub';
function SysMenu({ children, ...rest }: SysMenuProp) {
    return <Menu {...rest}>{children}</Menu>;
}
SysMenu.Item = SysMenuItem;
SysMenu.SubMenu = SysMenuSub;
export default SysMenu;
