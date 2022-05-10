/**
 * 收集数据弹出框 methods
 * @author sizz 2022-04-14
 */
import React from 'react';
import show,{ShowProps} from './show';
interface ButtonProps {
    /** 按钮类型 */
    type?: 'primary' | 'default';
    /** 按钮名称 */
    text?: string;
    /** 点击回调 */
    onClick?: (close: () => void,customInfo:any)=>void;
}
export interface CollectProps extends Omit<ShowProps,'width'|'content'|'type'|'onOk'|'wrapClassName'|'buttonsProps'>{
    /**
     * @description 宽度
     * @default 710
     */
    width?:number
    /**
     * @description 确认回调
     * @default -
     */
    onOk?: (close: () => void,customInfo:any) => void;
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
    /**
     * @description 自定义底部按钮，用于扩展footer（footer内部都是按钮时），优先级低于footer
     * @default null
     */
    buttonsProps?:ButtonProps[],
}

export function collect({
    width = 710,
    source,
    buttonsProps,
    ...rest
}:CollectProps){
    const SourceComp = source;
    if(buttonsProps){
        const buttons = buttonsProps.map((item)=>{
            const {text,type,onClick} = item;
            return {
                type,
                text,
                onClick:(customInfo:any)=>{
                    onClick?.(win.close,customInfo)
                }
            }
        })
        const win = show({
            width,
            type:"collect",
            content:SourceComp,
            buttonsProps:buttons,
            ...rest
        })
    }else{
        show({
            width,
            type:"collect",
            content:SourceComp,
            ...rest
        })
    }
}