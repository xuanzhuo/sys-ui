import React from 'react';
import { Form, FormProps, FormInstance } from 'antd';
import './style/index.less'
export interface SysFromProps<Values = any> extends FormProps<Values> {
    cols?: string;
}
const FormItem = Form.Item;
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
export { FormItem };
export type { FormInstance }
export default SysForm;
