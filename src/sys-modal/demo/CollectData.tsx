import React, { Component } from 'react';
import { Button } from 'antd';
import { SysModal,SysForm,SysFormInstance,SysInput } from 'sys-ui';
const {FormItem,halfFourColLayout,required} = SysForm;
class Edit extends Component<any,any> {
    form = React.createRef<SysFormInstance>();
    submit(cb:any){
        this.form.current?.validateFields().then((values)=>{
            cb(values)
        })
    }
    render() {
        return (
            <SysForm ref={this.form}>
                <FormItem label="姓名" name="name" {...halfFourColLayout} rules={[required]}>
                    <SysInput />
                </FormItem>
            </SysForm>
        );
    }
}

function CollectData() {
    function onClick() {
        SysModal.collect({
            title: '收集数据',
            source: Edit,
            onOk:(close,info)=>{
                console.log(info) 
                SysModal.success('数据收集成功！');
                close()
            }
        });
    }
    return (
        <Button onClick={onClick}>收集数据</Button>
    );
}

export default CollectData;
