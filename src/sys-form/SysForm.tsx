import React from 'react';
import { Form, FormProps, FormInstance } from 'antd';
import './style/index.less'
export interface SysFromProps<Values = any> extends FormProps<Values> {
    /**
     * @description 指定表单布局
     * @default - 
     * @type "wide-four"(宽四列),"narrow-four"(窄四列),"wide-two"(宽两列)"narrow-two"(窄两列)
     */
    cols?: "wide-four"|"narrow-four"|"wide-two"|"narrow-two";
}

const SysInternalForm: React.ForwardRefRenderFunction<FormInstance, SysFromProps> = (
    props,
    ref,
) => {
    const { children, cols, ...rest } = props;
    return (
        <Form autoComplete="off" className={`sys-form ${cols}`} {...rest} ref={ref}>
            {children}
        </Form>
    );
};

const SysForm = React.forwardRef<FormInstance, SysFromProps>(SysInternalForm) as <Values = any>(
    props: React.PropsWithChildren<SysFromProps<Values>> & {
        ref?: React.Ref<FormInstance<Values>>;
    },
) => React.ReactElement;

const FormItem = Form.Item;
const useForm = Form.useForm
export { FormItem ,useForm};

export type { FormInstance }
export default SysForm;
