/**
 * 符合表格数据的数据分组
 * @param dataArray 需要分组的数据
 * @param config groupedFiled:分组依据的字段;idFiled:rowKey值;groupTitleFormat:分组标题格式
 * @returns
 */
export function getGroupedDataArray(
    dataArray: readonly Record<string, any>[],
    {
        groupFiled,
        idFiled,
        groupTitleFormat,
    }: {
        groupFiled: string;
        idFiled?: string;
        groupTitleFormat?: (groupedFiledValue: string, total: number) => string;
    },
) {
    const groupedDataArray: any[] = [];
    const groupedMap = getGroupedDataMap(dataArray, groupFiled);
    groupedMap.forEach((value, key) => {
        const groupedDataArrayItem = {
            [idFiled || 'id']: `groupId-${key}`,
            [groupFiled]:
                (groupTitleFormat && groupTitleFormat(key, value.length)) ||
                `${key}（${value.length}）`,
            children: value,
        };
        groupedDataArray.push(groupedDataArrayItem);
    });
    return groupedDataArray;
}

/**
 * 数据分组
 * @param dataArray 需要分组的数据
 * @param groupedFiled 分组依据的字段
 * @returns 以分组字段为key，对应分组后的数据为value的map
 */
export function getGroupedDataMap(dataArray: readonly Record<string, any>[], groupedFiled: string) {
    const groupedMap = new Map<string, any[]>();
    for (let i = 0; i < dataArray.length; i++) {
        const item = dataArray[i];
        const groupedFiledValue = item[groupedFiled];
        if (!groupedMap.has(groupedFiledValue)) {
            groupedMap.set(groupedFiledValue, []);
        }
        const groupItems = groupedMap.get(groupedFiledValue) as any[];
        groupItems.push(item);
        groupedMap.set(groupedFiledValue, groupItems);
    }
    return groupedMap;
}
