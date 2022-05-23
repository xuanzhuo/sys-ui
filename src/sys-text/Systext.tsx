import React from 'react';
import './style/index.less'
interface SysTextProps {
    title: string;
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
