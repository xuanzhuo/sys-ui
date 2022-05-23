import React, { useState } from 'react';
import { Button } from 'antd';
import SysPopover from '../SysPopver';
const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  return (
    <SysPopover
      content={<a onClick={hide}>Close</a>}
      title="Title"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button type="primary">Click me</Button>
    </SysPopover>
  );
};

export default App;