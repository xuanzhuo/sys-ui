/**
 * 收集数据弹出框
 * @author sizz 2022-04-14
 */
import React, { useRef } from 'react';
import SysModal, { SysModalProps } from './SysModal';

export interface CollectModalProps extends SysModalProps {
    /**
     * @description 宽度
     * @default 710
     */
    width?: number;
    /**
     * @description 数据来源组件
     * @default -
     */
    onOk: (data?:any) => void;
    /**
     * @description 数据来源组件
     * @default -
     */
    source?: React.ComponentClass;
    /**
     * @description 数据来源组件属性
     * @default -
     */
    sourceProps?: object;
}
interface SourceCompRef extends React.Component {
    submit?: (cb?: (data: any) => void) => void;
}

function CollectModal({ source, onOk,sourceProps,...rest }: CollectModalProps) {
    if (!source) return <SysModal visible={true} onOk={okHandler} {...rest} />;

    const sourceCompRef = useRef<SourceCompRef>(null);
    const SourceComp = source;
    function okHandler() {
        if(sourceCompRef.current?.submit){
            sourceCompRef.current?.submit?.((data) => {
                onOk?.(data);
            });
        }else{
            onOk?.();
        }
    }
    return (
        <SysModal visible={true} onOk={okHandler} {...rest}>
            <SourceComp ref={sourceCompRef} {...sourceProps}/>
        </SysModal>
    );
}

export default CollectModal;
