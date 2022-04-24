import { SysSelect } from 'sys-ui';
import React from 'react';
const { Option } = SysSelect;
interface OptionCoreData {
  key?: string | number;
  disabled?: boolean;
  value: string | number;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  label?: React.ReactNode;
  /** @deprecated Only works when use `children` as option data */
  children?: React.ReactNode;
}
interface OptionData extends OptionCoreData {
    /** Save for customize data */
    [prop: string]: any;
}
interface OptionGroupData {
    key?: string | number;
    label?: React.ReactNode;
    options: OptionData[];
    className?: string;
    style?: React.CSSProperties;
    /** Save for customize data */
    [prop: string]: any;
}
function onChange(value: string) {
    console.log(`selected ${value}`);
}

function onSearch(val: string) {
    console.log('search:', val);
}

export default () => (
    <SysSelect
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input: string, option: OptionGroupData) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
    </SysSelect>
);
