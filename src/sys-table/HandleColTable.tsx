/**
 * 列加工处理（列宽拖拽，列排序，列过滤）表格
 * @author sizz 2022-04-25
 */
import React, { useRef, useState, useEffect } from 'react';
import { isEqual } from 'lodash';
import { FilterFilled } from '@ant-design/icons';
import ResizeObserver from 'rc-resize-observer';
import BasicTable, { BasicTableProps, BasicTableColumnType } from './BasicTable';
import ResizableCell from './ResizableCell';
import {
    initColWidths,
    fitColWidths,
    handleSort,
    handleFilter,
    fitFilterColWidths,
} from './handleCol';
import { isArray } from 'lodash';

export interface HanldeColTableColumnType extends BasicTableColumnType {
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
}

export interface HanldeColTableProps extends Omit<BasicTableProps, 'columns'> {
    /**
     * @description 表格列的配置描述，具体项见下表
     * @default -
     * @type ColumnsType[]
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
    onFilterChange?:()=>void
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
    onSortChange,
    ...rest
}: HanldeColTableProps) {
    const sysTableRef = useRef<HTMLDivElement>(null);
    const handleCursorRef = useRef<any>();
    const dataRef = useRef<any>({});
    const [resizableCols, setResizableCols] = useState<any>([{}]);
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
    function onResize({ width }: { width: number }) {
        //复选框
        let tWidth = single ? width : width - 40;
        //行序号列
        tWidth = rowNumber ? tWidth - 55 : tWidth;
        //滚动条
        tWidth = tWidth - 18;
        setTableWidth(tWidth);
    }
    //内部接管columns
    const [innerColumns, setInnerColumns] = useState<HanldeColTableColumnType[]>();
    useEffect(() => {
        setInnerColumns(columns);
    }, [columns]);

    useEffect(() => {
        if (innerColumns && tableWidth) {
            let colWidths: number[];
            if (dataRef.current.newColWidths) {
                colWidths = dataRef.current.newColWidths;
                if (filter && resizableFit) {
                    colWidths = fitFilterColWidths(dataRef.current.newColWidthMap, innerColumns, tableWidth,columns||[]);
                }else if(resizableFit) {
                    colWidths = fitColWidths(dataRef.current.newColWidths, tableWidth);
                }
            } else {
                colWidths = initColWidths(innerColumns, tableWidth);
                if (filter && resizableFit) {
                    colWidths = fitColWidths(colWidths, tableWidth);
                }
            }
            const rCols = innerColumns.map((item, index) => {
                const minWidth: number = item.minWidth ? item.minWidth : 1;
                const width = colWidths[index];
                const nextWidth = index + 1 < colWidths.length ? colWidths[index + 1] : 0;
                const maxWidth = width + nextWidth;
                const filterConfig = filter
                    ? {
                          filterDropdown: handleFilter(item, columns || []),
                          filteredValue: innerColumns.map((item) => `${item.dataIndex}`),
                          filterMultiple: false,
                          filterIcon: () => {
                              return <FilterFilled style={{ color: '#bfbfbf' }} />;
                          },
                      }
                    : {};
                return {
                    ellipsis: item.ellipsis === undefined ? true : item.ellipsis,
                    sorter: handleSort(sort, item),
                    ...filterConfig,
                    ...item,
                    width,
                    minWidth,
                    maxWidth,
                    onHeaderCell: (column: any) => {
                        const { width, minWidth, maxWidth } = column;
                        return {
                            resizable,
                            width,
                            minWidth,
                            maxWidth: resizableFit ? maxWidth : 2000,
                            disabled: resizableFit && colWidths.length === index + 1,
                            index,
                            sysTableRef,
                            handleCursorRef,
                            onResize: onResize,
                        };
                    },
                };
            });
            setResizableCols([...rCols, {}]);

            function onResize(index: number, width: number) {
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
                setResizableCols([...rCols, {}]);
            }
        }
    }, [innerColumns, tableWidth]);

    const onChange: HanldeColTableProps['onChange'] = (page, filters, sorter) => {
        //列排序回调
        if (!isArray(sorter)) {
            const { field, order } = sorter;
            onSortChange?.(field as string, order as string);
        }
        //列过滤
        const filterValues = Object.values(filters) as string[][];
        if (filterValues && filterValues.length && columns) {
            const filterDataIndexs = filterValues[filterValues.length - 1];
            const filterColumns = columns.filter((item) => {
                return filterDataIndexs.includes(item.dataIndex ? (item.dataIndex as string) : '');
            });
            if(!isEqual(innerColumns, filterColumns) ){
                setInnerColumns(filterColumns);
            }
        }
    };
    return (
        <ResizeObserver onResize={onResize}>
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
                {...rest}
            />
        </ResizeObserver>
    );
}

export default HanldeColTable;
