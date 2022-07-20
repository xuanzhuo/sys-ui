import React, { ReactNode } from 'react';
import { Tooltip } from 'antd';
import { TooltipPropsWithTitle } from 'antd/lib/tooltip';

export interface SysTooltipProps extends Omit<TooltipPropsWithTitle, 'color'> {
    /**
     * @description 提示文字
     * @default -
     * @type ReactNode | () => ReactNode
     */
    title: ReactNode | (() => ReactNode);
    /**
     * @description 背景颜色
     * @default black
     * @type string
     */
    bgColor?: TooltipPropsWithTitle['color'];
    /**
     * @description 字体颜色
     * @default white
     */
    color?: string;
    children?: React.ReactNode;
}

function SysTooltip({ title, children, bgColor, color, ...rest }: SysTooltipProps) {
    return (
        <Tooltip
            title={title}
            placement="bottomLeft"
            overlayStyle={{ maxWidth: 1000 }}
            overlayInnerStyle={{ color: color }}
            autoAdjustOverflow={true}
            color={bgColor}
            {...rest}
        >
            {children}
        </Tooltip>
    );
}

export default SysTooltip;
