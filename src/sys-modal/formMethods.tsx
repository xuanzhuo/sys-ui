/**
 * 收集数据弹出框 methods
 * @author sizz 2022-04-14
 */
import React from 'react';
import show,{ShowProps} from './show';

export interface CollectProps extends Omit<ShowProps,'width'|'content'|'type'|'onOk'|'wrapClassName'>{
    /**
     * @description 宽度
     * @default 710
     */
    width?:number
    /**
     * @description 确认回调
     * @default -
     */
    onOk?: (close: () => void,data:any) => void;
    /**
     * @description 数据源组件（class组件）
     * @default -
     */
    source:React.ComponentClass
    /**
     * @description 数据来源组件属性
     * @default -
     */
    sourceProps?: object;
}

export function collect({
    width = 710,
    source,
    ...rest
}:CollectProps){
    const SourceComp = source;
    show({
        width,
        type:"collect",
        content:SourceComp,
        ...rest
    })
}