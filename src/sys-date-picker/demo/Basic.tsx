import React from 'react';
// import SysDatePicker,{SysPickerDateProps} from '../index';
import { SysDatePicker } from 'sys-ui';
function Basic() {
    function onChange(value: string) {
        console.log(value);
    }
    return (
        <div style={{ width: 200 }}>
            <SysDatePicker value="2021/2/10 12:12:12" onChange={onChange} autoFocus />
            <SysDatePicker showTime onChange={onChange} />
        </div>
    );
}

export default Basic;
