import React from 'react';
import { Drawer, DrawerProps } from 'antd';

declare const PlacementTypes: ['top', 'right', 'bottom', 'left'];
type placementType = 'top' | 'right' | 'bottom' | 'left';
declare const SizeTypes: ['default', 'large'];
declare type sizeType = typeof SizeTypes[number];
declare type EventType =
    | React.KeyboardEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;
export interface PushState {
    distance: string | number;
}
export interface SysDrawerProps extends DrawerProps {
    /**
     * @description 抽屉展开后是否将焦点切换至其 Dom 节点
     * @default true
     */
    autoFocus?: boolean;
    /**
     * @description 切换抽屉时动画结束后的回调
     * @default -
     */
    afterVisibleChange?: (visible: boolean) => void;
    /**
     * @description 可用于设置 Drawer 内容部分的样式
     * @default -
     * @type CSSProperties
     */
    bodyStyle?: React.CSSProperties;
    /**
     * @description 对话框外层容器的类名
     * @default -
     */
    className?: string;
    /**
     * @description 是否显示左上角的关闭按钮
     * @default true
     */
    closable?: boolean;
    /**
     * @description 自定义关闭图标
     * @default <CloseOutlined />
     * @type ReactNode
     */
    closeIcon?: React.ReactNode;
    /**
     * @description 可用于设置 Drawer 包裹内容部分的样式
     * @type 	CSSProperties
     * @default -
     */
    contentWrapperStyle?: React.CSSProperties;
    /**
     * @description 关闭时销毁 Drawer 里的子元素
     * @default false
     */
    destroyOnClose?: boolean;
    /**
     * @description 用于设置 Drawer 弹出层的样式
     * @type CSSProperties
     * @default -
     */
    drawerStyle?: React.CSSProperties;
    /**
     * @description 抽屉右上角的操作区域
     * @type ReactNode
     * @default -
     */
    extra?: React.ReactNode;
    /**
     * @description 	抽屉的页脚
     * @type ReactNode
     * @default -
     */
    footer?: React.ReactNode;
    /**
     * @description 抽屉页脚部件的样式
     * @type CSSProperties
     * @default -
     */
    footerStyle?: React.CSSProperties;
    /**
     * @description 抽屉页脚部件的样式
     * @type CSSProperties
     * @default -
     */
    forceRender?: boolean;
    /**
     * @description 指定 Drawer 挂载的节点，并在容器内展现，false 为挂载在当前位置
     * @type 	string | HTMLElement | (() => HTMLElement) | false
     */
    getContainer?: string | HTMLElement | (() => HTMLElement) | false;
    /**
     * @description 用于设置 Drawer 头部的样式
     * @type CSSProperties
     * @default -
     */
    headerStyle?: React.CSSProperties;
    /**
     * @description  高度, 在 placement 为 top 或 bottom 时使用
     * @type string | number
     * @default	378
     */
    height?: string | number;
    /**
     * @description 是否支持键盘 esc 关闭
     * @type boolean
     * @default true
     */
    keyboard?: boolean;
    /**
     * @description 是否展示遮罩
     * @type boolean
     * @default true
     */
    mask?: boolean;
    /**
     * @description 点击蒙层是否允许关闭
     * @type boolean
     * @default true
     */
    maskClosable?: boolean;
    /**
     * @description 遮罩样式
     * @type	CSSProperties
     * @default {}
     */
    maskStyle?: React.CSSProperties;
    /**
     * @description 抽屉的方向 抽屉的方向
     * @default right
     * @type   top | right | bottom | left
     */
    placement?: placementType;
    /**
     * @description 用于设置多层 Drawer 的推动行为
     * @type boolean | { distance: string | number }
     * @default { distance: 180 }
     */
    push?: boolean | PushState;
    /**
     * @description 预设抽屉宽度（或高度），default 378px 和 large 736px
     * @type 'default' | 'large'
     * @default 'default'
     */
    size?: sizeType;
    /**
     * @description 可用于设置 Drawer 最外层容器的样式，和 drawerStyle 的区别是作用节点包括 mask
     * @default -
     * @type 	CSSProperties
     */
    style?: React.CSSProperties;
    /**
     * @description 标题
     * @type ReactNode
     * @default -
     */
    title?: React.ReactNode;
    /**
     * @description Drawer 是否可见
     * @type boolean
     * @default -
     */
    visible?: boolean;
    /**
     * @description  宽度
     * @type	string | number
     * @default 378
     */
    width?: string | number;
    /**
     * @description 设置 Drawer 的 z-index
     * @type number
     * @default 1000
     */
    zIndex?: number;
    /**
     * @description 点击遮罩层或左上角叉或取消按钮的回调
     * @type  (e: EventType) => void
     * @default -
     */
    onClose?: (e: EventType) => void;
    children?: React.ReactNode | React.ReactNode[];
}

function SysDrawer({ children, ...rest }: SysDrawerProps) {
    return <Drawer {...rest}>{children}</Drawer>;
}
export default SysDrawer;
