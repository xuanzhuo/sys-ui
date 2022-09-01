import React, { useEffect, useMemo, useState } from 'react';
import HandleColTable, { HanldeColTableProps, HanldeColTableColumnType } from './HandleColTable';
import { getGroupedDataArray } from '../sys-util';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
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
    const groupColumns = columns.map((column, columnIndex) => {
        const { render: cellRender, ...rest } = column;
        const nColumn: GroupTableColumnType = {
            render: (value, record, index) => {
                if (record.children && columnIndex === 0) {
                    return record[groupFiled];
                }
                return cellRender?.(value, record, index) || value;
            },
            onCell: (record) => {
                if (record.children) {
                    if (columnIndex === 0) {
                        return { colSpan: columns.length };
                    }
                    return { colSpan: 0 };
                }
                return {};
            },
            ...rest,
        };

        return nColumn;
    });
    return groupColumns;
}

function GroupTable({ group, dataSource, columns, rowKey, expandable, ...rest }: GroupTableProps) {
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
            expandable={{
                indentSize: 0,
                expandIcon: ({ expanded, onExpand, record, expandable, prefixCls }) => {
                    return (
                        <span className="expand-icon">
                            {expandable &&
                                (expanded ? (
                                    <MinusCircleTwoTone onClick={(e) => onExpand(record, e)} />
                                ) : (
                                    <PlusCircleTwoTone onClick={(e) => onExpand(record, e)} />
                                ))}
                        </span>
                    );
                },
                ...expandable,
            }}
            {...rest}
        />
    );
}

export default GroupTable;
