/**
 * 按钮
 * @author dhy 2022-04-28
 */
import React from "react";
// import SysDropDown from './SysDropdown'
import {SysButtonProps} from './interface'
// import {SysIcon} from 'sys-ui'
import  SysIcon  from "../sys-icon";
import './style/index.less'
function SysButton({ title, icon, className, disabled, onClick, children }:SysButtonProps) {
    return (
        <button
            title={title}
            className={`sys-btn ${className || ''} ${
                disabled ? 'sys-btn-disabled' : ''
            }`}
            disabled={disabled || false}
            onClick={onClick}
        >
            {icon && <SysIcon name={icon} />}
            {typeof children === 'string' ? (
                <span className="sys-btn-text">{children}</span>
            ) : (
                children
            )}
        </button>
    );
}
// SysButton.Dropdown = SysDropDown
export default  SysButton