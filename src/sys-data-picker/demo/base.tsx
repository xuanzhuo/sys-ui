import { SysDataPicker } from 'sys-ui';
import React from 'react';
function onChange<T>( datastring: string) {
 
    console.log(datastring)
}

export default () => (
    <div>
        <SysDataPicker onChange={onChange} />
        <SysDataPicker onChange={onChange} picker="week" />
        <SysDataPicker onChange={onChange} picker="month" />
        <SysDataPicker onChange={onChange} picker="quarter" />
        <SysDataPicker onChange={onChange} picker="year" />
    </div>
);
