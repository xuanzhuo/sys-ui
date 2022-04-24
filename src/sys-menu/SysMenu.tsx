import React from 'react';
import { Menu } from 'antd';
import { SysMenuProp } from './interface';
// import SysMenuItem from './SysMenuItem';
// import SysMenuSub from './SysMenuSub';
let {Item,SubMenu} = Menu
function SysMenu({ children, ...rest }: SysMenuProp) {
    return <Menu {...rest}>{children}</Menu>;
}
SysMenu.Item = Item;
SysMenu.SubMenu = SubMenu;
export default SysMenu;
