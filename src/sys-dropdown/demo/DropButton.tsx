import { SysDropdown, SysMenu, SysIcon } from 'sys-ui';
import React from 'react';
let { Item } = SysMenu;
function handleButtonClick<T>(e: T) {
    console.log('click left button', e);
}

function handleMenuClick<T>(e: T) {
    console.log('click', e);
}
const menu = (
    <SysMenu onClick={handleMenuClick}>
        <Item key="1Option">
            <span>Option 1</span>
        </Item>
        <Item key="2Option">
            <span>Option 2</span>
        </Item>
    </SysMenu>
);

export default () => (
    <>
        <SysDropdown.Button
            onClick={handleButtonClick}
            overlay={menu}
            icon={<SysIcon name="add"></SysIcon>}
        >
            Dropdown
        </SysDropdown.Button>
        <SysDropdown.Button
            overlay={menu}
            style={{marginLeft:10}}
            buttonsRender={([leftButton, rightButton]) => [
                <div> {leftButton} </div>,
                <div>{rightButton}</div>,
            ]}
        >
            自定义
        </SysDropdown.Button>
    </>
);
