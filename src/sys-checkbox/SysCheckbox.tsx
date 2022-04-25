import { Checkbox, CheckboxProps } from 'antd';
import React from 'react';
import SysGroup from './Group'
/**
 * autoFocus	自动获取焦点	boolean	false	
checked	指定当前是否选中	boolean	false	
defaultChecked	初始是否选中	boolean	false	
disabled	失效状态	boolean	false	
indeterminate	设置 indeterminate 状态，只负责样式控制	boolean	false	
onChange	变化时回调函数	function(e:Event)
 */
interface SysCheckboxProps extends CheckboxProps {
    /**
     * @description 自动获取焦点
     * @default false
     */
    autoFocus?: boolean;
    /**
     * @description 指定当前是否选中
     * @default false
     */
    checked?: boolean;
    /**
     * @description 初始是否选中
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * @description 失效状态
     * @default false
     */
    disabled?: boolean;
    /**
     * @description 设置 indeterminate 状态，只负责样式控制
     * @default false
     */
    indeterminate?: boolean;
    /**
     * @description 变化时回调函数
     * @default -
     */
    onChange?: CheckboxProps['onChange'];
    children?: React.ReactNode;
}

function SysCheckbox({ children, ...rest }: SysCheckboxProps) {
    return <Checkbox {...rest}>{children}</Checkbox>;
}
SysCheckbox.Group = SysGroup 
export default SysCheckbox
