import React from "react";
import SysRow from '../SysRow'
import SysCol from "../SysCol";
import './style.less'
const App: React.FC = () => (
    <>
      <SysRow gutter={16}>
        <SysCol span={24}>col</SysCol>
      </SysRow>
      <SysRow gutter={16}>
        <SysCol span={12}>col-12</SysCol>
        <SysCol span={12}>col-12</SysCol>
      </SysRow>
      <SysRow gutter={16}>
        <SysCol span={8}>col-8</SysCol>
        <SysCol span={8}>col-8</SysCol>
        <SysCol span={8}>col-8</SysCol>
      </SysRow>
      <SysRow gutter={16}>
        <SysCol span={6}>col-6</SysCol>
        <SysCol span={6}>col-6</SysCol>
        <SysCol span={6}>col-6</SysCol>
        <SysCol span={6}>col-6</SysCol>
      </SysRow>
    </>
  );
  
  export default App;