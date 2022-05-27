import { Col, ColProps } from 'antd';
import React from 'react';
/**
 * flex	flex 布局属性	string | number	-	
offset	栅格左侧的间隔格数，间隔内不可以有栅格	number	0	
order	栅格顺序	number	0	
pull	栅格向左移动格数	number	0	
push	栅格向右移动格数	number	0	
span	栅格占位格数，为 0 时相当于 display: none	number	-	
xs	屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
sm	屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
md	屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
lg	屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
xl	屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
xxl	屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object
 */
interface SysColProps extends ColProps {
    /**
     * @description flex 布局属性
     * @default -
     * @type string | number
     */
    flex?: string | number;
    /**
     * @description 栅格左侧的间隔格数，间隔内不可以有栅格
     * @default 0
     * @type number
     * 
     */
    offset?: number;
    /**
     * @description 栅格顺序
     * @default 0
     * @type number
     */
    order?: number;
    /**
     * @description 栅格向左移动格数
     * @default 0
     * @type number
     */
    pull?: number;
    /**
     * @description 栅格向右移动格数
     * @default 0
     * @type number
     */
    push?: number;
    /**
     * @description 栅格占位格数，为 0 时相当于 display: none
     * @default 0
     * @type number
     * 
     */
    span?: number;
    /**
     * @description 屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象
     * @default 0
     * @type 	number | object
     */
    xs?: number | object;
    /**
     * @description 屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象
     * @default -
     */
    sm?: number | object;
    /**
     * @description 屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象
     * @default -
     */
    md?: number | object;
    /**
     * @description 屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象
     * @default -
     */
    lg?: number | object;
    /**
     * @description 屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
     * @default -
     */
    xl?: number | object;
    /**
     * @description 屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象
     * @default -
     */
    xxl?: number | object;
}
const SysCol: React.FC<SysColProps> = ({ children, ...rest }) => {
    return <Col {...rest}>{children}</Col>;
};
export default SysCol;
