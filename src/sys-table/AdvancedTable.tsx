/**
 * 高级表格（处理导出不同的组件，方便扩展）
 * @author sizz 2022-04-26
 */
import React from 'react';
// import HandleColTable, {
//     HanldeColTableProps as SysTableProps,
//     HanldeColTableColumnType as SysTableColumnType,
// } from './HandleColTable';
import GroupTable , {
    GroupTableProps as SysTableProps,
    GroupTableColumnType as SysTableColumnType,
} from './GroupTable';
export type { SysTableProps, SysTableColumnType };

export function SysTableColumnTypeApi(api: SysTableColumnType) {}
function AdvancedTable({ ...rest }: SysTableProps) {
    return <GroupTable {...rest} />;
}

export default AdvancedTable;
