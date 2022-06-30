import React, { useState, useEffect } from 'react';
import { SysTree, SysTreeDataNode } from 'sys-ui';
import { createData } from '../../sys-tree-table/demo/data';

function Single() {
    const [treeData, setTreeData] = useState<SysTreeDataNode[]>();
    useEffect(() => {
        setTreeData(createData(5, 4));
    }, []);
    return (
        <div style={{ height: 300 }}>
            <SysTree single treeData={treeData} fieldNames={{ key: 'id', title: 'name' }} />
        </div>
    );
}

export default Single;
