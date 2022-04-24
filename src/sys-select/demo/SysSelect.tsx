import {SysSelect} from 'sys-ui'
import React from 'react'
let {Option} = SysSelect
function handleChange(value:string) {
    console.log(`selected ${value}`);
  }
  
  export default () => (
    <>
      <SysSelect mode="multiple" defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </SysSelect>
      <SysSelect defaultValue="lucy" style={{ width: 120 }} disabled>
        <Option value="lucy">Lucy</Option>
      </SysSelect>
      <SysSelect defaultValue="lucy" style={{ width: 120 }} loading>
        <Option value="lucy">Lucy</Option>
      </SysSelect>
      <SysSelect defaultValue="lucy" style={{ width: 120 }} allowClear>
        <Option value="lucy">Lucy</Option>
      </SysSelect>
    </>
  );