import React from 'react';
import { MenuProps } from 'antd';
// export { ItemType, MenuItemType, SubMenuType } from './type'

// type triggerSubMenuAction = "hover" | "click"
// type mode = "vertical" | "horizontal" | "inline"
export interface ClickInfo {
    key:  React.Key;
    keyPath: React.Key[] | string[];
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement>;
}
export interface SelectInfo extends ClickInfo {
    selectedKeys?: React.Key[];
}
export interface SysMenuProp {
    /**
     * @description 初始展开的 SubMenu 菜单项 key 数组
     * @default -
     */
    defaultOpenKeys?: string[];
    /**
     * @description 初始选中的菜单项 key 数组
     * @default -
     */
    defaultSelectedKeys?: string[];
    /**
     * @description 是否在子菜单展示之前就渲染进 DOM
     * @default false
     */

    forceSubMenuRender?: boolean;
    /**
     * @description 自定义展开图标
     * @default -
     */
    expandIcon?: MenuProps['expandIcon'];
    /**
     * @description inline 时菜单是否收起状态
     * @default false
     */

    inlineCollapsed?: boolean;
    /**
     * @description	inline 模式的菜单缩进宽度
     * @default 24
     */
    inlineIndent?: number;
    // /**
    //  * @description  菜单内容
    //  * @default -
    //  */
    // items: ItemType[],
    /**
     * @description 菜单类型，现在支持垂直、水平、和内嵌模式三种
     * @default vertical
     */
    mode?: 'vertical' | 'horizontal' | 'inline';
    /**
     * @description 是否允许多选
     * @default false
     */
    multiple?: boolean;
    /**
     * @description 	当前展开的 SubMenu 菜单项 key 数组
     * @default -
     */
    openKeys?: string[];
    /**
     *  @description 		用于自定义 Menu 水平空间不足时的省略收缩的图标
     *  @default -
     */
    overflowedIndicator?: React.ReactNode;
    /**
     * @description 是否允许被选中
     * @default true
     */
    selectable?: boolean;
    /**
     * @description 当前选中的菜单项 key 数组
     * @default -
     */
    selectedKeys?: string[];
    /**
     * @description 	根节点样式
     * @default -
     */
    style?: React.CSSProperties;
    /**
     * @description 	用户鼠标离开子菜单后关闭延时，单位：秒
     * @default 0.1
     */
    subMenuCloseDelay?: number;
    /**
     * @description 用户鼠标进入子菜单后开启延时，单位：秒
     * @default 	0
     */
    subMenuOpenDelay?: number;
    /**
     * @description 主题颜色
     * @default light
     */
    theme?: 'light' | 'dark';
    /**
     * @description SubMenu 展开/关闭的触发行为
     * @default hover
     */
    triggerSubMenuAction?: 'hover' | 'click';
    /**
     * @description 点击 MenuItem 调用此函数
     * @default -
     */
    onClick?: (info: ClickInfo) => void;
    /**
     * @description 	取消选中时调用，仅在 multiple 生效
     * @default -
     */
    onDeselect?: (info: SelectInfo) => void;
    /**
     * @description 	取消选中时调用，仅在 multiple 生效
     * @default -
     */
    onOpenChange?: (openKeys: React.Key[]) => void;
    /**
     * @description 	取消选中时调用，仅在 multiple 生效
     * @default -
     */
    onSelect?: (info: SelectInfo) => void;
    children?: React.ReactNode;
}
