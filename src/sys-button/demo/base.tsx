import React from 'react';
import { SysButton } from 'sys-ui';

function basic() {
    return (
        <div>
            <div>
                常用：
                <SysButton icon="edit" title="编辑" />
            </div>
            <div>
                带文字:
                <SysButton icon="edit" title="编辑">
                    编辑
                </SysButton>
            </div>
            <div>
                禁用：
                <SysButton icon="edit" title="编辑" disabled>
                    编辑
                </SysButton>
                <SysButton icon="edit" title="编辑" disabled />
            </div>
        </div>
    );
}

export default basic;