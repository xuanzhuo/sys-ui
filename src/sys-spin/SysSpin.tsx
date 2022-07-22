import React, { ReactNode } from 'react';
import { Spin, SpinProps } from 'antd';

export interface SysSpinProps extends SpinProps {
    /**
     * @description 是否为加载中状态
     * @default true
     */
    spinning?: boolean;
    /**
     * @description 当作为包裹元素时，可以自定义描述文案
     * @default -
     */
    tip?: string;
    children?: ReactNode;
}

function SysSpin({ ...rest }: SysSpinProps) {
    return <Spin {...rest} />;
}

export default SysSpin;
