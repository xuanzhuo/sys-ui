import React, { Component } from 'react';
import { Form, FormInstance, Input } from 'antd';
import { Button } from 'antd';
import { SysModal } from 'sys-ui';

class Edit extends Component<any,any> {
    form = React.createRef<FormInstance>();
    componentDidMount(){
        console.log(this.props)
    }
    submit(cb:any){
        this.form.current?.validateFields().then((values)=>{
            cb(values)
        })
    }
    render() {
        return (
            <Form ref={this.form}>
                <Form.Item label="姓名" name="name">
                    <Input />
                </Form.Item>
            </Form>
        );
    }
}

function CollectData() {
    function onClick() {
        SysModal.collect({
            title: '编辑',
            source: Edit,
            sourceProps:{
                aa:'111111111111',
            },
            onOk:(a,b)=>{
                console.log(b)
            }
        });
    }
    return (
        <Button onClick={onClick}>收集数据</Button>
    );
}

export default CollectData;
