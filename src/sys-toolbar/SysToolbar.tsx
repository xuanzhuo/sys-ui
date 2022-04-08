/**
 * 工具栏
 * @author sizz 2022-04-07
 */
import React, { useEffect, useRef, useState } from 'react';
import './style/index.less';
import ResizeObserver from 'rc-resize-observer';

export interface SysToolbarProps {
    /**
     * @description 外层容器样式
     * @default -
     */
    style?: React.CSSProperties;
    /**
     * @description 滚动模式时，每次移动的距离
     * @default 30
     */
    moveStep?: number;
    children?: React.ReactNode;
}

function SysToolbar({ style, moveStep = 30, children }: SysToolbarProps) {
    const [toolbarWidth, setToolbarWidth] = useState(0);
    function onResize({ width }: { width: number }) {
        setToolbarWidth(width);
    }

    const [deldaScroll, setDeldaScroll] = useState(0);
    const $scrollWrapper = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const deldaScroll =
            $scrollWrapper.current!.scrollWidth - $scrollWrapper.current!.clientWidth;
        if (toolbarWidth !== 0) {
            setDeldaScroll(deldaScroll);
            setScrollLeft($scrollWrapper.current!.scrollLeft);
        }
    }, [toolbarWidth]);

    const [scrollLeft, setScrollLeft] = useState(0);
    useEffect(() => {
        $scrollWrapper.current!.scrollLeft = scrollLeft;
    }, [scrollLeft]);
    function moveLeft() {
        setScrollLeft(scrollLeft - moveStep);
    }
    function moveRight() {
        setScrollLeft(scrollLeft + moveStep);
    }

    function canMoveLeft() {
        return scrollLeft > 0;
    }
    function canMoveRight() {
        return deldaScroll > 0 && scrollLeft < deldaScroll;
    }

    return (
        <ResizeObserver onResize={onResize}>
            <div className="sys-toolbar" style={style}>
                <div className="sys-toolbar-left">
                    {canMoveLeft() && <i className="arrow-icon arrow-left" onClick={moveLeft}></i>}
                </div>
                <div className="sys-toolbar-scroll-wrapper" ref={$scrollWrapper}>
                    {children}
                </div>
                <div className="sys-toolbar-right">
                    {canMoveRight() && (
                        <i className="arrow-icon arrow-right" onClick={moveRight}></i>
                    )}
                </div>
            </div>
        </ResizeObserver>
    );
}

export default SysToolbar;
