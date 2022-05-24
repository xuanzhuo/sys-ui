import { Popover,PopoverProps } from 'antd';
import React from 'react';

interface SysPopoverProps extends PopoverProps {
    /**
     * @description 卡片内容
     * @default ReactNode | () => ReactNode	
     */
    content: React.ReactNode | (() => React.ReactNode);
    /**
     * @description 卡片标题
     * @default ReactNode | () => ReactNode
     */
    title: React.ReactNode | (() => React.ReactNode);
    children?: React.ReactNode;
}
const SysPopover: React.FC<SysPopoverProps> = ({ content, title, children,...rest }: SysPopoverProps) => {
    return (
        <Popover content={content || <div></div>} title={title || <div></div>} {...rest}>
            {children}
        </Popover>
    );
};
export default SysPopover;
