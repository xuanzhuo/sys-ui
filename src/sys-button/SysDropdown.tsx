import React from 'react';
// import { SysMenu, SysDropdown,SysIcon } from 'sys-ui';
import  SysMenu  from '../sys-menu';
import SysDropdown from '../sys-dropdown'
import SysIcon from '../sys-icon'
import { SysDropdownProps } from './interface';
import SysButton from './Sysbutton';
export default function SysDropDown({
    title,
    text,
    icon,
    disabled,
    onItemClick,
    children,
}: SysDropdownProps) {
    const menu = (
        <SysMenu onClick={onItemClick}>
            {children &&
                children.map((item: any, index: number) => {
                    return (
                        <SysMenu.Item key={index} disabled={item.disabled || false}>
                            {' '}
                            {item.title}
                        </SysMenu.Item>
                    );
                })}
        </SysMenu>
    );
    return (
        <SysDropdown
            overlay={menu}
            trigger={['click']}
            disabled={disabled}
            overlayClassName="sys-button-dropdown"
        >
            <SysButton {...{ title, text, icon }}>
                <span style={{ position: 'absolute', fontSize: 10 }}>
                    <SysIcon name="arrow-bottom" />
                </span>
                {text && (
                    <span className="sys-btn-text" style={{ marginLeft: 12 }}>
                        {text}
                    </span>
                )}
            </SysButton>
        </SysDropdown>
    );
}
