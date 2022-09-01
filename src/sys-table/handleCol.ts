import { HanldeColTableColumnType } from './HandleColTable';

/** 百分比字符串转数字 */
function toNum(percent: string) {
    var num = Number(percent.replace('%', ''));
    return num / 100;
}

/** 初始化列宽 */
export function initColWidths(columns: HanldeColTableColumnType[], tWidth: number) {
    // 数字和百分比混用处理，百分比总宽度为除去数字宽度以外的宽度
    let changedTWidth = tWidth;
    return columns.map((item, index) => {
        let width = 1;
        if (typeof item.width === 'number') {
            width = item.width;
            changedTWidth -= width;
        }
        if (typeof item.width === 'string') {
            width = changedTWidth * toNum(item.width);
        }
        return width;
    });
}

/** 计算自适应列宽 */
export function fitColWidths(
    colWidths: number[],
    tWidth: number,
    columns: HanldeColTableColumnType[],
) {
    const totalWidth = colWidths.reduce((sum, item, index) => {
        if (columns[index].fixed) {
            tWidth -= item;
            return sum;
        }
        return sum + item;
    }, 0);
    return colWidths.map((item, index) => {
        if (columns[index].fixed) {
            return item;
        }
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
    originColumns: HanldeColTableColumnType[],
) {
    const filtedWidths = innerColumns.map((item, index) => {
        const itemWidth = resizeWidthMap[item.dataIndex as string]
            ? resizeWidthMap[item.dataIndex as string]
            : initColWidths(originColumns, tWidth)[index];
        return itemWidth;
    });
    return fitColWidths(filtedWidths, tWidth, innerColumns);
}
