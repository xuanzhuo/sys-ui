import React from 'react';
import './style/index.less';

import { Button } from 'antd';

/**
 * Foo props
 */
export interface IFooProps {
    /**
     * @description       标题
     * @default           -
     */
    title?: string | number;
}

/**
 * Foo
 */
export default ({ title }: IFooProps) => <Button className="foo">1{title}</Button>;
