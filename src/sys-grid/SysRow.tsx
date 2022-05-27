import { Row, RowProps } from 'antd';
import React from 'react';
interface SysRowProps extends RowProps {
    /**
     * @description 垂直对齐方式
     * @default top
     * @type 	top | middle | bottom
     */
    align?: 'top' | 'middle' | 'bottom';
    /**
     * @description 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]
     * @default 0
     * @type number | object | array
     */
    gutter?: RowProps['gutter'];
    /**
     * @description 水平排列方式
     * @default start
     * @type start | end | center | space-around | space-between | space-evenly
     */
    justify?: RowProps['justify'];
    /**
     * @description 是否自动换行
     * @default true
     * @type boolean
     */
    wrap?: boolean;
}
const SysRow: React.FC<SysRowProps> = ({ children, ...rest }) => {
    return <Row {...rest}>{children}</Row>;
};
export default SysRow;
