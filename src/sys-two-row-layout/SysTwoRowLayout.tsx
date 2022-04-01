/**
 * 上下布局
 * @author sizz 2022-04-01
 */
import React, { useRef, useState,useEffect } from 'react';
import './style/index.less';

export interface SysTwoRowLayoutProps {
    /**
     * @description       是否可拖动改变面板高度
     * @default           false
     */
    draggable?: boolean;
    /**
     * @description       记录拖动后改变的面板高度
     * @default           无默认值（默认不记录,设置值时自动开启）
     */
    storageId?: string;
    /**
     * @description       是否可关闭面板
     * @default           false
     */
    closable?: boolean;
    /**
     * @description       下方面板的默认高度
     * @default           300
     */
    defaultHeight?: number;
    /**
     * @description       拖拽时,上方面板的最小高度
     * @default           100
     */
    topMinHeight?: number;
    /**
     * @description       拖拽时,下方面板的最小高度
     * @default           100
     */
    bottomMinHeight?: number;
    /**
     * @description       是否隐藏下方面板
     * @default           true
     */
    isHideBottom?:boolean;
    /**
     * @description       放置面板
     * @default           -
     */
    children: SysTwoRowLayoutChildren;
    /**
     * @description       下方面板显隐回调
     * @default           -
     */
    onHideBottomChange?:(isHideBottom:boolean)=>void
}

/** SysTwoRowLayoutChildren */
export interface SysTwoRowLayoutChildren {
    /**
     * @description       放置上方面板
     * @default           -
     */
    top: React.ReactNode;
    /**
     * @description       放置下方面板
     * @default           -
     */
    bottom: React.ReactNode;
}

function SysTwoRowLayout({
    draggable = false,
    storageId,
    closable = false,
    defaultHeight = 300,
    topMinHeight = 100,
    bottomMinHeight = 100,
    isHideBottom = false,
    children,
    onHideBottomChange,
}: SysTwoRowLayoutProps) {
    const splitHeight = 10;
    const $container = useRef<HTMLDivElement>(null);

    const [bottomH, setBottomH] = useState(defaultHeight);
    useEffect(()=>{
        if(isHideBottom){
            setBottomH(0)
        }else{
            setBottomH(getStorageHeight())
        }
    },[isHideBottom])

    function splitMouseDownHandle(e: React.MouseEvent) {
        e.preventDefault();
        //不可拖动
        if (!draggable) return;
        //面板关闭禁止拖动
        if (isBottomPanelClosed()) return;
        const containerRect = $container.current!.getBoundingClientRect();
        let containerHeight = containerRect.height;
        let containerTop = containerRect.top;
        let containerBottom = containerRect.bottom;
        let documentScrollTop = document.documentElement.scrollTop;
        let startY = e.pageY;
        const mouseMoveHandle = (e: MouseEvent) => {
            let moveY = e.pageY - startY;
            if (e.pageY <= topMinHeight + containerTop + documentScrollTop + splitHeight) {
                setBottomH(containerHeight - topMinHeight - splitHeight);
            } else if (
                e.pageY >=
                containerBottom + documentScrollTop - bottomMinHeight
            ) {
                setBottomH(bottomMinHeight);
            } else {
                setBottomH(bottomH - moveY);
            }
        };
        const mouseUpHandle = (e: MouseEvent) => {
            //缓存下方面板高度
            //只有拖拽时才记录
            setBottomH((preBottomH) => {
                if (storageId && Math.abs(e.pageY - startY) > 3) {
                    localStorage.setItem(`${storageId}`, `${preBottomH}`);
                }
                return preBottomH;
            });
            document.removeEventListener('mousemove', mouseMoveHandle);
            document.removeEventListener('mouseup', mouseUpHandle);
        };
        document.addEventListener('mousemove', mouseMoveHandle);
        document.addEventListener('mouseup', mouseUpHandle);
    }
    function arrowMouseDownHandle(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        toggleShow(isBottomPanelClosed());
    } 

    function toggleShow(isShow: boolean) {
        if (isShow) {
            setBottomH(getStorageHeight());
            onHideBottomChange?.(false)
        } else {
            setBottomH(0);
            onHideBottomChange?.(true)
        }
    }

    function getStorageHeight(){
        if(storageId && localStorage.getItem(storageId)){
            return Number(localStorage.getItem(storageId))
        }
        return defaultHeight
    }

    function isBottomPanelClosed() {
        return bottomH === 0;
    }

    return (
        <div className="sys-two-row-layout" ref={$container}>
            <div className="sys-two-row-layout-top">
                {children.top}
            </div>
            <div
                className="sys-two-row-layout-split"
                style={{ cursor: draggable && !isBottomPanelClosed() ? 'row-resize' : 'default' }}
                onMouseDown={splitMouseDownHandle}
            >
                {closable && (
                    <i
                        className={`${isBottomPanelClosed() ? 'arrow-top' : 'arrow-bottom'}`}
                        onMouseDown={arrowMouseDownHandle}
                    ></i>
                )}
            </div>
            <div 
                className="sys-two-row-layout-bottom"
                style={{height: bottomH}}
            >
                {children.bottom}
            </div>
        </div>
    );
}
export default SysTwoRowLayout;
