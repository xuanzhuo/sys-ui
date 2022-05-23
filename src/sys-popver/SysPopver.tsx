import { Popover,PopoverProps } from 'antd';
import React from 'react';
/** 
 * 
 * content	卡片内容	ReactNode | () => ReactNode	-	
title	卡片标题	ReactNode | () => ReactNode	- 
*/
interface SysPopoverProps extends PopoverProps {
    content: React.ReactNode | (() => React.ReactNode);
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
