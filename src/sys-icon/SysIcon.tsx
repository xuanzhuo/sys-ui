import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

export interface SysIconProps {
    /**
     * @description 图标名称（iconfont项目中的图标名称(省略icon-)）
     * @default -
     */
    name?: string;
    /**
     * @description 点击事件
     * @default -
     */
    onClick?: React.MouseEventHandler;
    /**
     * @description 是否有旋转动画
     * @default false
     */
    spin?: boolean;
}
const scriptUrl = [
    '//at.alicdn.com/t/font_2271916_zd47uy9hsc.js',
    '//at.alicdn.com/t/font_2242499_m2x1ysrno0o.js',
];

const IconFont = createFromIconfontCN({ scriptUrl });

const SysIcon: React.FC<SysIconProps> = ({ name, onClick, ...rest }) => {
    return <IconFont type={`icon-${name}`} onClick={onClick} {...rest} />;
};

export default SysIcon;
