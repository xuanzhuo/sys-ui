import {DropDownProps} from 'antd'
export default interface SysDropDownProps extends DropDownProps {
    /**
     * @description 下拉框箭头是否显示
     * @default  false
     */
    arrow?: boolean;
    /**
     * @description 触发下拉的行为, 移动端不支持 hover
     * @default [hover]
     * @type Array<click|hover|contextMenu>
     */
    trigger?: ('click' | 'hover' | 'contextMenu')[];
    /**
     * @description   菜单
     * @default -
     * @type Menu | () => Menu
     */
    overlay: DropDownProps['overlay'];
    /**
     * @description 	菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发
     * @default -
     * @type (visible: boolean) => void
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * @description 菜单是否显示
     * @default -
     */
    visible?: boolean;
    /**
     * @description 	菜单是否禁用
     * @default -
     */
    disabled?: boolean;
    /**
     * @description 关闭后是否销毁 Dropdown
     * @default false
     */
    destroyPopupOnHide?: boolean;
    align?: DropDownProps['align'];
    /**
     * @description 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位
     * @default () => document.body
     */
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;

    prefixCls?: string;
    className?: string;
    transitionName?: string;
    /**
     * @description 菜单弹出位置：bottom bottomLeft bottomRight top topLeft topRight
     * @default bottomLeft
     */
    placement?: DropDownProps['placement'];
    /**
     * @description 下拉根元素的类名称
     * @default -
     */
    overlayClassName?: string;
    /**
     * @description 	下拉根元素的样式
     * @default -
     */
    overlayStyle?: React.CSSProperties;
    /**
     *
     */
    forceRender?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    openClassName?: string;
    children?: React.ReactNode;
}