/**
 * 树选择
 * @author dhy 2022-04-21
 */
import React from 'react';
import { TreeSelect } from 'antd';
import {SysTreeSelectProps} from './interface';
let { TreeNode } = TreeSelect;
function SysTreeSelect({ children, ...rest }: SysTreeSelectProps<any>) {
    return <TreeSelect {...rest}>{children}</TreeSelect>;
}
SysTreeSelect.TreeNode = TreeNode;
SysTreeSelect.SHOW_ALL = "SHOW_ALL"
SysTreeSelect.SHOW_CHILD = "SHOW_CHILD"
SysTreeSelect.SHOW_PARENT = "SHOW_PARENT"
export default SysTreeSelect;
