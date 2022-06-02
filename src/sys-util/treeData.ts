
interface IOptions{
    idField?:string,
    pidField?:string,
    childrenField?:string,
    root?:string,
}
/** 树形数据转map */
export function treeData2Map(treeData:any,{
    idField = 'id',
    pidField = 'pid',
    childrenField = 'children',
    root='0',
}:IOptions){
    let map:Record<string,any> = {};
    function flat(arr:any[],level:number,pid?:number|string) {
        if (arr.length === 0) return;
        arr.forEach(item => {
            item.level = level;
            item[pidField] = pid;
            map[item[idField]] = item;
            if (item[childrenField] && item[childrenField].length > 0) {
                flat(item[childrenField],level + 1,item[idField]);
            }
        });
    }
    treeData && flat(treeData,1,root);
    return map;
}