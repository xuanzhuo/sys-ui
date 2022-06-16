/**
 * 列宽拖拽表格
 * @author sizz 2022-04-25
 */
import React, { useRef, useState, useEffect } from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import SysTable, { SysTableProps, SysTableColumnType } from './SysTable';

export type { SysTableColumnType };

function ResizableCell({
    width,
    minWidth,
    index,
    total,
    sysTableRef,
    handleCursorRef,
    onResize,
    ...rest
}: any) {
    if (index === undefined) {
        return <th {...rest}></th>;
    }
    const innerRef = useRef<any>({});
    const [rWidth, setrWidth] = useState(width);

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
    rowNumber = true,
    ...rest
}: SysTableProps) {
    const sysTableRef = useRef<HTMLDivElement>(null);
    const handleCursorRef = useRef<any>();
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

    useEffect(() => {
        if (columns) {
            const offsetParent = sysTableRef.current?.querySelector('.ant-table');
            const resizableCols = columns.map((item, index) => {
                const minWidth: number = item.minWidth ? item.minWidth : 0;
                let width = minWidth;
                if (typeof item.width === 'number') {
                    width = item.width;
                }
                if (typeof item.width === 'string' && offsetParent) {
                    let tWidth = single ? offsetParent.clientWidth : offsetParent.clientWidth - 40;
                    tWidth = rowNumber ? tWidth - 55 : tWidth;
                    const hasScrollbar = offsetParent.querySelector('.ant-table-cell-scrollbar');
                    tWidth = hasScrollbar ? tWidth - 17 : tWidth;
                    width = tWidth * toNum(item.width);
                }
                return {
                    ...item,
                    width,
                    onHeaderCell: (column: any) => {
                        return {
                            width,
                            minWidth,
                            index,
                            total: columns.length,
                            sysTableRef,
                            handleCursorRef,
                            onResize: onResize,
                        };
                    },
                };
            });
            setResizableCols([...resizableCols, {}]);
            function onResize(index: number, width: number) {
                if (resizableCols) {
                    const ncols = [...resizableCols];
                    ncols[index].width = width;
                    setResizableCols([...ncols, {}]);
                }
            }
        }
    }, [columns]);

    return (
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
    );
}

export default ResizableColTable;
