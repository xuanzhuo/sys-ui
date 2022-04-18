/**
 * 模态框（弹出框）
 * @author sizz 2022-04-11
 */
import React, { Children, useRef, useState } from 'react';
import { Modal, Button } from 'antd';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import './style/index.less';
import SysIcon from '../sys-icon';

export interface SysModalProps {
    /**
     * @description 标题
     * @default -
     */
    title?: string;
    /**
     * @description 宽度
     * @default 520
     */
    width?: number;
    /**
     * @description 是否可最大化
     * @default false
     */
    maximizable?: boolean;
    /**
     * @description 是否可拖动
     * @default false
     */
    draggable?: boolean;
    /**
     * @description 确认按钮文字
     * @default 确认
     */
    okText?: string;
    /**
     * @description 确定回调
     * @default -
     */
    onOk?: () => void;
    /**
     * @description 取消按钮文字
     * @default 取消
     */
    cancelText?: string;
    /**
     * @description 取消回调(取消按钮或右上角图标)
     * @default -
     */
    onCancel?: () => void;
    /**
     * @description 垂直居中展示 Modal
     * @default false
     */
    centered?: boolean;
    /**
     * @description 底部内容，当不需要默认底部内容时，可以设为 footer={null}
     * @default (确定取消按钮)
     */
    footer?: React.ReactNode;
    /**
     * @description 自定义底部按钮，用于扩展footer（footer内部都是按钮时），优先级低于footer
     * @default null
     */
    buttonsProps?:ButtonProps[],
    /**
     * @description 对话框是否可见
     * @default -
     */
    visible?:boolean
}
interface ButtonProps {
    /** 按钮类型 */
    type?: 'primary' | 'default';
    /** 按钮名称 */
    text?: string;
    /** 点击回调 */
    onClick?: React.MouseEventHandler;
}

const SysModal: React.FC<SysModalProps> = ({
    title,
    children,
    width = 520,
    maximizable = false,
    draggable = false,
    okText,
    onOk,
    cancelText,
    onCancel,
    buttonsProps,
    ...rest
}) => {
    const [isMaxed, setIsMaxed] = useState(false);
    function maximizeAndrestore() {
        setIsMaxed(!isMaxed);
    }
    const titleCom = (
        <>
            <div className={draggable ? 'sys-modal-draggable-bar' : undefined}>{title}</div>
            {maximizable && (
                <button
                    className="ant-modal-close sys-modal-maximize-icon"
                    onClick={maximizeAndrestore}
                >
                    <SysIcon name={isMaxed ? 'restore' : 'maximize'} />
                </button>
            )}
        </>
    );

    const draggleRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    function onStart(e: DraggableEvent, uiData: DraggableData) {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    }
    function onStop(e: DraggableEvent, uiData: DraggableData) {
        const { x, y } = uiData;
        setPosition({ x, y });
    }

    function modalRender(node: React.ReactNode) {
        return (
            <Draggable
                handle=".sys-modal-draggable-bar"
                bounds={bounds}
                position={isMaxed ? { x: 0, y: 0 } : position}
                onStart={onStart}
                onStop={onStop}
            >
                <div ref={draggleRef}>{node}</div>
            </Draggable>
        );
    }
    const footer = buttonsProps
        ? buttonsProps.map((item, index) => {
            return (
                <Button
                    key={`sys-modal-button${index}`}
                    type={item.type ?? 'default'}
                    onClick={item.onClick}
                >
                    {item.text}
                </Button>
            );
        })
        : [
            <Button key="ok" type="primary" onClick={onOk}>
                {okText ?? '确定'}
            </Button>,
            <Button key="cancel" onClick={onCancel}>
                {cancelText ?? '取消'}
            </Button>,
        ];
    return (
        <Modal
            title={title ? titleCom : undefined}
            wrapClassName="sys-modal"
            modalRender={draggable ? modalRender : undefined}
            width={isMaxed ? '100vw' : width}
            style={{ top: isMaxed ? 0 : undefined }}
            bodyStyle={{ height: isMaxed ? 'calc(100vh - 115px)' : undefined }}
            maskClosable={false}
            onCancel={onCancel}
            footer={footer}
            {...rest}
        >
            {children}
        </Modal>
    );
};

export default SysModal;
