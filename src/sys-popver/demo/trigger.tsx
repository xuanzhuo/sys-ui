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
  <div>
    <SysPopover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </SysPopover>
    <SysPopover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </SysPopover>
    <SysPopover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </SysPopover>
  </div>
);

export default App;