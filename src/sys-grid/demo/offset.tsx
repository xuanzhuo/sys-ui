import React from 'react';
import {SysGrid} from 'sys-ui'
let {SysRow,SysCol} = SysGrid

const App: React.FC = () => (
  <>
    <SysRow>
      <SysCol span={8}>col-8</SysCol>
      <SysCol span={8} offset={8}>
        col-8
      </SysCol>
    </SysRow>
    <SysRow>
      <SysCol span={6} offset={6}>
        col-6 col-offset-6
      </SysCol>
      <SysCol span={6} offset={6}>
        col-6 col-offset-6
      </SysCol>
    </SysRow>
    <SysRow>
      <SysCol span={12} offset={6}>
        col-12 col-offset-6
      </SysCol>
    </SysRow>
  </>
);

export default App;