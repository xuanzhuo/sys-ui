/**
 * 提示消息框
 * @author sizz 2022-04-13
 */
import React from 'react';
import SysIcon from '../sys-icon'
import show from './show'

interface MesssageContentOption{
    title?:string,
    icon?:string,
    content?:string,
    footer?:React.ReactNode,
    onOk?:(close:()=>void)=>void
}

function MesssageContent({
    title,
    icon,
    content,
}:MesssageContentOption) {
    return (
        <>
            <div style={{ float: 'left', fontSize: 26 }}>
                <SysIcon name={icon} />
            </div>
            <div style={{ marginLeft: 40 }}>
                <div
                    style={{ fontSize: 14, fontWeight: 'bold', color: '#666' }}
                >
                    {title}
                </div>
                <p style={{ color: '#333' }}>{content}</p>
            </div>
        </>
    );
}

function showMessage({
    icon,
    title,
    content,
    ...rest
}:MesssageContentOption) {
    show({
        width: 410,
        wrapClassName:'sys-message',
        content: (
            <MesssageContent
                icon={icon}
                title={title}
                content={content}
            />
        ),
        ...rest
    });
}

export default showMessage
