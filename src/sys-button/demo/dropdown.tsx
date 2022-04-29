import React from 'react';
import { SysButton } from 'sys-ui';


function dropdown() {
    function click({key}:{key:string}){
        console.log(key)
    }
    return (
        <div>
            <div>
                常用：
                <SysButton.Dropdown icon="edit" title="编辑" onItemClick={click}>
                    {[{ title: '选项一' }, { title: '选项二' }]}
                </SysButton.Dropdown>
            </div>
            <div>
                带文字:
                <SysButton.Dropdown icon="edit" title="编辑" text="编辑">
                    {[{ title: '选项一' }, { title: '选项二' }]}
                </SysButton.Dropdown>
            </div>
            <div>
                禁用：
                <SysButton.Dropdown
                    icon="edit"
                    title="编辑"
                    text="编辑"
                    disabled
                >
                    {[{ title: '选项一' }, { title: '选项二' }]}
                </SysButton.Dropdown>
                禁用选项：
                <SysButton.Dropdown icon="edit" title="编辑">
                    {[{ title: '选项一', disabled: true }, { title: '选项二' }]}
                </SysButton.Dropdown>
            </div>
        </div>
    );
}

export default dropdown;