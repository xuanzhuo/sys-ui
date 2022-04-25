import {SysCheckbox} from 'sys-ui';
import React from 'react';
function onChange(checkedValues:any) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['组1Apple', '组1Pear', '组1Orange'];
const options = [
  { label: '组2Apple', value: 'Apple' },
  { label: '组2Pear', value: 'Pear' },
  { label: '组2Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: '组三Apple', value: 'Apple' },
  { label: '组三Pear', value: 'Pear' },
  { label: '组三Orange', value: 'Orange', disabled: false },
];

export default () => (
  <>
    <SysCheckbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    <SysCheckbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    <SysCheckbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </>
);