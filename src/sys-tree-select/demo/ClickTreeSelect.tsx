import { SysTreeSelect } from 'sys-ui';
import React from 'react';
let { SHOW_PARENT } = SysTreeSelect;
const treeData = [
    {
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [
            {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0',
            },
        ],
    },
    {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
        children: [
            {
                title: 'Child Node3',
                value: '0-1-0',
                key: '0-1-0',
            },
            {
                title: 'Child Node4',
                value: '0-1-1',
                key: '0-1-1',
            },
            {
                title: 'Child Node5',
                value: '0-1-2',
                key: '0-1-2',
            },
        ],
    },
];

class Demo extends React.Component {
    state = {
        value: ['0-0-0'],
    };

    onChange = (value: object) => {
        console.log('onChange ', value);
        this.setState({ value });
    };

    render() {
        const tProps = {
            treeData,
            value: this.state.value,
            onChange: this.onChange,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            placeholder: 'Please select',
            style: {
                width: '100%',
            },
        };
        return <SysTreeSelect {...tProps} />;
    }
}

export default Demo;
