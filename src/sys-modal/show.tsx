/**
 * 模态框（弹出框）- 唤起方法
 * @author sizz 2022-04-08
 */

import React from 'react';
import ReactDom from 'react-dom';
import SysModal, { SysModalProps } from './SysModal';
import CollectModal, { CollectModalProps } from './CollectModal';

export interface ShowProps extends Omit<SysModalProps, 'onCancel' | 'onOk' | 'visible'> {
    /**
     * @description 内容
     * @default -
     */
    content?: React.ReactNode;
    /**
     * @description 确认回调
     * @default -
     */
    onOk?: (close: () => void, ...rest: any[]) => void;
    /**
     * @description 取消回调
     * @default -
     */
    onCancel?: (close: () => void) => void;
    /**
     * @description 对话框外层容器的类名
     * @default -
     */
    wrapClassName?: string;
    /**
     * @description 载体组件类型(内部属性，不建议外部使用)
     * @default SysModal
     */
    type?: 'default' | 'collect';
}

/**
 * 唤起模态框（弹出框）
 */
function show(options: ShowProps) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const { content, onOk, onCancel, type, ...rest } = options;
    const sysModal =
        type === 'collect' ? (
            <CollectModal
                source={content as React.ComponentClass}
                visible={true}
                onOk={okHandler}
                onCancel={cancelHandler}
                {...rest}
            />
        ) : (
            <SysModal visible={true} onOk={okHandler} onCancel={cancelHandler} {...rest}>
                {content}
            </SysModal>
        );
    ReactDom.render(sysModal, div);
    function okHandler() {
        if (typeof onOk === 'function') {
            if (type === 'collect') {
                onOk?.(close, arguments[0]);
            } else {
                onOk?.(close);
            }
        } else {
            close();
        }
    }
    function cancelHandler() {
        if (typeof onCancel === 'function') {
            onCancel?.(close);
        } else {
            close();
        }
    }

    function close() {
        var unmountResult = ReactDom.unmountComponentAtNode(div);
        if (unmountResult) {
            div?.parentNode?.removeChild(div);
        }
    }
    return {
        close,
    };
}

export default show;
