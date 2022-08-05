/** 树形数据转map */
export function treeData2Map(
    treeData: Record<string, any>[],
    { idField = 'id', pidField = 'pid', childrenField = 'children', rootPid = '0' } = {},
) {
    let map: Record<string, any> = {};
    function flat(arr: any[], level: number, pid?: number | string) {
        if (arr.length === 0) return;
        arr.forEach((item) => {
            item.level = level;
            item[pidField] = pid;
            map[item[idField]] = item;
            if (item[childrenField] && item[childrenField].length > 0) {
                flat(item[childrenField], level + 1, item[idField]);
            }
        });
    }
    treeData && flat(treeData, 1, rootPid);
    return map;
}

/**
 *
 * @param treeData 树形数据
 * @param childrenField 指定children字段。默认值children
 * @returns 树深度
 */
export function getTreeDepth(treeData: Record<string, any>[], childrenField = 'children') {
    let depth = 0;
    function getDepth(treeData: Record<string, any>[], level: number) {
        if (depth < level) {
            depth = level;
        }
        treeData.forEach((item) => {
            if (item[childrenField]) {
                getDepth(item[childrenField], level + 1);
            }
        });
    }
    getDepth(treeData, 1);
    return depth;
}

/**
 * 
 * @param treeData 树形数据
 * @param childrenField 指定children字段。默认值children
 * @returns 树所有最深子节点
 */
export function getDeepestTreeNode(treeData: Record<string, any>[], childrenField = 'children') {
    let deepestTreeNode: Record<string, any>[] = [];
    function getDepth(treeData: Record<string, any>[]) {
        treeData.forEach((item) => {
            if (item[childrenField]) {
                getDepth(item[childrenField]);
            } else {
                deepestTreeNode.push(item);
            }
        });
    }
    getDepth(treeData);
    return deepestTreeNode;
}
