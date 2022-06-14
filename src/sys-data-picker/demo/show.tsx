import  {SysDataPicker} from 'sys-ui';
import React,{useState} from 'react';

export default () => {
    let [value ,setValue] = useState<any>("2022-06-14")
    function onChange<T>(moment: T, datastring: string) {
        // console.log(moment);
        // console.log(datastring)
        setValue(datastring)
    }
    
    return (
    
    <div>
             <SysDataPicker value={value} onChange={onChange}></SysDataPicker>
    </div>
)};
