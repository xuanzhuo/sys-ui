import React from 'react';
import SysCol from '../SysCol';
import SysRow from '../SysRow';
const App: React.FC = () => (
  <SysRow>
    <SysCol xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </SysCol>
    <SysCol xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </SysCol>
    <SysCol xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </SysCol>
  </SysRow>
);

export default App;