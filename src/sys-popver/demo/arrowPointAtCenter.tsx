import React from 'react';
import { Button } from 'antd';
import SysPopover from '../SysPopver';
const content = (
  <>
    <p>Content</p>
    <p>Content</p>
  </>
);

const App: React.FC = () => (
  <>
    <SysPopover placement="topLeft" title="Title" content={content}>
      <Button>Align edge / 边缘对齐</Button>
    </SysPopover>
    <SysPopover placement="topLeft" title="Title" content={content} arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </SysPopover>
  </>
);

export default App;