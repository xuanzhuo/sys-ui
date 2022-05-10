import { Input } from 'antd';
import React from 'react';
let { TextArea } = Input;
// declare type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
declare type SizeType = 'small' | 'middle' | 'large' | undefined;
interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
interface ShowCountProps {
    formatter: (args: { count: number; maxLength?: number }) => string;
}
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * @description 文本框行高
     * @default -
     */
    rows?: number;
    /**
     *@description 规定文本区的宽度（以平均字符数计）
     @default -
     */
    cols?: number;
    /**
     * @description 类名
     * @default -
     */
    className?: string;
    /**
     * @description 样式
     * @default -
     */
    style?: React.CSSProperties;
    /**
     * @description  自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }
     * @default false
     */
    autoSize?: boolean | AutoSizeType;
    /**
     * @description 按下回车的回调
     * @default -
     */
    onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    /**
     * @description resize 回调
     * @default -
     */
    onResize?: (size: { width: number; height: number }) => void;
    /**
     * @description 可以点击清除图标删除内容
     * @default false
     */
    allowClear?: boolean;
    /**
     * @description 是否有边框
     * @default true
     */
    bordered?: boolean;
    /**
     * @description 是否展示字数
     * @default false
     */
    showCount?: boolean | ShowCountProps;
    /**
     * @description 文本框大小
     * @default -
     */
    size?: SizeType;
    /**
     * @description 文本框内无内容时 底字
     * @default -
     */
    placeholder?: string | undefined;
    /**
     * @description 内容最大长度
     * @default -
     */
    maxLength?: number;
    onBlur?:  React.FocusEventHandler<HTMLElement>;
    onFocus?:  React.FocusEventHandler<HTMLElement>;
}
export default function SysTextArea({ ...rest }: TextAreaProps) {
    return <TextArea {...rest}></TextArea>;
}
