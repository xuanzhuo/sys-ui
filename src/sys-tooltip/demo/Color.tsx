import React from 'react';
import { Button, Divider } from 'antd';
import { SysTooltip } from 'sys-ui';
const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'gold',
    'lime',
    '#f50',
    '#2db7f5',
    '#87d068',
    '#108ee9',
];

function Basic() {
    return (
        <>
            <Divider orientation="left">背景颜色</Divider>
            <div>
                {colors.map((color) => (
                    <SysTooltip title={color} bgColor={color} key={color}>
                        <Button>{color}</Button>
                    </SysTooltip>
                ))}
            </div>
            <Divider orientation="left">字体颜色</Divider>
            <div>
                {colors.map((color) => (
                    <SysTooltip title={color} color={color} key={color}>
                        <Button>{color}</Button>
                    </SysTooltip>
                ))}
            </div>
        </>
    );
}

export default Basic;
