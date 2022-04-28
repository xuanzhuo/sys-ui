import React from 'react';

interface Base {
    title?: string;
    icon: string;

    disabled?: boolean;
}

export interface SysButtonProps extends Base {
    className?: string;
    onClick?: <t>(e: T) => void;
    children?: React.ReactNode;
}
export interface SysDropdownProps extends Base {
    text?: string;
    onItemClick?: <T>(e: T) => void;
    children?: Object[];
}

