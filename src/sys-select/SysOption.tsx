import { Select } from 'antd';
let { Option } = Select;
import React from 'react'
interface OptionTypes {
    key?: string | number;
    /**
     * @description 是否禁用
     */
    disabled?: boolean;
    /**
     * @description 默认根据此属性值进行筛选
     */
    value: string | number;
    /**
     * @description 选项上的原生 title 提示
     */
    title?: string;
    /**
     * @description Option 器类名
     */
    className?: string;
    style?: React.CSSProperties;
    label?: React.ReactNode;
    children?: React.ReactNode;
}

function SysOption({children, ...rest }: OptionTypes) {
    return <Option {...rest}>{children}</Option>;
}
export default SysOption