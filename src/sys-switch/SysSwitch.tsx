import React,{ReactNode} from 'react';
import { Switch, SwitchProps } from 'antd';

export interface SysSwitchProps extends SwitchProps {
    /**
     * @description 指定当前是否选中
     * @default false
     */
    checked?:boolean
    /**
     * @description 是否禁用
     * @default false
     */
    disabled?:boolean
    /**
     * @description 选中时的内容
     * @default -
     */
    checkedChildren?:ReactNode
    /**
     * @description 非选中时的内容
     * @default -
     */
    unCheckedChildren?:ReactNode
    /**
     * @description 变化时回调函数
     * @default -
     * @type function(checked: boolean, event: Event)
     */
    onChange?:SwitchProps['onChange']
}

function SysSwitch({ ...rest }: SysSwitchProps) {
    return <Switch {...rest} />;
}

export default SysSwitch;
