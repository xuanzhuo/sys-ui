/**
 * 列宽拖拽表格
 * @author sizz 2022-04-25
 */
import React, { useRef, useState, useEffect } from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import SysTable, { SysTableProps, SysTableColumnType } from './SysTable';
import ResizeObserver from 'rc-resize-observer';
export type { SysTableColumnType };

function ResizableCell({
    width,
    minWidth,
    maxWidth,
    index,
    disabled,
    sysTableRef,
    handleCursorRef,
    onResize,
    ...rest
}: any) {
    if (index === undefined || disabled) {
        return <th {...rest}></th>;
    }
    const innerRef = useRef<any>({});
    const [rWidth, setrWidth] = useState(width);
    useEffect(() => {
        setrWidth(width);
    }, [width]);

    function onResizeStart(e: any, { node, size: { width } }: ResizeCallbackData) {
        const nodeRect = node?.getBoundingClientRect();
        const sysTableRect = sysTableRef.current.getBoundingClientRect();
        const handleCursorLeft = nodeRect.right - sysTableRect.left - 5;
        innerRef.current.startWidth = width;
        innerRef.current.startLeft = handleCursorLeft;
        handleCursorRef.current.style.left = handleCursorLeft + 'px';
        handleCursorRef.current.style.display = 'block';
    }
    function onResizeHandler(e: any, { size: { width } }: ResizeCallbackData) {
        const { startWidth, startLeft } = innerRef.current;
        const deltaWidth = width - startWidth;
        const handleCursorLeft = startLeft + deltaWidth;
        handleCursorRef.current.style.left = handleCursorLeft + 'px';
        setrWidth(width);
    }
    function onResizeStop(e: any, { size: { width } }: ResizeCallbackData) {
        onResize?.(index, width);
        handleCursorRef.current.style.display = 'none';
    }
    const MyHandle = React.forwardRef((props: any, ref) => {
        const { handleAxis, ...restProps } = props;
        return (
            <div
                ref={ref as React.LegacyRef<HTMLDivElement>}
                className={`react-resizable-handle`}
                {...restProps}
            />
        );
    });

    return (
        <Resizable
            width={rWidth}
            height={20}
            onResizeStart={onResizeStart}
            onResize={onResizeHandler}
            onResizeStop={onResizeStop}
            minConstraints={[minWidth, 20]}
            maxConstraints={[maxWidth, 20]}
            handle={<MyHandle />}
        >
            <th {...rest}></th>
        </Resizable>
    );
}

function toNum(percent: string) {
    var num = Number(percent.replace('%', ''));
    return num / 100;
}
function ResizableColTable({
    columns,
    components,
    single = false,
    rowNumber = false,
    resizableFit = true,
    ...rest
}: SysTableProps) {
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
        setTableWidth(width);
    }
    //初始化列宽
    function initColWidths(columns: SysTableColumnType[], tWidth: number) {
        return columns.map((item) => {
            let width = 1;
            if (typeof item.width === 'number') {
                width = item.width;
            }
            if (typeof item.width === 'string') {
                width = tWidth * toNum(item.width);
            }
            return width;
        });
    }

    //计算自适应列宽
    function fitColWidths(colWidths: number[], tWidth: number) {
        const totalWidth = colWidths.reduce((sum, item) => {
            return sum + item;
        });
        return colWidths.map((item) => {
            return (item / totalWidth) * tWidth;
        });
    }

    useEffect(() => {
        if (columns && tableWidth) {
            //复选框
            let tWidth = single ? tableWidth : tableWidth - 40;
            //行序号列
            tWidth = rowNumber ? tWidth - 55 : tWidth;
            //滚动条
            tWidth = tWidth - 18;
            let colWidths: number[];
            if (dataRef.current.newColWidths) {
                colWidths = dataRef.current.newColWidths;
                if (resizableFit) {
                    colWidths = fitColWidths(dataRef.current.newColWidths, tWidth);
                }
            } else {
                colWidths = initColWidths(columns, tWidth);
            }
            const rCols = columns.map((item, index) => {
                const minWidth: number = item.minWidth ? item.minWidth : 1;
                const width = colWidths[index];
                const nextWidth = index + 1 < colWidths.length ? colWidths[index + 1] : 0;
                const maxWidth = width + nextWidth;
                return {
                    ...item,
                    width,
                    minWidth,
                    maxWidth,
                    onHeaderCell: (column: any) => {
                        const { width, minWidth, maxWidth } = column;
                        return {
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
                    rCols.forEach((item, i) => {
                        item.width = newColWidths[i];
                        const nextWidth = i + 1 < newColWidths.length ? newColWidths[i + 1] : 0;
                        item.maxWidth = newColWidths[i] + nextWidth;
                    });
                    dataRef.current.newColWidths = newColWidths;
                } else {
                    rCols[index].width = width;
                    newColWidths = rCols.map((item) => item.width);
                }
                dataRef.current.newColWidths = newColWidths;
                setResizableCols([...rCols, {}]);
            }
        }
    }, [columns, tableWidth]);

    return (
        <ResizeObserver onResize={onResize}>
            <SysTable
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
                {...rest}
            />
        </ResizeObserver>
    );
}

export default ResizableColTable;
