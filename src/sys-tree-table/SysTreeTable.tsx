/**
 * 树表
 * @author sizz 2022-04-27
 */

import React, { useEffect, useMemo, useState } from 'react';
import { TableProps } from 'antd';
import SysTable, { SysTableProps, SysTableColumnType } from '../sys-table';
import { treeData2Map } from '../sys-util';

type ExpandableConfig = SysTableProps['expandable'];
export interface SysTreeTableColumn extends SysTableColumnType {}
export function SysTreeTableColumnApi(p: SysTreeTableColumn) {}

export interface SysTreeTableProps extends Omit<SysTableProps, 'expandable' | 'defaultKeys'> {
    /**
     * @description 指定展开图标所在列的dataIndex
     * @default -
     */
    expandColumnDataIndex?: string;
    /**
     * @description 默认展开的层级
     * @default 0
     */
    defaultExpandLevel?: number | 'all';
    /**
     * @description checkable 状态下,复选框勾选类型:正常(不联动), 联动,半联动
     * @default normal
     */
    checkboxType?: 'normal' | 'linkage' | 'semi-linkage';
    /**
     * @description 指定数据根节点（第一级）父id,
     * @default '0'
     */
    rootPid?: string;
    /**
     * @description 点击展开图标时触发
     * @default -
     */
    onExpand?: (expanded: boolean, record: any) => void;
    /**
     * @description 选中项发生变化时的回调
     * @default -
     */
    onSelectChange?: (
        keys: any[],
        rows: any[],
        moreInfo?: {
            parent?: Record<string, any>;
            prev?: Record<string, any>;
            next?: Record<string, any>;
        },
    ) => void;
}

/** 树表 */
function SysTreeTable({
    dataSource,
    columns,
    rowNumber,
    expandColumnDataIndex,
    defaultExpandLevel = 0,
    triggerSelectedKeys,
    checkboxType = 'normal',
    rootPid = '0',
    rowKey = 'id',
    onExpand,
    onSelectChange,
    ...rest
}: SysTreeTableProps) {
    /** tree转map */
    const treeDataMap = useMemo(() => {
        if (dataSource && dataSource.length > 0) {
            return treeData2Map(dataSource as Record<string, any>[], {
                idField: rowKey,
                rootPid,
            });
        }
        return undefined;
    }, [dataSource]);

    /** 指定展开图标所在列 */
    const expandIconColumnIndex = useMemo(() => {
        const basicExpandIconColumnIndex = rowNumber ? 2 : 1;
        let expandIconColumnNameIndex = 1;
        if (expandColumnDataIndex && columns) {
            const findIndex = columns.findIndex((item) => item.dataIndex === expandColumnDataIndex);
            expandIconColumnNameIndex = findIndex === -1 ? 1 : findIndex + 1;
        }
        const expandIconColumnIndex = basicExpandIconColumnIndex + expandIconColumnNameIndex;
        return expandIconColumnIndex;
    }, [rowNumber, expandColumnDataIndex, columns]);

    /** 展开的keys*/
    const [expandedRowKeys, setExpandedRowKeys] = useState<(string | number)[]>([]);

    /** 默认展开层级 */
    useEffect(() => {
        if (!treeDataMap) return;
        if (defaultExpandLevel && typeof defaultExpandLevel === 'number') {
            const expandedKeys: string[] = [];
            for (let dataId in treeDataMap) {
                const dataItem = treeDataMap[dataId];
                if (
                    dataItem.level <= defaultExpandLevel &&
                    !expandedKeys.includes(dataItem[rowKey])
                ) {
                    expandedKeys.push(dataItem[rowKey]);
                }
            }
            setExpandedRowKeys(expandedKeys);
        } else if (defaultExpandLevel === 'all') {
            setExpandedRowKeys(Object.keys(treeDataMap));
        }
    }, [treeDataMap]);

    /** 选中定位操作 */
    useEffect(() => {
        if (triggerSelectedKeys && treeDataMap) {
            const expandedKeys: (string | number)[] = [];
            let id = triggerSelectedKeys[0];
            while (id !== rootPid && treeDataMap[id]) {
                expandedKeys.push(id);
                id = treeDataMap[id].pid;
            }
            /** 选中某项展开相应层级 */
            setExpandedRowKeys((prev) => {
                return [...prev, ...expandedKeys];
            });
        }
    }, [treeDataMap]);

    /** 勾选操作 */
    const rowSelection = {
        checkStrictly: checkboxType === 'normal',
    };
    function onSelectChangeHandler(keys: any[], rows: any[]) {
        if (keys.length === 1 && treeDataMap ) {
            const selectKey = keys[0];
            const select = treeDataMap[selectKey];
            if(!select){
                onSelectChange?.([], []);
                return ;
            }
            const selectPid = select.pid;
            const parent = treeDataMap[selectPid];
            const allSiblings = parent ? parent.children : dataSource;
            let prev, next;
            if (allSiblings) {
                if (allSiblings.length >= 1) {
                    const allSiblingsLen = allSiblings.length;
                    const selectIndex = allSiblings.findIndex(
                        (item: any) => item[rowKey] === selectKey,
                    );
                    prev = selectIndex === 0 ? undefined : allSiblings[selectIndex - 1];
                    next =
                        selectIndex === allSiblingsLen - 1
                            ? undefined
                            : allSiblings[selectIndex + 1];
                }
            }
            onSelectChange?.(keys, [select], {
                parent,
                prev,
                next,
            });
        } else {
            onSelectChange?.(keys, rows);
        }
    }

    const expandable: ExpandableConfig = {
        expandIconColumnIndex,
        expandedRowKeys,
        onExpandedRowsChange: onExpandedChange,
    };

    function onExpandedChange(expandedKeys: any) {
        setExpandedRowKeys(expandedKeys);
    }
    return (
        <SysTable
            isTree={true}
            dataSource={dataSource}
            rowKey={rowKey}
            columns={columns}
            rowNumber={rowNumber}
            expandable={expandable}
            rowSelection={rowSelection}
            triggerSelectedKeys={triggerSelectedKeys}
            onSelectChange={onSelectChangeHandler}
            {...rest}
        />
    );
}

export default SysTreeTable;
