import React from 'react';
import {SysInput} from 'sys-ui';
const { TextArea } = SysInput;

export default () => (
    <>
        <TextArea showCount rows={4} />
        <br />
        <br />
        <TextArea showCount rows={4} placeholder="maxLength is 6" maxLength={6} />
    </>
);
