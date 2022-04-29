import { TransferProps } from 'antd';

interface TransferLocale {
    titles: React.ReactNode[];
    notFoundContent?: React.ReactNode | React.ReactNode[];
    searchPlaceholder: string;
    itemUnit: string;
    itemsUnit: string;
    remove: string;
    selectAll: string;
    selectCurrent: string;
    selectInvert: string;
    removeAll: string;
    removeCurrent: string;
}
declare type TransferDirection = 'left' | 'right';

interface ListStyle {
    direction: TransferDirection;
}
declare type SelectAllLabel =
    | React.ReactNode
    | ((info: { selectedCount: number; totalCount: number }) => React.ReactNode);
declare type PaginationType = boolean | { pageSize?: number };

export interface SysTransferItem {
    key?: string;
    title?: string;
    description?: string;
    disabled?: boolean;
    [name: string]: any;
}

export interface SysTransferProps<RecordType> {
    prefixCls?: string;
    className?: string;
    /**
     * @description 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * @description 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外
     * @default []
     * @type TransferItem[]
     */
    dataSource: RecordType[];
    /**
     * @description 显示在右侧框数据的 key 集合
     * @default []
     */
    targetKeys?: string[];
    /**
     * @description 设置哪些项应该被选中
     * @default []
     */
    selectedKeys?: string[];
    /**
     * @description 每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 label 字段为 ReactElement，value 字段为 title
     * @default -
     * @type (record) => ReactNode
     */
    render?: TransferProps['render'];
    /**
     * @description 选项在两栏之间转移时的回调函数
     * @default -
     * @type (targetKeys, direction, moveKeys): void
     */
    onChange?: (targetKeys: string[], direction: TransferDirection, moveKeys: string[]) => void;
    /**
     * @description 选中项发生改变时的回调函数
     * @default -
     * @type (sourceSelectedKeys, targetSelectedKeys): void
     */
    onSelectChange?: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void;
    style?: React.CSSProperties;
    listStyle?: ((style: ListStyle) => React.CSSProperties) | React.CSSProperties;
    /**
     * @description 操作栏的自定义样式
     * @default -
     */
    operationStyle?: React.CSSProperties;
    /**
     * @description 标题集合，顺序从左至右
     * @default ReactNode[]
     */
    titles?: React.ReactNode[];
    /**
     * @description 操作文案集合，顺序从上至下
     * @default [>, <]
     */
    operations?: string[];
    /**
     * @description 是否显示搜索框
     * @default 	false
     */
    showSearch?: boolean;
    /**
     * @description 	接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false
     * @default -
     * @type (inputValue: string, item: TransferItem): boolean
     */
    filterOption?: (inputValue: string, item: RecordType) => boolean;
    locale?: Partial<TransferLocale>;
    footer?: TransferProps['footer'];
    rowKey?: (directionrecord: RecordType) => string;
    /**
     * @description 搜索框内容时改变时的回调函数
     * @default -
     * @type 	(direction: left | right, value: string): void
     */
    onSearch?: (direction: TransferDirection, value: string) => void;
    /**
     * @description 选项列表滚动时的回调函数
     * @default
     * @type (direction, event): void
     */
    onScroll?: (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => void;
    //(props: TransferListBodyProps<RecordType>) => React.ReactNode;
    children?: TransferProps['children'];
    /**
     * @description 是否展示全选勾选框
     * @default true
     */
    showSelectAll?: boolean;
    /**
     * @description 自定义顶部多选框标题的集合
     * @default -
     * @type (ReactNode |((info: { selectedCount: number; totalCount: number }) => React.ReactNode)[]
     */
    selectAllLabels?: SelectAllLabel[];
    /**
     * @description 展示为单向样式
     * @default false
     *
     */
    oneWay?: boolean;
    /**
     * @description 使用分页样式，自定义渲染列表下无效
     * @default false
     * @type   boolean| {pageSize?: number}
     */
    pagination?: PaginationType;
}
