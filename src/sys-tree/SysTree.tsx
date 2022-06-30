import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Tree, TreeProps, TreeNodeProps} from 'antd';
import ResizeObserver from 'rc-resize-observer';
import './style/index.less';
import SysIcon from '../sys-icon';
import { treeData2Map } from '../sys-util';

export interface SysTreeDataNode extends Omit<TreeNodeProps, 'children'> {}

export interface SysTreeProps
    extends Omit<
        TreeProps,
        | 'treeData'
        | 'checkable'
        | 'blockNode'
        | 'defaultCheckedKeys'
        | 'defaultExpandAll'
        | 'defaultExpandedKeys'
        | 'defaultExpandParent'
        | 'defaultSelectedKeys'
        | 'selectedKeys'
        | 'checkedKeys'
        | 'onExpand'
    > {
    /**
     * @description 数据
     * @default false
     */
    treeData?: SysTreeDataNode[];
    /**
     * @description 是否单选
     * @default false
     */
    single?: boolean;
    /**
     * @description 默认展开的层级
     * @default 0
     */
    defaultExpandLevel?: number | 'all';
    /**
     * @description checkable 状态下,复选框勾选类型:严格(不联动), 联动,半联动
     * @default normal
     */
    checkboxType?: 'strictly' | 'linkage' | 'semi-linkage';
    /**
     * @description 触发选中项的key（对应fieldNames.key值）,外部控制选中项
     * @default -
     */
    triggerSelectedKeys?: string[];
}

function TreeNodeTitle({ icon, name }: { icon?: string; name?: React.ReactNode }) {
    return (
        <span>
            {icon && <SysIcon name={icon} />}
            <span title={typeof name === 'string' ? name : undefined}> {name}</span>
        </span>
    );
}
type Key = string|number;

function SysTree({
    treeData,
    single = false,
    fieldNames,
    defaultExpandLevel,
    checkboxType = 'linkage',
    triggerSelectedKeys,
    ...rest
}: SysTreeProps) {
    const title = fieldNames?.title || 'title';
    const key = fieldNames?.key || 'key';
    const children = fieldNames?.children || 'children';
    const treeRef = useRef<any>(null);
    //树高度变化(自适应高度)
    const [treeHeight, setTreeHeight] = useState(0);
    function onResize({ height }: { height: number }) {
        setTreeHeight(height);
    }

    /** tree转map */
    const treeDataMap = useMemo(() => {
        if (treeData && treeData.length > 0) {
            return treeData2Map(treeData as Record<string, any>[], {
                idField: key,
            });
        }
        return undefined;
    }, [treeData]);

    /** 展开的keys*/
    const [expandedKeys, setExpandedKeys] = useState<(string | number)[]>([]);
    function onExpand(keys: (string | number)[]) {
        setExpandedKeys(keys);
    }

    /** 默认展开层级 */
    useEffect(() => {
        if (!treeDataMap) return;
        if (defaultExpandLevel && typeof defaultExpandLevel === 'number') {
            const expandedKeys: string[] = [];
            for (let dataId in treeDataMap) {
                const dataItem = treeDataMap[dataId];
                if (dataItem.level <= defaultExpandLevel && !expandedKeys.includes(dataItem[key])) {
                    expandedKeys.push(dataItem[key]);
                }
            }
            setExpandedKeys(expandedKeys);
        } else if (defaultExpandLevel === 'all') {
            setExpandedKeys(Object.keys(treeDataMap));
        }
    }, [treeDataMap]);

    const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);
    function onSelectHandler(keys:Key[]){
        setSelectedKeys(keys)
    }
    const [checkedKeys, setCheckedKeys] = useState<Key[]>([]);
    function onCheckHandler(keys:any){
        setCheckedKeys(keys)
    }

    /** 选中及滚动定位  */
    useEffect(() => {
        if (!triggerSelectedKeys||!treeDataMap) return;
        /** 选中某项展开相应层级(多个值时定位到第一个) */
        const expandedKeys: Key[] = [];
        let selectId = triggerSelectedKeys[0];
        while (selectId !== '0' && treeDataMap[selectId]) {
            selectId = treeDataMap[selectId].pid;
            expandedKeys.push(selectId);
        }
        setExpandedKeys((prev) => {
            return [...prev, ...expandedKeys];
        });
        //选中项
        setSelectedKeys(triggerSelectedKeys);
        //勾选项
        setCheckedKeys(triggerSelectedKeys);
        //滚动
        const timer = setTimeout(() => {
            treeRef.current.scrollTo({key:triggerSelectedKeys[0]})
        }, 0);
        return ()=>{
            clearTimeout(timer)
        }
    }, [triggerSelectedKeys,treeDataMap]);

    //节点渲染
    function loop(treeData: SysTreeDataNode[]) {
        return treeData.map((item) => {
            if (item[children]) {
                return (
                    <Tree.TreeNode
                        key={item[key]}
                        title={<TreeNodeTitle icon={item.icon} name={item[title]} />}
                    >
                        {loop(item[children])}
                    </Tree.TreeNode>
                );
            }
            return <Tree.TreeNode key={item[key]} title={item[title]} />;
        });
    }

    return (
        <ResizeObserver onResize={onResize}>
            <Tree
                ref={treeRef}
                checkable={!single}
                blockNode
                className="sys-tree"
                height={treeHeight}
                expandedKeys={expandedKeys}
                onExpand={onExpand}
                checkStrictly={checkboxType === 'strictly'}
                selectedKeys={selectedKeys}
                onSelect={onSelectHandler}
                checkedKeys={checkedKeys}
                onCheck={onCheckHandler}
                {...rest}
            >
                {treeData && loop(treeData)}
            </Tree>
        </ResizeObserver>
    );
}

export default SysTree;
