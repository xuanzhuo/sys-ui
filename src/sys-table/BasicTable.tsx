/**
 * 表格
 * @author sizz 2022-04-18
 */
import React, { useEffect, useRef, useState } from 'react';
import { Table, TableProps, TableColumnType, Pagination, PaginationProps } from 'antd';
import { isEqual } from 'lodash';
import './style/index.less';

export interface BasicTableColumnType extends Omit<TableColumnType<any>, 'onCellClick'> {
    /**
     * @description 列头显示文字
     * @default -
     * @type ReactNode | ({ sortOrder, sortColumn, filters }) => ReactNode
     */
    title?: TableColumnType<any>['title'];
    /**
     * @description 列数据在数据项中对应的路径，支持通过数组查询嵌套路径
     * @default -
     * @type string | string[]
     */
    dataIndex?: TableColumnType<any>['dataIndex'];
    /**
     * @description 列宽度
     * @default -
     * @type string | number
     */
    width?: TableColumnType<any>['width'];
    /**
     * @description 设置列的对齐方式
     * @default left
     * @type 'left' | 'center' | 'right'
     */
    align?: TableColumnType<any>['align'];
}

export interface TablePaginationProps extends PaginationProps {
    /**
     * @description 当前页码
     * @default 1
     */
    current?: PaginationProps['current'];
    /**
     * @description 每页条数
     * @default 20
     */
    pageSize?: PaginationProps['pageSize'];
    /**
     * @description 数据总数
     * @default 0
     */
    total?: number;
}

export interface BasicTableProps extends TableProps<any> {
    /**
     * @description 数据数组
     * @default -
     * @type object[]
     */
    dataSource?: TableProps<any>['dataSource'];
    /**
     * @description 表格列的配置描述，具体项见下表
     * @default -
     * @type ColumnsType[]
     */
    columns?: TableProps<any>['columns'];
    /**
     * @description 外层样式
     * @default -
     */
    styleWrap?: React.CSSProperties;
    /**
     * @description 内层容器class
     * @default -
     */
    className?: string;
    /**
     * @description 分页设置
     * @default undefined
     */
    pagination?: TablePaginationProps;
    /**
     * @description 是否显示‘行序号’列
     * @default false
     */
    rowNumber?: boolean;
    /**
     * @description 数据唯一标识
     * @default id
     */
    rowKey?: string;
    /**
     * @description 最小宽度
     * @default -
     */
    minWidth?: number;
    /**
     * @description 是否开启单选模式
     * @default false
     */
    single?: boolean;
    /**
     * @description 触发选中项的key（对应rowKey值）,外部控制选中项
     * @default -
     */
    triggerSelectedKeys?: string[];
    /**
     * @description 选中项发生变化时的回调
     * @default -
     */
    onSelectChange?: (keys: string[], rows: any[]) => void;
    /**
     * @description 设置行属性
     * @default -
     */
    onRow?: TableProps<any>['onRow'];
    /**
     * @description 分页操作回调
     * @default -
     */
    onPageChange?: (current: number, size: number) => void;
    /**
     * @description 表格选择操作，配置项
     * @default -
     * @type SysRowSelection
     */
    rowSelection?: TableProps<any>['rowSelection'];
    /**
     * @description 配置展开属性
     * @default -
     * @type SysExpandable
     */
    expandable?: TableProps<any>['expandable'];
    /**
     * @description 覆盖默认的 table 元素
     * @default -
     * @type TableComponents
     */
    components?: TableProps<any>['components'];
    /**
     * @description 是否支持树形
     * @default false
     * @type hidden
     */
    isTree?: boolean;
}

function usePrev(value: any) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const BasicTable = React.forwardRef(
    (
        {
            styleWrap,
            pagination,
            dataSource,
            rowSelection,
            columns,
            rowNumber = false,
            minWidth,
            rowKey = 'id',
            single = false,
            triggerSelectedKeys,
            isTree = false,
            onSelectChange,
            onRow,
            onPageChange,
            ...rest
        }: BasicTableProps,
        ref,
    ) => {
        /** 选择操作封装 */
        const [selected, setSelected] = useState<{ keys: string[]; rows: any[] }>({
            keys: triggerSelectedKeys || [],
            rows: [],
        });

        /** 选中项滚动定位 */
        const prevTriggerSelectedKeys = usePrev(triggerSelectedKeys);
        useEffect(() => {
            if (triggerSelectedKeys && !isEqual(triggerSelectedKeys, prevTriggerSelectedKeys)) {
                setSelected({ keys: triggerSelectedKeys, rows: [] });
                scrollToRowByRowKey(triggerSelectedKeys[0]);
            }
        }, [triggerSelectedKeys]);
        //更新选中项
        useEffect(() => {
            const { keys, rows } = selected;
            if (!isTree) {
                const nrows =
                    dataSource?.filter((item) => {
                        return keys.includes(item[rowKey]);
                    }) || [];
                const ckeys = nrows?.map((item) => item[rowKey]) || [];
                onSelectChange?.(ckeys, nrows);
            } else {
                onSelectChange?.(keys, rows);
            }
        }, [selected, dataSource]);

        const sysTableRef = useRef<HTMLDivElement>(null);
        function scrollToRowByRowKey(defaultKey: string | number) {
            const telememt = sysTableRef.current?.querySelector(
                `tr[data-row-key = "${defaultKey}"]`,
            );
            telememt?.scrollIntoView({ block: 'nearest' });
        }
        function onRowHandler(data: any, index?: number) {
            const rowHandler = onRow?.(data, index) ? onRow?.(data, index) : {};
            const { onClick, ...rest } = rowHandler;
            return {
                onClick: (e: React.MouseEvent<HTMLElement>) => {
                    const nkeys = [data[rowKey]];
                    const nrows = [data];
                    setSelected(({ keys, rows }) => {
                        if (keys[0] !== nkeys[0]) {
                            // onSelectChange?.(nkeys, nrows);
                            return { keys: nkeys, rows: nrows };
                        }
                        return { keys, rows };
                    });
                    onClick?.(e);
                },
                ...rest,
            };
        }

        const sysRowSelection: BasicTableProps['rowSelection'] = {
            ...rowSelection,
            columnWidth: single ? '0px' : 40,
            hideSelectAll: single,
            selectedRowKeys: selected.keys,
            onChange: (keys: any[], rows: any[]) => {
                setSelected({ keys, rows });
                // onSelectChange?.(keys, rows);
            },
            renderCell: (
                checked: boolean,
                record: any,
                index: number,
                originNode: React.ReactNode,
            ) => {
                return single ? <></> : originNode;
            },
        };

        /** todo 分页 */
        const paginationlocale: PaginationProps['locale'] = {
            jump_to: '跳至',
            items_per_page: '/页',
            page: '页',
        };
        const [pageInfo, setPageInfo] = useState(() => {
            const pageNum = pagination && pagination.current ? pagination.current : 1;
            const pageSize = pagination && pagination.pageSize ? pagination.pageSize : 20;
            return { pageNum, pageSize };
        });
        function handlePageChange(pageNum: number, pageSize: number) {
            setPageInfo({ pageNum, pageSize });
            onPageChange?.(pageNum, pageSize);
        }
        const [total, setTotal] = useState(0);
        useEffect(() => {
            if (pagination && pagination.total !== undefined) {
                setTotal(pagination?.total);
            }
        }, [pagination?.total]);

        /** 序号列封装 */
        const rowNumberCol: BasicTableColumnType = {
            title: <div style={{ width: 35, textAlign: 'center' }}>序号</div>,
            width: 55,
            dataIndex: 'numberCol',
            fixed: 'left',
            render: (text: any, record: object, index: number) => {
                return (
                    <div title={`${index + 1}`} style={{ textAlign: 'center' }}>
                        {index + 1}
                    </div>
                );
            },
        };
        
        return (
            <div
                className="sys-table-wrap"
                style={{ ...styleWrap }}
                ref={ref as React.LegacyRef<HTMLDivElement>}
            >
                <div
                    ref={sysTableRef}
                    className={`sys-table ${single ? 'sys-table-single-selection' : ''}`}
                    style={{
                        height: `${pagination ? 'calc(100% - 48px)' : '100%'}`,
                    }}
                >
                    <Table
                        dataSource={dataSource}
                        rowKey={(record) => record[rowKey]}
                        rowSelection={sysRowSelection}
                        pagination={false}
                        columns={rowNumber ? [rowNumberCol, ...(columns ? columns : [])] : columns}
                        scroll={{
                            x: minWidth ? minWidth : undefined,
                            y: `calc(100% - 36px)`,
                        }}
                        onRow={onRowHandler}
                        {...rest}
                    />
                </div>
                {pagination && (
                    <div className="sys-table-pagination">
                        <Pagination
                            current={pageInfo.pageNum}
                            pageSize={pageInfo.pageSize}
                            showQuickJumper
                            showSizeChanger
                            pageSizeOptions={[10, 20, 30, 40]}
                            onChange={handlePageChange}
                            total={total}
                            locale={paginationlocale}
                        />
                    </div>
                )}
            </div>
        );
    },
);

export default BasicTable;
