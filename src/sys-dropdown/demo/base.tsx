import { SysMenu, SysDropdown  } from 'sys-ui';
import React from 'react';
let { Item, SubMenu, ItemGroup } = SysMenu;

const onClick = (props: Object) => {
    console.log('props', props);
};
const menu = () => (
    <SysMenu onClick={onClick}>
        <ItemGroup title="Item Group">
            <Item key="1Option">
                <span> 1st menu item</span>
            </Item>
        </ItemGroup>
        <Item key="2Option">
            <span>2st menu item</span>
        </Item>
        <SubMenu key="3Option" title={'3st menu item'}>
            <Item key="11Option">
                <span>Option 11</span>
            </Item>
        </SubMenu>
    </SysMenu>
);

export default () => (
    <>
        <SysDropdown overlay={menu} arrow>
            <a onClick={(e) => e.preventDefault()}>
                <div>Hover me</div>
            </a>
        </SysDropdown>
    </>
);
