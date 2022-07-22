import React, { useState } from 'react';
import { SysToolbar, SysButton, SysProgress } from 'sys-ui';

function Basic() {
    const [percent, setPercent] = useState(0);
    const increase = () => {
        let newPercent = percent + 10;
        if (newPercent > 100) {
            newPercent = 100;
        }
        setPercent(newPercent);
    };

    const decline = () => {
        let newPercent = percent - 10;
        if (newPercent < 0) {
            newPercent = 0;
        }
        setPercent(newPercent);
    };
    return (
        <>
            <SysToolbar>
                <SysButton.Button onClick={increase} size="small">
                    ＋
                </SysButton.Button>
                <SysButton.Button onClick={decline} size="small">
                    －
                </SysButton.Button>
            </SysToolbar>
            <SysProgress percent={percent} strokeColor="red" />
        </>
    );
}

export default Basic;
