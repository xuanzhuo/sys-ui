
import React from 'react';
import { Button } from 'antd';
import SysPopover from '../SysPopver';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const App: React.FC = () => (
  <SysPopover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </SysPopover>
);

export default App;
