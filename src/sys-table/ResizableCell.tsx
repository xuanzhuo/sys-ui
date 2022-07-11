import React, { useRef, useState, useEffect } from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';
function ResizableCell({
    resizable,
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
    if (index === undefined || disabled || !resizable) {
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
export default ResizableCell