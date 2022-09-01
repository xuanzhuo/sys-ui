/**
 * 列加工处理（列宽拖拽，列排序，列过滤）表格
 * @author sizz 2022-04-25
 */
import React, { useRef, useState, useEffect, useMemo } from 'react';
import ResizeObserver from 'rc-resize-observer';
import { isArray, cloneDeep } from 'lodash';
import { getDeepestTreeNode } from '../sys-util';
import { show } from '../sys-modal';
import BasicTable, { BasicTableProps, BasicTableColumnType } from './BasicTable';
import ResizableCell from './ResizableCell';
import ColumnsFilterMenu from './ColumnsFilterMenu';
import { initColWidths, fitColWidths, handleSort, fitFilterColWidths } from './handleCol';

export interface HanldeColTableColumnType extends BasicTableColumnType {
    /**
     * @description 此列列宽是否可改变
     * @default -
     */
    resizable?: boolean;
    /**
     * @description 列最小宽度（拖动改变列列宽时使用）
     * @default -
     */
    minWidth?: number;
    /**
     * @description 禁止此列参与过滤（列过滤时使用）
     * @default -
     */
    filterDisabled?: boolean;
    /**
     * @description 表头分组
     * @default -
     * @type SysTableColumnType[]
     */
    children?: HanldeColTableColumnType[];
}

export interface HanldeColTableProps extends Omit<BasicTableProps, 'columns'> {
    /**
     * @description 表格列的配置描述，具体项见下表
     * @default -
     * @type SysTableColumnType[]
     */
    columns?: HanldeColTableColumnType[];
    /**
     * @description 是否开启拖动改变列宽
     * @default true
     */
    resizable?: boolean;
    /**
     * @description 拖动改变列宽时是否自适应容器宽度
     * @default true
     */
    resizableFit?: boolean;
    /**
     * @description 列排序(local前端排序,remote后端排序,none不排序)
     * @default none
     */
    sort?: 'local' | 'remote' | 'none';
    /**
     * @description 列排序操作回调（用于远程数据排序）
     * @default -
     */
    onSortChange?: (field: string, order: string) => void;
    /**
     * @description 列过滤（true开启）
     * @default false
     */
    filter?: boolean;
    /**
     * @description 列过滤操作回调
     * @default -
     */
    onFilterChange?: () => void;
}

function HanldeColTable({
    columns,
    components,
    single = false,
    rowNumber = false,
    resizable = true,
    resizableFit = true,
    sort = 'none',
    filter = false,
    bordered = false,
    onSortChange,
    ...rest
}: HanldeColTableProps) {
    const sysTableRef = useRef<HTMLDivElement>(null);
    const handleCursorRef = useRef<any>();
    const dataRef = useRef<any>({});
    const [resizableCols, setResizableCols] = useState<any>();
    useEffect(() => {
        const offsetParent = sysTableRef.current?.querySelector('.ant-table');
        const handleCursor = document.createElement('div');
        handleCursor.className = 'handle-cursor';
        if (offsetParent) {
            offsetParent.append(handleCursor);
        }
        handleCursorRef.current = handleCursor;
    }, []);

    //表格宽度变化
    const [tableWidth, setTableWidth] = useState(0);
    function onTableWidthResize({ width }: { width: number }) {
        //复选框
        let tWidth = single ? width : width - 40;
        //行序号列
        tWidth = rowNumber ? tWidth - 55 : tWidth;
        //滚动条
        tWidth = tWidth - 18;
        //边框
        tWidth = bordered ? tWidth - 1 : tWidth;
        setTableWidth(tWidth);
    }

    //内部接管columns
    const [innerColumns, setInnerColumns] = useState<HanldeColTableColumnType[]>();
    useEffect(() => {
        setInnerColumns(columns);
    }, [columns]);

    //适应多层表头，获取最深层列配置
    const deepestCols = useMemo(() => {
        return innerColumns ? getDeepestTreeNode(innerColumns) : [];
    }, [innerColumns]);

    useEffect(() => {
        if (innerColumns && tableWidth) {
            let colWidths: number[];
            if (dataRef.current.newColWidths) {
                colWidths = dataRef.current.newColWidths;
                if (filter && resizableFit) {
                    colWidths = fitFilterColWidths(
                        dataRef.current.newColWidthMap,
                        deepestCols,
                        tableWidth,
                        columns || [],
                    );
                } else if (resizableFit) {
                    colWidths = fitColWidths(
                        dataRef.current.newColWidths,
                        tableWidth,
                        innerColumns,
                    );
                }
            } else {
                colWidths = initColWidths(deepestCols, tableWidth);
                if (resizableFit) {
                    colWidths = fitColWidths(colWidths, tableWidth, deepestCols);
                }
            }
            deepestCols.forEach((item, index) => {
                const minWidth: number = item.minWidth ? item.minWidth : 1;
                const width = colWidths[index];
                const nextWidth = index + 1 < colWidths.length ? colWidths[index + 1] : 0;
                const maxWidth = width + nextWidth;

                item.ellipsis = item.ellipsis === undefined ? true : item.ellipsis;
                item.width = width;
                item.minWidth = minWidth;
                item.maxWidth = maxWidth;
                item.onHeaderCell = (column: any) => {
                    //传给Cell的属性，再次从column取值一次，声明为局部变量，为了保持实时更新
                    const { width, minWidth, maxWidth, resizable: colResizable } = column;
                    return {
                        resizable: colResizable ?? resizable,
                        width,
                        minWidth,
                        maxWidth: resizableFit ? maxWidth : 2000,
                        disabled: resizableFit && colWidths.length === index + 1,
                        index,
                        sysTableRef,
                        handleCursorRef,
                        onResize: (index: number, width: number) => {
                            onCellResize(index, width, deepestCols);
                        },
                    };
                };
                //列排序
                item.sorter = handleSort(sort, item);
            });
            setResizableCols([...innerColumns, {}]);
        }
    }, [innerColumns, tableWidth]);

    function onCellResize(index: number, width: number, rCols: any[]) {
        let newColWidths: number[];
        if (resizableFit) {
            const deltaWidth = rCols[index].width - width;
            newColWidths = rCols.map((item, i) => {
                const itemWidth = item.width;
                if (i === index) {
                    return width;
                }
                if (i === index + 1) {
                    return itemWidth + deltaWidth;
                }
                return itemWidth;
            });
            const newColWidthMap: Record<string, number> = {};
            rCols.forEach((item, i) => {
                item.width = newColWidths[i];
                newColWidthMap[item.dataIndex as string] = item.width;
                const nextWidth = i + 1 < newColWidths.length ? newColWidths[i + 1] : 0;
                item.maxWidth = newColWidths[i] + nextWidth;
            });
            dataRef.current.newColWidths = newColWidths;
            dataRef.current.newColWidthMap = newColWidthMap;
        } else {
            rCols[index].width = width;
            newColWidths = rCols.map((item) => item.width);
        }
        dataRef.current.newColWidths = newColWidths;
        setResizableCols([...(innerColumns || []), {}]);
    }

    const onChange: HanldeColTableProps['onChange'] = (page, filters, sorter) => {
        //列排序回调
        if (!isArray(sorter)) {
            const { field, order } = sorter;
            onSortChange?.(field as string, order as string);
        }
    };

    //列过滤
    const filterItems = useMemo(() => {
        return columns ? getDeepestTreeNode(columns) : [];
    }, [columns]);
    const [filterKeys, setFilterKeys] = useState<string[]>();
    function onContextMenuFilter(e: React.MouseEvent) {
        e.preventDefault();
        const filterWin = show({
            width: 200,
            closable: false,
            footer: null,
            mask: false,
            maskClosable: true,
            content: (
                <ColumnsFilterMenu
                    items={filterItems}
                    onChange={onChange}
                    filterKeys={filterKeys}
                />
            ),
            style: { position: 'absolute', left: e.clientX, top: e.clientY },
        });
        function onChange(keys: string[]) {
            setFilterKeys(keys);
            filterWin.close();
            function columnsFilter(columns: HanldeColTableColumnType[]) {
                return columns.filter((column) => {
                    if (column.children) {
                        column.children = columnsFilter(column.children);
                    }
                    return column.dataIndex ? keys.includes(column.dataIndex as string) : true;
                });
            }
            setInnerColumns(columnsFilter(cloneDeep(columns) || []));
        }
    }
    return (
        <ResizeObserver onResize={onTableWidthResize}>
            <BasicTable
                ref={sysTableRef}
                columns={resizableCols}
                components={{
                    ...components,
                    header: {
                        cell: ResizableCell,
                    },
                }}
                single={single}
                rowNumber={rowNumber}
                onChange={onChange}
                showSorterTooltip={false}
                bordered={bordered}
                onHeaderRow={(record) => {
                    return {
                        onContextMenu: filter ? onContextMenuFilter : undefined,
                    };
                }}
                {...rest}
            />
        </ResizeObserver>
    );
}

export default HanldeColTable;
