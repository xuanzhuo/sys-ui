import React, { useEffect, useMemo, useState } from 'react';
import HandleColTable, { HanldeColTableProps, HanldeColTableColumnType } from './HandleColTable';
import { getGroupedDataArray } from '../sys-util';

export interface GroupTableProps extends HanldeColTableProps {
    /**
     * @description 分组配置
     * @default -
     */
    group?: {
        groupFiled: string;
        groupTitleFormat?: (groupFiledValue: string, total: number) => string;
    };
}

export type GroupTableColumnType = HanldeColTableColumnType;

/** 处理分组列 */
function handleGroupColumns(columns: GroupTableColumnType[], groupFiled: string) {
    const groupColumns = columns.map((column, index) => {
        const nColumn: GroupTableColumnType = {
            render: (value, record) => {
                if (record.children && index === 0) {
                    return record[groupFiled];
                }
                return value;
            },
            onCell: (record) => {
                if (record.children) {
                    if (index === 0) {
                        return { colSpan: columns.length };
                    }
                    return { colSpan: 0 };
                }
                return {};
            },
            ...column,
        };

        return nColumn;
    });
    return groupColumns;
}

function GroupTable({ group, dataSource, columns, rowKey, ...rest }: GroupTableProps) {
    const data = useMemo(() => {
        if (group && dataSource) {
            const { groupFiled, groupTitleFormat } = group;
            return getGroupedDataArray(dataSource, {
                groupFiled,
                idFiled: rowKey,
                groupTitleFormat: groupTitleFormat,
            });
        }
    }, [dataSource, group]);

    const cols = useMemo(() => {
        if (group && columns) {
            const { groupFiled } = group;
            return handleGroupColumns(columns, groupFiled);
        }
        return [];
    }, [columns, group]);

    return (
        <HandleColTable
            rowKey={rowKey}
            dataSource={group ? data : dataSource}
            columns={group ? cols : columns}
            single
            {...rest}
        />
    );
}

export default GroupTable;
