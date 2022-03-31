import React, { useState, useEffect, useRef} from 'react';
import './style/index.less';

/** SysTwoColumnLayoutProps */
export interface SysTwoColumnLayoutProps {
    /**
     * @description       是否可拖动改变面板宽度
     * @default           false
     */
    draggable?: boolean;
    /**
     * @description       记录拖动后改变的面板宽度
     * @default           无默认值（默认不记录,设置值时自动开启）
     */
    storageId?: string;
    /**
     * @description       是否可关闭面板
     * @default           false
     */
    closable?: boolean;
    /**
     * @description       左侧面板的默认宽度
     * @default           300
     */
    defaultWidth?: number;
    /**
     * @description       拖拽时,左侧面板的最小宽度
     * @default           100
     */
     leftMinWidth?: number;
     /**
     * @description       拖拽时,右侧面板的最小宽度
     * @default           100
     */
    rightMinWidth?: number;
    /**
     * @description       放置面板
     * @default           -
     */
    children: SysTwoColumnLayoutChildren;
}

/** 
 * SysTwoColumnLayoutChildren 
 * @memberof SysTwoColumnLayoutProps
*/
export interface SysTwoColumnLayoutChildren {
    /**
     * @description       放置左侧面板
     * @default           -
     */
    left: React.ReactNode;
    /**
     * @description       放置右侧面板
     * @default           -
     */
    right: React.ReactNode;
}

/** SysTwoColumnLayout */
function SysTwoColumnLayout({
    draggable,
    storageId,
    closable,
    defaultWidth = 300,
    leftMinWidth = 100,
    rightMinWidth = 100,
    children,
}:SysTwoColumnLayoutProps) {
    const [leftW, setLeftW] = useState(defaultWidth);
    useEffect(()=>{
        if(storageId){
            setLeftW(getStorageWidth())
        }
    },[])

    //容器
    const $container = useRef<HTMLDivElement>(null);
    const splitWidth = 10;

    function splitMouseDownHandle(e: React.MouseEvent) {
        e.preventDefault();
        //不可拖动
        if (!draggable) return;
        //面板关闭禁止拖动
        if (leftW === 0) return;
        const containerRect = $container.current!.getBoundingClientRect();
        let containerWidth = containerRect.width;
        let containerLeft = containerRect.left;
        let startX = e.pageX;
        function mouseMoveHandle(e: MouseEvent) {
            let moveX = e.pageX - startX;
            if (e.pageX <= containerLeft + leftMinWidth) {
                setLeftW(leftMinWidth);
            } else if (
                e.pageX >=
                containerLeft + containerWidth - splitWidth - rightMinWidth
            ) {
                setLeftW(containerWidth - splitWidth - rightMinWidth);
            } else {
                setLeftW(leftW + moveX);
            }
        }
        function mouseUpHandle(e: MouseEvent) {
            //缓存左侧面板宽度
            //只有拖拽时才记录
            setLeftW((preLeftW) => {
                if (storageId && Math.abs(e.pageX - startX) > 3) {
                    localStorage.setItem(`${storageId}`, `${preLeftW}`);
                }
                return preLeftW;
            });
            document.removeEventListener('mousemove', mouseMoveHandle);
            document.removeEventListener('mouseup', mouseUpHandle);
        }
        document.addEventListener('mousemove', mouseMoveHandle);
        document.addEventListener('mouseup', mouseUpHandle);
    }
    function arrowMouseDownHandle(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        toggleShow(isLeftPanelClosed());
    }

    function isLeftPanelClosed() {
        return leftW === 0;
    }

    function toggleShow(isShow: boolean) {
        if (isShow) {
            setLeftW(getStorageWidth());
        } else {
            setLeftW(0);
        }
    }

    function getStorageWidth(){
        if(storageId && localStorage.getItem(storageId)){
            return Number(localStorage.getItem(storageId))
        }
        return defaultWidth
    }

    return (
        <div className="sys-two-column-layout" ref={$container}>
            <div
                className="sys-two-column-layout-left"
                style={{ width: leftW }}
            >
                {children.left}
            </div>
            <div
                className="sys-two-column-layout-split"
                onMouseDown={splitMouseDownHandle}
                style={{cursor:draggable && !isLeftPanelClosed()?'col-resize':'default'}}
            >
                {closable && (
                    <i
                        className={`${
                            isLeftPanelClosed() ? 'arrow-right' : 'arrow-left'
                        }`}
                        onMouseDown={arrowMouseDownHandle}
                    ></i>
                )}
            </div>
            <div className="sys-two-column-layout-right">{children.right}</div>
        </div>
    );
}

function LeftPanel({children}:{children:React.ReactNode}) {
    return <div className="sys-two-column-layout-left-panel">{children}</div>;
}

function RightPanel({children}:{children:React.ReactNode}) {
    return <div className="sys-two-column-layout-right-panel">{children}</div>;
}

SysTwoColumnLayout.LeftPanel = LeftPanel;
SysTwoColumnLayout.RightPanel = RightPanel;
export default SysTwoColumnLayout;


