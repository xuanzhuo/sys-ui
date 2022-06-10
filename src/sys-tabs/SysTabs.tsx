/**
 * Tabs布局
 * @author sizz 2022-04-02
 */

import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import SysTabPane, { SysTabPaneProps } from './TabPane';

import './style/index.less';

export interface SysTabsProps {
    /**
     * @description       激活的标签页
     * @default           0
     */
    activeIndex?: number;
    /**
     * @description       记录激活的标签页
     * @default           无默认值（默认不记录,设置值时自动开启）
     */
    storageId?: string;
    /**
     * @description 点击标签刷新当前标签页（默认开启）
     * @default true
     */
    tabClickRefresh?:boolean;
    /**
     * @description 标签页是否可关闭
     * @default false
     */
    tabClosable?:boolean;
    /**
     * @description 页签位置
     * @default top
     */
    tabPosition?:'top'|'left';
    /**
     * @description 标签关闭回调
     * @default -
     */
    onClosed?:(index:number)=>void;
    /**
     * @description 放置tab页签项
     * @default -
     */
    children: React.ReactElement<SysTabPaneProps>[] | React.ReactElement<SysTabPaneProps>;
}

function SysTabs({
    storageId,
    activeIndex = 0,
    tabClickRefresh = true,
    tabClosable = false,
    tabPosition = 'top',
    onClosed,
    children 
}: SysTabsProps) {
    const [activeKey, setActiveKey] = useState('0');
    useEffect(()=>{
        function getDefaultIndex(){
            if(storageId && localStorage.getItem(storageId)){
                return String(localStorage.getItem(storageId));
            }
            return String(activeIndex)
        }
        setActiveKey(getDefaultIndex());
    },[activeIndex])
    
    useEffect(()=>{
        if(storageId){
            localStorage.setItem(storageId,activeKey)
        }
    },[activeKey])

    const [isShow, setIsShow] = useState(true);
    useEffect(() => {
        setIsShow(true);
    }, [isShow]);

    const [tabPanes, setTabPanes] = useState<SysTabPaneProps[]>([]);
    useEffect(() => {
        const childrenArr = children instanceof Array?children:[children];
        const tabPanes = childrenArr
            .filter((node: React.ReactNode) => {
                return (
                    React.isValidElement(node) &&
                    typeof node.type === 'function' 
                    //&&node.type.name === 'SysTabPane'
                );
            })
            .map((node: React.ReactElement) => {
                return {
                    ...node.props,
                };
            });
        setTabPanes(tabPanes);
        if(Number(activeKey) >= tabPanes.length){
            setActiveKey('0')
        }
    },[children,activeKey]);

    function onChange(key: string) {
        setActiveKey(key);
    }

    function onTabClick(key: string) {
        if(tabClickRefresh) setIsShow(false);
    }

    function onEdit(key:any){
        onClosed?.(Number(key))
    }
    
    return (
        <Tabs
            hideAdd
            className="sys-tabs"
            activeKey={activeKey}
            onChange={onChange}
            onTabClick={onTabClick}
            type={tabClosable?'editable-card':'line'}
            tabPosition={tabPosition}
            onEdit={onEdit}
        >
            {tabPanes.map((item: SysTabPaneProps, index: number) => {
                return (
                    <Tabs.TabPane tab={item.title} key={index}>
                        {isShow && Number(activeKey) === index && item.children}
                    </Tabs.TabPane>
                );
            })}
        </Tabs>
    );
}

SysTabs.TabPane = SysTabPane;
export default SysTabs;
