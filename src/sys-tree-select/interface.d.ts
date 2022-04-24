import { TreeSelectProps, SelectProps } from 'antd';
import React from 'react';
declare type RawValueType = string | number;
declare type Key = string | number;
interface LabelValueType {
    key?: Key;
    value?: RawValueType;
    label?: React.ReactNode;
    /** Only works on `treeCheckStrictly` */
    halfChecked?: boolean;
}
declare type DefaultValueType = RawValueType | RawValueType[] | LabelValueType | LabelValueType[];
interface FieldNames {
    value?: string;
    label?: string;
    children?: string;
}
declare type CheckedStrategy = "SHOW_ALL" | "SHOW_PARENT" |  "SHOW_CHILD";
export  interface SysTreeSelectProps extends SelectProps {
    /**
     * @description 显示清除按钮
     * @default	false
     */
    allowClear?: boolean;
    /**
     * @description 当多选模式下值被选择，自动清空搜索框
     * @default true
     */
    autoClearSearchValue?: boolean;
    /**
     * @description 是否显示边框
     * @default true
     */
    bordered?: boolean;
    /**
     * @description 指定默认选中的条目
     * @default -
     * @type string|number | string|number[]
     */
    defaultValue?: DefaultValueType;
    /**
     * @description 是否禁用
     * @default -
     *
     */
    disabled?: boolean;
    /**
     * @description 自定义节点 label、value、children 的字段
     * @default -
     */
    fieldNames?: FieldNames;
    /**
     * @description 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值
     * @default function
     * @type boolean | function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值)
     */
    filterTreeNode?: TreeSelectProps['filterTreeNode'];
    /**
     * @description 是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式
     * @default false
     */
    labelInValue?: boolean;
    /**
     * @description 	异步加载数据
     * @default -
     * @type function(node)
     */
    loadData?: TreeSelectProps['loadData'];
    /**
     * @description 隐藏 tag 时显示的内容
     * @default -
     * @type (omittedValues: LabelValueType[]) => React.ReactNode / LabelValueType={ key?: Key;  value?: string | number;label?: React.ReactNode;halfChecked?: boolean;}
     */
    maxTagPlaceholder?: TreeSelectProps['maxTagPlaceholder'];
    /**
     * @description 支持多选（当设置 treeCheckable 时自动变为 true）
     * @default false
     */
    multiple?: boolean;
    /**
     * @description 选择框默认文字
     * @default -
     */
    placeholder?: React.ReactNode;
    /**
     * @description 搜索框的值，可以通过 onSearch 获取用户输入
     * @default -
     */
    searchValue?: string;
    /**
     * @description 是否显示 suffixIcon，单选模式下默认 true
     * @default -
     */
    showArrow?: boolean;
    /**
     * @description 配置 treeCheckable 时，定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点)。TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点
     * @default
     *
     */
    showCheckedStrategy?:  SHOW_ALL |  SHOW_PARENT |  SHOW_CHILD;
    /**
     * @description 是否支持搜索框
     * @default  单选：false|多选：true
     */
    showSearch?: boolean;
    /**
     * @description 自定义树节点的展开/折叠图标	ReactNode
     * @default -
     * @type React.ReactNode | ((props: TreeNodeProps) => React.ReactNode)
     */
    switcherIcon?: TreeSelectProps['switcherIcon'];
    /**
     *  @description 显示 Checkbox
     *  @default false
     */
    treeCheckable?: boolean | React.ReactNode;
    /**
     * @description checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true
     * @default false
     */
    treeCheckStrictly?: boolean;
    /**
     * @description  treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）
     * @default
     * @type */

    treeData?: TreeSelectProps['treeData'];
    /**
     * @description 是否展示线条样式
     * @default false
     *
     */
    treeLine?: boolean;
    /**
     * @description  使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', title:"test1",...},...]， pId 是父节点的 id)
     * @default false
     * @type  boolean | SimpleModeConfig
     */
    treeDataSimpleMode?: TreeSelectProps['treeDataSimpleMode'];
    /**
     * @description 默认展开所有的父节点
     * @default false
     */
    treeDefaultExpandAll?: boolean;
    /**
     * @description 默认展开的树节点
     * @default -
     */
    treeDefaultExpandedKeys?: Key[];
    /**
     * @description 设置展开的树节点
     * @default -
     */
    treeExpandedKeys?: Key[];
    /**
     *@description 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式
      @default false
      @type boolean
     */
    treeIcon?: TreeSelectProps['treeIcon'];
    /**
     * @description （受控）已经加载的节点，需要配合 loadData 使用
     * @default []
     */
    treeLoadedKeys?: Key[];
    /**
     * @description 输入项过滤对应的 treeNode 属性
     * @default value
     */
    treeNodeFilterProp?: string;
    /**
     * @description 作为显示的 prop 设置
     * @default title
     */
    treeNodeLabelProp?: string;
    /**
     * @description 指定当前选中的条目
     * @default
     */
    value?: DefaultValueType;
    /**
     * @description 选中树节点时调用此函数
     * @default
     * @type  (value: ValueType, labelList: React.ReactNode[], extra: ChangeEventExtra) => void
     */
    onChange?: TreeSelectProps['onChange'];
    /**
     * @description 展开下拉菜单的回调
     * @default
     */
    onDropdownVisibleChange?: (open: boolean) => void;
    /**
     * @description 文本框值变化时回调
     */
    onSearch?: (value: string) => void;
    /**
     * @description  展示节点时调用
     */
    onTreeExpand?: (expandedKeys: Key[]) => void;
    /**
     * @description 	被选中时调用
     * @type function(value, node, extra)
     */
    onSelect?: TreeSelectProps['onSelect'];
    children?: React.ReactNode;
    style?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
}
