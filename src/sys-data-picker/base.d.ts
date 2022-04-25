import React from 'react';
import {DatePickerProps} from 'antd'
declare type mode = 'time' | 'date' | 'month' | 'year' | 'decade';
declare type picker = 'date' | 'week' | 'month' | 'quarter' | 'year';
declare type placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
declare type size = 'large' | 'middle' | 'small';
declare type status = 'error' | 'warning';
export default interface Base {
    /**
     * @description 	是否显示清除按钮
     * @default true
     */
    allowClear?: boolean;
    /**
     *  @description 自动获取焦点
     *  @default true
     */
    autoFocus?: boolean;
    /**
     * @description 	是否有边框
     * @default true
     */
    bordered?: boolean;
    /**
     * @description 	选择器 className
     * @default -
     */
    className?: string;
    /**
     * @description 自定义日期单元格的内容
     * @default -
     */
    dateRender?: <T>(props: T) => React.ReactNode;
    /**
     * @description  禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * @description 	不可选择的日期
     * @default  -
     */
    disabledDate?: <T>(currentDate: T) => boolean;
    /**
     * @description 额外的弹出日历 className
     * @default -
     */
    dropdownClassName?: string;
    /**
     * @description 定义浮层的容器，默认为 body 上新建 div
     * @default -
     */
    getPopupContainer?: (trigger: HTMLElement) => HTMLElement;
    /**
     * @description 设置输入框为只读（避免在移动设备上打开虚拟键盘）
     * @default false
     */
    inputReadOnly?: boolean;
    /**
     * @description 日期面板的状态
     * @default  -
     * @type 'time' | 'date' | 'month' | 'year' | 'decade'
     */
    mode?: DatePickerProps['mode'];
    /**
     * @description 自定义下一个图标
     * @default -
     */
    nextIcon?: React.ReactNode;
    /**
     * @description 控制弹层是否展开
     * @default -
     */
    open?: boolean;
    /**
     * @description 	自定义渲染面板
     * @default -
     */
    panelRender?: <Node>(panelNode: Node) => React.ReactNode;
    /**
     * @description 设置选择器类型
     * @default date
     */
    picker?: DatePickerProps['picker'];
    /**
     * @description 输入框提示文字
     * @default -
     */
    placeholder?: string;
    /**
     * @description 选择框弹出的位置
     * @default bottomLeft
     */
    placement?: string;
    /**
     * @description 额外的弹出日历样式
     * @default -
     */
    popupStyle?: React.CSSProperties;
    /**
     * @description 自定义上一个图标
     * @default -
     */
    prevIcon?: React.ReactNode;
    /**
     * @description 输入框大小，large 高度为 40px，small 为 24px，默认是 32px
     * @default -
     */
    size?: size;
    /**
     * @description 设置校验状态
     * @default -
     */
    status?: status;
    /**
     * @description 自定义输入框样式
     * @default -
     */
    style?: React.CSSProperties;
    /**
     * @description 自定义的选择框后缀图标
     * @default -
     */
    suffixIcon?: React.ReactNode;
    /**
     * @description 	自定义 << 切换图标
     * @default -
     */
    superNextIcon?: React.ReactNode;
    /**
     * @description 自定义 >> 切换图标
     * @default -
     */
    superPrevIcon?: React.ReactNode;
    /**
     * @description 	弹出日历和关闭日历的回调
     * @default -
     */
    onOpenChange?: <T>(open: T) => {};
    /**
     * @description 日历面板切换的回调
     * @default -
     */
    onPanelChange?: (value, mode) => {};
}
