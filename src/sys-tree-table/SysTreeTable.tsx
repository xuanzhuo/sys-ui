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

export interface SysTreeTableProps extends Omit<SysTableProps, 'expandable'> {
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
     * @description 选中项的key（对应rowKey值）,只支持单个值
     * @default -
     */
    selectedKeys?: string | number;
    /**
     * @description checkable 状态下,复选框勾选类型:正常(不联动), 联动,半联动
     * @default normal
     */
    checkboxType?: 'normal' | 'linkage' | 'semi-linkage';
    /**
     * @description 数据根rowKey
     * @default '0'
     */
    rootId?: string | number;
    /**
     * @description 点击展开图标时触发
     * @default -
     */
    onExpand?: (expanded: boolean, record: any) => void;
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
    selectedKeys,
    checkboxType = 'normal',
    rootId = '0',
    rowKey = 'id',
    onExpand,
    onSelectChange,
    ...rest
}: SysTreeTableProps) {
    /** tree转map */
    const treeDataMap = useMemo(() => {
        return treeData2Map(dataSource);
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
        if (defaultExpandLevel && typeof defaultExpandLevel === 'number') {
            const expandedKeys: string[] = [];
            for (let dataId in treeDataMap) {
                const dataItem = treeDataMap[dataId];
                if (dataItem.level <= defaultExpandLevel && !expandedKeys.includes(dataItem.id)) {
                    expandedKeys.push(dataItem.id);
                }
            }
            setExpandedRowKeys(expandedKeys);
        } else if (defaultExpandLevel === 'all') {
            setExpandedRowKeys(Object.keys(treeDataMap));
        }
    }, []);

    /** 选中定位操作 */
    const [defaultKeys, setDefaultKeys] = useState<string | number>();
    useEffect(() => {
        if (selectedKeys !== undefined) {
            const expandedKeys: (string | number)[] = [];
            let id = selectedKeys;
            while (id !== rootId) {
                expandedKeys.push(id);
                id = treeDataMap[id].pid;
            }
            /** 选中某项展开相应层级 */
            setExpandedRowKeys((prev) => {
                return [...prev, ...expandedKeys];
            });
            setDefaultKeys(selectedKeys);
        }
    }, [selectedKeys]);

    /** 勾选操作 */
    const rowSelection = {
        checkStrictly: checkboxType === 'normal',
    };
    function onSelectChangeHandler(keys: any[], rows: any[]) {
        if (keys.length === 1) {
            const selectKey = keys[0];
            const select = treeDataMap[selectKey];
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
            onSelectChange?.(keys, rows, {
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
        // onExpand:onExpandHandler,
        onExpandedRowsChange: onExpandedChange,
    };

    function onExpandedChange(expandedKeys: any) {
        setExpandedRowKeys(expandedKeys);
    }

    return (
        <SysTable
            dataSource={dataSource}
            rowKey={rowKey}
            columns={columns}
            rowNumber={rowNumber}
            expandable={expandable}
            rowSelection={rowSelection}
            defaultKeys={defaultKeys}
            onSelectChange={onSelectChangeHandler}
            {...rest}
        />
    );
}

export default SysTreeTable;