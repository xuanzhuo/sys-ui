import React from 'react';
import SysTable, { SysTableProps,SysTableColumnType } from './SysTable';
import ResizableColTable from './ResizableColTable';

export type {SysTableProps,SysTableColumnType}

function AdvancedTable({ resizable = false, ...rest }: SysTableProps) {
    if(resizable){
        return <ResizableColTable {...rest}/>
    }
    return <SysTable  {...rest}/>;
}

export default AdvancedTable;
