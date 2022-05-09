import React, { Component } from 'react';
import {Button} from 'antd';
import { SysForm,SysFormInstance, SysInput} from 'sys-ui';


const {FormItem,halfFourColLayout,fourColLayout,required} = SysForm
export class demo extends Component {
    $form = React.createRef<SysFormInstance>();
    onClick = () => {
        this.$form.current?.validateFields().then(values => {
            console.log(values);
        });
    };
    render() {
        return (
            <SysForm ref={this.$form}>
                <FormItem
                    {...halfFourColLayout}
                    label="名称"
                    name="name"
                    rules={[required]}
                    initialValue=""
                >
                    <SysInput/>
                </FormItem>
                <FormItem
                    {...halfFourColLayout}
                    label="名称"
                    name="name1"
                    initialValue={''}
                >
                    <SysInput/>
                </FormItem>
                <FormItem {...fourColLayout}>
                    <Button onClick={this.onClick}>校验</Button>
                </FormItem>
            </SysForm>
        );
    }
}

export default demo;
