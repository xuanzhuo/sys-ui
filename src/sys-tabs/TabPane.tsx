/**
 * Tabs布局TabPane
 * @author sizz 2022-04-02
 */
import React from 'react';

export interface SysTabPaneProps {
    /**
     * @description tab页标题
     * @default -
     */
    title: string;
    /**
     * @description 放置tab页签项
     * @default -
     */
    children: React.ReactNode;
}

function SysTabPane({ title, children }: SysTabPaneProps) {
    return <></>;
}

export default SysTabPane;
