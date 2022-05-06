import {SysTransfer,SysTransferItem} from 'sys-ui'
import React from 'react';
interface data{
    key: string;
    title: string;
    description: string;
    chosen: boolean;
}
const App = () => {
  const [mockData, setMockData] = React.useState<data[]>([]);
  const [targetKeys, setTargetKeys] = React.useState<string[]>([]);

  React.useEffect(() => {
    const newTargetKeys = [];
    const newMockData = [];
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        newTargetKeys.push(data.key);
      }
      newMockData.push(data);
    }

    setTargetKeys(newTargetKeys);
    setMockData(newMockData);
  }, []);

  const onChange = (newTargetKeys:string[], direction:string, moveKeys:string[]) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };

  return (
    <>
      <SysTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={onChange}
        render={(item:SysTransferItem) => item.title}
        pagination
      />
      <br />
    </>
  );
};

export default App;