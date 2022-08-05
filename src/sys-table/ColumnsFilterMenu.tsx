import React, { useEffect, useState } from 'react';
import { Menu, MenuProps, Checkbox, Tooltip } from 'antd';
import { SysTableColumnType } from './index';

export interface ColumnsFilterMenuProps {
    items: SysTableColumnType[];
    filterKeys?: string[];
    onChange?: (selectedKeys: string[]) => void;
}

function ColumnsFilterMenu({ items, filterKeys, onChange }: ColumnsFilterMenuProps) {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    useEffect(() => {
        filterKeys
            ? setSelectedKeys(filterKeys)
            : setSelectedKeys(items.map((item) => item.dataIndex as string));
    }, [filterKeys]);

    const onSelect: MenuProps['onSelect'] = ({ selectedKeys }) => {
        setSelectedKeys(selectedKeys);
        onChange?.(selectedKeys);
    };

    const onDeselect: MenuProps['onDeselect'] = ({ selectedKeys }) => {
        setSelectedKeys(selectedKeys);
        onChange?.(selectedKeys);
    };
    return (
        <Menu
            multiple
            selectedKeys={selectedKeys}
            onSelect={onSelect}
            onDeselect={onDeselect}
            items={items.map((item,index) => {
                const itemKey = `${item.dataIndex}`;
                return {
                    key: itemKey,
                    disabled:item.filterDisabled?item.filterDisabled:index === 0,
                    label: (
                        <>
                            <Checkbox checked={selectedKeys?.includes(itemKey)} />
                            <Tooltip title={item.title}>
                                <span style={{ marginLeft: 4 }}>{item.title}</span>
                            </Tooltip>
                        </>
                    ),
                };
            })}
        />
    );
}

export default ColumnsFilterMenu;
