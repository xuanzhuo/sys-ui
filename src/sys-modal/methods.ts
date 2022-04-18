/**
 * 提示消息框 methods
 * @author sizz 2022-04-13
 */
import { message } from 'antd';
import showMessage from './message';
import { ShowProps } from './show';

/**
 * @description 提示信息
 * @default -
 */
export type content = string;

/**
 * @description 确定回调
 * @default -
 */
type onOk = (close: () => void) => void;

/**
 * 消息框-成功
 * @param content 成功提示信息
 */
export function success(content: content) {
    message.success(content);
}

/**
 * 消息框-错误
 * @param content 错误提示信息
 */
export function error(content: content) {
    showMessage({
        icon: 'error',
        title: '提示',
        content,
        footer: [],
    });
}

/**
 * 消息框-警告
 * @param content 警告提示信息
 * @param onOk 确定回调
 */
export function warning(content: content, onOk?: onOk) {
    showMessage({
        icon: 'warning',
        title: '提示',
        content,
        onOk,
    });
}

/**
 * 消息框-询问
 * @param content 询问提示信息
 * @param rest 确定回调或者option对象
 */
export function confirm(
    content: content,
    rest?: onOk | Pick<ShowProps, 'okText' | 'onOk' | 'cancelText' | 'onCancel' | 'buttonsProps'>,
) {
    const option = typeof rest === 'function' ? { onOk: rest } : rest;
    showMessage({
        icon: 'query',
        title: '提示',
        content,
        ...option,
    });
}
