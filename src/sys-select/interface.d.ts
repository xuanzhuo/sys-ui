import React from 'react';
import { SelectProps } from 'antd';
import { valueType } from 'antd/lib/statistic/utils';

interface FieldNames {
    value?: string;
    label?: string;
    options?: string;
}
declare type Mode = 'multiple' | 'tags'

type CustomTagProps = {
    label: React.ReactNode;
    value: DefaultValueType;
    disabled: boolean;
    onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    closable: boolean;
};
export interface SysSelectProps {
    /**
     *@description 支持清除
     *@default false
     */
    allowClear?: boolean;
    /**
     * @description 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效
     * @default true
     */
    autoClearSearchValue?: boolean;
    /**
     * @description 默认获取焦点
     * @default false
     */
    autoFocus?: boolean;
    /**
     * @description 是否有边框
     * @default true
     *
     */
    bordered?: boolean;
    /**
     *@description 自定义的多选框清空图标
     *@default -
     */
    clearIcon?: React.ReactNode;
    /**
     * @description 是否默认高亮第一个选项
     * @default true
     */
    defaultActiveFirstOption?: boolean;
    /**
     *@description 是否默认展开下拉菜单
     *@default boolean
     */
    defaultOpen?: boolean;
    /**
     * @description  指定默认选中的条目
     * @default -
     */
    defaultValue?: SelectProps['defaultValue'];
    /**
     *@description 是否禁用
     *@default -
     */
    disabled?: boolean;
    /**
     *@description 下拉菜单的 className 属性
     *@default -
     */
    dropdownClassName?: string;
    /**
     * @description 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动
     * @default true
     */
    dropdownMatchSelectWidth?: boolean | number;
    /**
     *  @description 自定义下拉框内容
     *  @default -
     */
    dropdownRender?: SelectProps["dropdownRender"];
    /**
     *  @description 下拉菜单的 style 属性
     *  @default -
     */
    dropdownStyle?: React.CSSProperties;
    /**
     *  @description 自定义节点 label、value、options 的字段
     *  @default -
     */
    fieldNames?: FieldNames;
    /**
     *  @description 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false
     *  @default true
     */
    filterOption?:boolean | function(inputValue, option);
    /*** 
     * @description 搜索时对筛选结果项的排序函数, 类似Array.sort里的 compareFunction
     * @default -
     */
    filterSort?:	(optionA: Option, optionB: Option) => number;
    /**
     * @description 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位
     * @default () => document.body	
     */
    getPopupContainer?: SelectProps['getPopupContainer'];
    /**
     * @description 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式
     * @default false
     */
     labelInValue?: boolean;
     /**
      * @description 设置弹窗滚动高度
      * @default 256
      * 
      */
     listHeight?:number;
     /**
      * @description 加载中状态	
      * @default false
      */
     loading?: boolean;
     /**
      * @description 最多显示多少个 tag，响应式模式会对性能产生损耗
      * @default -
      */
     maxTagCount?:SelectProps['maxTagCount'];
     /**
      * @description  隐藏 tag 时显示的内容
      * @default -
      */
     maxTagPlaceholder?:React.ReactNode | ((omittedValues: LabelValueType[]) => React.ReactNode);
     /**
      * @description 最大显示的 tag 文本长度
      * @default -
      */
     maxTagTextLength?: number;
     /**
      * @description 	自定义多选时当前选中的条目图标
      * @default -
      */
     menuItemSelectedIcon?: React.ReactNode;
     /**
      * @description  	设置 Select 的模式为多选或标签
      * @default -
      */
     mode?:Mode;
     /**
      * @description 当下拉列表为空时显示的内容
      * @default -
      */
     notFoundContent?: React.ReactNode;
     /**
      * @description 是否展开下拉菜单
      * @default -
      */
     open?:boolean;
     /**
      * @description 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索。若通过 options 属性配置选项内容，建议设置 optionFilterProp="label" 来对内容进行搜索。
      * @default -
      */
     optionFilterProp?:string;
     /**
      * @description 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。
      * @default children
      */
     optionLabelProp?:string;
     /**
      * @description 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能
      * @default -
      */
     options?:SelectProps['options'];
     /**
      * @description 选择框默认文本
      * @default -
      */
     placeholder?:string;
     /**
      * @description 选择框弹出的位置
      * @default -
      */
     placement?: "bottomLeft"| "bottomRight" |"topLeft"| "topRight"
     /**
      * @description 自定义的多选框清除图标
      * @default -
      */
     removeIcon?:React.ReactNode;
     /**
      * @description 控制搜索文本
      * @default -
      */
     searchValue?:string;
     /**
      * @description 是否显示下拉小箭头
      * @default 单选为 true，多选为 false
      * 
      */
     showArrow?: boolean;
     /**
      * @description 使单选模式可搜索
      * @default false
      */
     showSearch?:boolean;
     /**
      * @description 选择框大小
      * @default middle
      */
     size?:"large" | "middle" | "small";
     /**
      *  @description 设置校验状态
      *  @default -
      */
     status?: 'error' | 'warning';
     /**
      *  @description 自定义的选择框后缀图标
      *  @default -
      */
     suffixIcon?: React.ReactNode;
     /**
      *  @description 	自定义 tag 内容 render，仅在 mode 为 multiple 或 tags 时生效
      *  @default -
      */
     tagRender?:(props:CustomTagProps)=>React.ReactElement;
     /**
      *  @description 在 tags 和 multiple 模式下自动分词的分隔符
      *  @default -
      * 
      */
     tokenSeparators?:string[];
     /**
      *  @description 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新）
      *  @default -
      */
     value?: SelectProps['value'];
     /**
      * @description 失去焦点时回调
      * @default
      */
      onBlur?: React.FocusEventHandler<HTMLElement>;
      /**
       * @description 	选中 option，或 input 的 value 变化时，调用此函数
       * @default -
       */
      onChange?: SelectProps['onChange'];
      /**
       * @description 清除内容时回调 
       * @default -
       */
      onClear?: () => void
      /**
       * @description 被选中时调用，参数为选中项的 value (或 key) 值
       * @default -
       */
      onSelect?: SelectProps['onSelect'];
      /**
       * @description 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效
       * @default -
       */
      onDeselect?: SelectProps['onDeselect'] ;
      /**
       * @description 展开下拉菜单的回调
       * @default -
       */
      onDropdownVisibleChange?: (open: boolean) => void;
      /**
       * @description 获取焦点的回调
       */
      onFocus?: React.FocusEventHandler<HTMLElement>;
      /**
       * @description 按键按下时的回调
       */
      onInputKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
     /**
       *  @description 文本框值变化时回调
       * 
       */
      onSearch?: (value: string) => void;
    
        /**
       * @description 鼠标移入时回调
       */
      onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
      /**
       * @description 鼠标移出时回调
       */
      onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
      onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
      onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
      onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
      onPopupScroll?: React.UIEventHandler<HTMLDivElement>;
      onClick?: React.MouseEventHandler;

      children?:React.ReactNode;
      style?:React.CSSProperties
} 
