import { HanldeColTableColumnType } from './HandleColTable';

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
