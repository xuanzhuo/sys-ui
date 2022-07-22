import React from 'react';
import { Progress, ProgressProps } from 'antd';

export interface SysProgressProps extends ProgressProps {
    /**
     * @description 百分比
     * @default 0
     */
    percent?: number;
    /**
     * @description 是否显示进度数值或状态图标
     * @default true
     */
    showInfo?: boolean;
    // /**
    //  * @description 进度条的色彩
    //  * @default -
    //  */
    // strokeColor?: string;
}

function SysProgress({ ...rest }: SysProgressProps) {
    return <Progress {...rest} />;
}

export default SysProgress;
