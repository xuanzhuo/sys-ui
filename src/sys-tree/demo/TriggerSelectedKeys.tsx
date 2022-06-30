import React, { useState, useEffect } from 'react';
import SysTree, { SysTreeDataNode } from '../SysTree';
import { createData } from '../../sys-tree-table/demo/data';

function TriggerSelectedKeys() {
    const [treeData, setTreeData] = useState<SysTreeDataNode[]>();
    useEffect(() => {
        setTreeData(createData(20, 2));
    }, []);
    const [triggerSelectedKeys, settriggerSelectedKeys] = useState<string[]>();
    function onClick() {
        settriggerSelectedKeys(['20-1']);
    }
    return (
        <div style={{ height: 300 }}>
            <button onClick={onClick}>定位到20-1</button>
            <SysTree
                treeData={treeData}
                fieldNames={{ key: 'id', title: 'name' }}
                triggerSelectedKeys={triggerSelectedKeys}
            />
        </div>
    );
}

export default TriggerSelectedKeys;
