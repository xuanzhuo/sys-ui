interface Props {
    // accept?: string | undefined;
    // alt?: string | undefined;
    // autoComplete?: string | undefined;
    // autoFocus?: boolean | undefined;
    // capture?: boolean | 'user' | 'environment' | undefined;
    // checked?: boolean | undefined;
    // crossOrigin?: string | undefined;
    // enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
    // form?: string | undefined;
    // formAction?: string | undefined;
    // formEncType?: string | undefined;
    // formMethod?: string | undefined;
    // formNoValidate?: boolean | undefined;
    // formTarget?: string | undefined;
    // height?: number | string | undefined;
    // list?: string | undefined;
    // max?: number | string | undefined;
    // min?: number | string | undefined;
    minLength?: number | undefined;
    // multiple?: boolean | undefined;
    // name?: string | undefined;
    // pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    // src?: string | undefined;
    // step?: number | string | undefined;
    // width?: number | string | undefined;
}
export default interface SysInputProps extends Props{
    /**
     * @description      带标签的 input，设置后置标签
     * @default           -
     */
    addonAfter?: React.ReactNode;
    /**
     * @description      带标签的 input，设置前置标签
     * @default           -
     */
    addonBefore?: React.ReactNode;
    /**
     * @description    	 可以点击清除图标删除内容
     * @default           -
     */
    allowClear?: boolean;
    /**
     * @description    	 是否有边框
     * @default           true
     */
    bordered?: boolean;
    /**
     * @description    	 输入框默认内容
     * @default           true
     */
    defaultValue?: string;
    /**
     * @description    	 是否禁用状态，默认为 false
     * @default           true
     */
    disabled?: boolean;
    /**
     * @description    	 输入框的 id
     * @default           true
     */
    id?: string;
    /**
     * @description    	  最大长度
     * @default           true
     */
    maxLength?: number;
    /**
     * @description    	 设置校验状态
     * @default           -
     */
    status?: 'error' | 'warning';
    /**
     * @description    	 	带有前缀图标的 input
     * @default           -
     */
    prefix?: React.ReactNode;
    /**
     * @description  控件大小。注：标准表单内的输入框大小限制为 middle
     *  @default           -
     */
    size?: 'large' | 'middle' | 'small';
    /**
     * @description  带有后缀图标的 input
     *  @default           -
     */
    suffix?: React.ReactNode;
    /**
     * @description  带有后缀图标的 input
     *  @default     text
     */
    type?: string;
    /**
     * @description 输入框内容
     * @default -
     */
    value?: string;
    /**
     * @description 输入框内容变化时的回调
     * @default -
     */
    onChange?: (e: any) => void;
    /**
     * @description 按下回车的回调
     * @default -
     */
    onPressEnter?: (e: any) => void;
}