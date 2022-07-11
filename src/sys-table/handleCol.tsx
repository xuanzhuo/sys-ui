import React from 'react';
import { HanldeColTableColumnType } from './HandleColTable';
import { Menu, MenuProps, Checkbox } from 'antd';

/** 百分比字符串转数字 */
function toNum(percent: string) {
    var num = Number(percent.replace('%', ''));
    return num / 100;
}

/** 初始化列宽 */
export function initColWidths(columns: HanldeColTableColumnType[], tWidth: number) {
    return columns.map((item) => {
        let width = 1;
        if (typeof item.width === 'number') {
            width = item.width;
        }
        if (typeof item.width === 'string') {
            width = tWidth * toNum(item.width);
        }
        return width;
    });
}

/** 计算自适应列宽 */
export function fitColWidths(colWidths: number[], tWidth: number) {
    const totalWidth = colWidths.reduce((sum, item) => {
        return sum + item;
    });
    return colWidths.map((item) => {
        return (item / totalWidth) * tWidth;
    });
}

/** 列排序处理 */
export function handleSort(sort: 'local' | 'remote' | 'none', column: HanldeColTableColumnType) {
    //列排序规则
    const sorters = {
        local: (a: any, b: any) => {
            const astr = String(a[column.dataIndex as string]);
            const bstr = String(b[column.dataIndex as string]);
            return astr.localeCompare(bstr, 'zh-CN', { numeric: true });
        },
        remote: true,
        none: false,
    };
    return sorters[sort];
}

/** 列过滤处理 */
export function handleFilter(
    column: HanldeColTableColumnType,
    columns: HanldeColTableColumnType[],
) {
    const hanleColumns: HanldeColTableColumnType[] = [];
    columns.forEach((item, index) => {
        if (!item.dataIndex) {
            return;
        }
        if (index === 0) {
            item.filterDisabled = true;
        }
        hanleColumns.push(item);
    });
    const filterDropdownFn: HanldeColTableColumnType['filterDropdown'] = ({
        confirm,
        selectedKeys,
        setSelectedKeys,
    }) => {
        const FILTERMENU = 'filterMenu';
        const onSelect: MenuProps['onSelect'] = ({ selectedKeys }) => {
            setSelectedKeys(selectedKeys);
            confirm?.();
        };
        const onDeselect: MenuProps['onDeselect'] = ({ selectedKeys }) => {
            setSelectedKeys(selectedKeys);
            confirm?.();
        };
        return (
            <Menu
                key={`${FILTERMENU}-${column.dataIndex}`}
                multiple
                selectedKeys={selectedKeys as string[]}
                onSelect={onSelect}
                onDeselect={onDeselect}
            >
                {hanleColumns.map((filterItem) => {
                    const itemKey = `${filterItem.dataIndex}`;
                    return (
                        <Menu.Item key={itemKey} disabled={filterItem.filterDisabled || false}>
                            <Checkbox checked={selectedKeys?.includes(itemKey)} />
                            <span>{filterItem.title}</span>
                        </Menu.Item>
                    );
                })}
            </Menu>
        );
    };
    return filterDropdownFn;
}

/** 列过滤与列宽拖拽的联动处理 */
export function fitFilterColWidths(
    resizeWidthMap: Record<string, number>,
    innerColumns: HanldeColTableColumnType[],
    tWidth: number,
    origonColumns: HanldeColTableColumnType[],
) {
    const filtedWidths = innerColumns.map((item, index) => {
        const itemWidth = resizeWidthMap[item.dataIndex as string]
            ? resizeWidthMap[item.dataIndex as string]
            : initColWidths(origonColumns, tWidth)[index];
        return itemWidth;
    });
    return fitColWidths(filtedWidths, tWidth);
}
