import React, { Component } from 'react';
import { SysForm } from 'sys-ui';
const { halfFourColLayout, fourColLayout, required, range } = SysForm;
import { Input, Button, Select } from 'antd';
const { Option } = Select;
const FormItem = SysForm.FormItem;
export class demo extends Component {
    $form = React.createRef();
    state = {
        options: [],
    };

    onClick = () => {
        this.$form.current.validateFields().then(values => {
            console.log(values);
        });
    };
    change = open => {
        if (open) {
            this.setState({
                options: ['Jack', 'Lucy', 'Yiminghe'],
            });
        }
    };
    render() {
        return (
            <SysForm refwrap={(this.$form = React.createRef())}>
                <FormItem
                    {...halfFourColLayout}
                    label="名称"
                    name="name"
                    rules={[required]}
                    initialValue=""
                >
                    <Select allowClear>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...halfFourColLayout}
                    label="名称"
                    name="name1"
                    rules={[required]}
                    initialValue={''}
                >
                    <Select
                        allowClear
                        // labelInValue
                        onDropdownVisibleChange={this.change}
                    >
                        {this.state.options.map((item, index) => {
                            return (
                                <Option key={item} value={index}>
                                    {item}
                                </Option>
                            );
                        })}
                    </Select>
                </FormItem>
                <FormItem {...fourColLayout}>
                    <Button onClick={this.onClick}>校验</Button>
                </FormItem>
            </SysForm>
        );
    }
}

export default demo;
