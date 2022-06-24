import { Input, InputProps } from 'antd';
import React from 'react';
let { Search } = Input;

interface SearchProps extends InputProps {
    inputPrefixCls?: string;
    /**
     * @description 点击搜索图标、清除图标，或按下回车键时的回调
     * @type 	boolean | ReactNode
     * @default false
     */
    onSearch?: (
        value: string,
        event?:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLElement>
            | React.KeyboardEvent<HTMLInputElement>,
    ) => void;
    /**
     * @description 是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突。
     * @default false
     * @type boolean | ReactNode
     */
    enterButton?: React.ReactNode;
    /**
     * @description 搜索 loading
     * @default false
     * @type boolean
     */
    loading?: boolean;
}

export default function SysSearch({ ...rest }: SearchProps) {
    return <Search {...rest}></Search>;
}
