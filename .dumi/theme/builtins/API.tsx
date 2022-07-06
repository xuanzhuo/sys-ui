import React from 'react';
import type { IApiComponentProps } from 'dumi/theme';
import { useApiData } from 'dumi/theme';

const texts = {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)',
};

export default ({ identifier, export: expt }: IApiComponentProps) => {
    const data = useApiData(identifier);
    /** 过滤api属性 */
    const chineseReg = /[\u4e00-\u9fa5]+/;
    let initRowDatas =
        data &&
        data[expt]
            .filter((row) => {
                return chineseReg.test(row.description) && row.type !== 'hidden';
            })
            .sort((a, b) => {
                return a.identifier.localeCompare(b.identifier);
            });
    const props:any = [],events:any= [];
    initRowDatas.forEach((item) => {
        if(/^on[A-Za-z]+/.test(item.identifier)){
            events.push(item)
        }else{
            props.push(item)
        }
    });
    const rowDatas = [...props,...events];
    return (
        <>
            {data && (
                <table style={{ marginTop: 24 }}>
                    <thead>
                        <tr>
                            <th>{texts.name}</th>
                            <th>{texts.description}</th>
                            <th>{texts.type}</th>
                            <th>{texts.default}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowDatas.map((row) => (
                            <tr key={row.identifier}>
                                <td>{row.identifier}</td>
                                <td>{row.description}</td>
                                <td>
                                    <code>{row.type}</code>
                                </td>
                                <td>
                                    <code>
                                        {row.default || (row.required && texts.required) || '--'}
                                    </code>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};
