import React from 'react';

interface Base {
    /**
     * @description 按钮悬浮文字
     * @default
     */
    title?: string;
    /**
     * @description 按钮图标（同 SysIcon 的 name 属性）-必填
     * @default -
     */
    icon?: string;
    /**
     * @description 按钮禁用
     * @default false
     */
    disabled?: boolean;
}

export interface SysButtonProps extends Base {
    /**
     * @description 按钮 className
     * @default
     */
    className?: string;
    /**
     * @description 按钮点击事件
     * @default
     */
    onClick?: <T>(e:T) => void;
    children?: React.ReactNode;
}

export interface SysDropdownProps extends Base {
    text?: string;
    /**
     * @description 选项点击触发  {key,keypath,event} = e
     */
    onItemClick?: <T>(e:T) => void;
    children?: Object[];
}
