import React from 'react';
import { Transfer } from 'antd';
import { SysTransferItem, SysTransferProps } from './interface';
function SysTransfer({ children, ...rest }: SysTransferProps<SysTransferItem>) {
    return <Transfer {...rest}>{children}</Transfer>;
}
export default SysTransfer;
