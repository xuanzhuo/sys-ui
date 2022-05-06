// import { Transfer } from 'antd';
import {SysTransfer,SysTransferItem} from 'sys-ui';
import React from 'react';

class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  filterOption = (inputValue:string, option:any) => option.description.indexOf(inputValue) > -1
  

  handleChange = (targetKeys:string[]) => {
    this.setState({ targetKeys });
  };

  handleSearch = (dir:string, value:string) => {
    console.log('search:', dir, value);
  };

  render() {
    return (
      <SysTransfer
        dataSource={this.state.mockData}
        showSearch
        filterOption={this.filterOption}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
        render={(item:SysTransferItem) => item.title}
      />
    );
  }
}

export default App;