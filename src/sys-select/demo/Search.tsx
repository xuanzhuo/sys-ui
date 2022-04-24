import SysSelect from '../index';
import React from 'react';
const { Option } = SysSelect;

function onChange(value:string) {
  console.log(`selected ${value}`);
}

function onSearch(val:string) {
  console.log('search:', val);
}

export default () => (
  <SysSelect
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </SysSelect>
);