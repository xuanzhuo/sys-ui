import React from 'react';
import './style/index.less'
interface SysTextProps {
    /**
     * @description 文本内容
     * @default string/numer
     */
    title: string;
    /**
     * @description 有 rows 属性时自动开启长文本显示，rows 指定显示几行，多于指定行显示滚定条
     * @default numer
     */
    rows: number;
}
const SysText: React.FC<SysTextProps> = ({ title, rows }: SysTextProps) => {
    return (
        <>
            {rows ? (
                <div className="sys-long-text" style={{ maxHeight: 32 * rows }}>
                    {title}
                </div>
            ) : (
                <div className="sys-text" title={title}>
                    {title}
                </div>
            )}
        </>
    );
};

export default SysText;
