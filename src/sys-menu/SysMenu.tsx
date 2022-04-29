/**
 * 下拉菜单
 * @author dhy 2022-04-19
 */
import React from 'react';
import { Menu } from 'antd';
import { SysMenuProp } from './interface';
// import SysMenuItem from './SysMenuItem';
// import SysMenuSub from './SysMenuSub';
let {Item,SubMenu,ItemGroup} = Menu
function SysMenu({ children, ...rest }: SysMenuProp) {
    return <Menu {...rest}>{children}</Menu>;
}
SysMenu.Item = Item;
SysMenu.SubMenu = SubMenu;
SysMenu.ItemGroup = ItemGroup
export default SysMenu;
