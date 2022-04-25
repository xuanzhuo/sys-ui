import React from 'react';
import { Checkbox } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox/Group';
let { Group } = Checkbox;

/**
 * defaultValue	默认选中的选项	string[]	[]	
disabled	整组失效	boolean	false	
name	CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性	string	-	
options	指定可选项	string[] | number[] | Option[]	[]	
value	指定选中的选项	string[]	[]	
onChange	变化时回调函数
 */
interface SysGroupProps extends CheckboxGroupProps {
    /**
     * @description 默认选中的选项
     * @default []
     * @type string | number | boolean []
     */
    defaultValue?: CheckboxGroupProps['defaultValue'];
    /**
     * @description 整组失效
     * @default false
     */
    disabled?: boolean;
    /**
     * @description CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性
     * @default  -
     */
    name?: string;
    /**
     * @description 指定可选项
     * @default []
     * @type string[] | number[] | Option[]
     */
    options?: CheckboxGroupProps['options'];
    /**
     * @description 指定选中的选项
     * @default []
     * @type string[] | number[] | Option[]
     */
    value?: CheckboxGroupProps['value'];
    /**
     * @description 变化时回调函数
     * @type (e)=>void
     */
    onChange?: CheckboxGroupProps['onChange'];
    children?: React.ReactNode;
}

function SysGroup({ children, ...rest }:SysGroupProps) {
    return <Group {...rest}>{children}</Group>;
}

export default SysGroup