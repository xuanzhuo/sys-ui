import {SysInput} from 'sys-ui';
import React from 'react';

export default () => (
    <SysInput
        placeholder="Basic usage"
        onBlur={() => {
            console.log('onBlur');
        }}
        onFocus={
            ()=>{
                console.log("Focus")
            }
        }
    />
);
