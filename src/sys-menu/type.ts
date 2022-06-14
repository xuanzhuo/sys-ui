import React from 'react';
import { MenuItemProps, SubMenuProps } from 'antd';
type theme = 'light' | 'dark';
export interface MenuItemType extends MenuItemProps {}
export interface SubMenuType extends SubMenuProps {
    /**
     * @description 是否禁用
     * @default -
     */
    disabled?: boolean;
    /**
     * @description 菜单图标
     * @default -
     */
    icon?: React.ReactNode;
    /**
     * @description 唯一标志
     * @default -
     */
    key?: string;
    /**
     * @description 菜单项标题
     * @default -
     */
    label?: React.ReactNode;
    /**
     * @description 子菜单样式，mode="inline" 时无效
     * @default -
     */
    popupClassName?: string;
    /**
     * @description 	子菜单偏移量，mode="inline" 时无效
     * @default -
     */
    popupOffset?: [number, number];
    /**
     * @description 	点击子菜单标题
     * @default -
     * @type ({ key, domEvent }) => void
     */
    onTitleClick?: SubMenuProps['onTitleClick'];
    /**
     * @description 	设置子菜单的主题，默认从 Menu 上继承
     * @default light
     */
    theme?: theme;
    /**
     *  @description 	设置title
     * @default -
     */
    title: React.ReactNode;
    children: React.ReactNode;
}
