/**
 * 高级表格（处理导出不同的组件，方便扩展）
 * @author sizz 2022-04-26
 */
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
