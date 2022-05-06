import React, { useState } from 'react';
import { SysTransfer, SysTransferItem } from 'sys-ui';
type mokeItem = {
    key: string;
    title: string;
    description: string;
};

const mockData: mokeItem[] = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
    });
}

const initialTargetKeys = mockData.filter((item) => +item.key > 10).map((item) => item.key);

const App = () => {
    const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState<Array<string>>([]);
    const onChange = (nextTargetKeys: string[], direction: string, moveKeys: string[]) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const onScroll = (direction: string, e: React.SyntheticEvent<HTMLUListElement>) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    return (
        <SysTransfer
            dataSource={mockData}
            titles={['Source', 'Target']}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
            onScroll={onScroll}
            render={(item: SysTransferItem) => item.title}
        />
    );
};

export default App;
