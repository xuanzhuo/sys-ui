import React from 'react';
import SysDataPicker from '../SysDataPicker';
let { RangePicker } = SysDataPicker;
function onChange<T>(values: T, datastring: [string, string]) {
    console.log(values);
    console.log(datastring);
}

export default () => (
    <>
        <RangePicker onChange={onChange} />
        <RangePicker onChange={onChange} showTime />
        <RangePicker onChange={onChange} picker="week" />
        <RangePicker onChange={onChange} picker="month" />
        <RangePicker onChange={onChange} picker="quarter" />
        <RangePicker onChange={onChange} picker="year" disabled />
    </>
);
