import React from 'react';
import { SysIcon } from 'sys-ui';
function Basic() {
    function onClick(){
        console.log('add')
    }
    return (
        <div>
            <SysIcon name="add" onClick={onClick}/>
            <SysIcon name="edit"/>
        </div>
    );
}

export default Basic;
