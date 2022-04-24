import SysTreeSelect from '../SysTreeSelect';
import React from 'react';
interface DataNode {
    value?: string | number;
    title?: React.ReactNode;
    label?: React.ReactNode;
    key?: string | number;
    disabled?: boolean;
    disableCheckbox?: boolean;
    checkable?: boolean;
    children?: DataNode[];
    [prop: string]: any;
}
class Demo extends React.Component {
    state = {
        value: undefined,
        treeData: [
            { id: 1, pId: 0, value: '1', title: 'Expand to load' },
            { id: 2, pId: 0, value: '2', title: 'Expand to load' },
            { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
        ],
    };

    genTreeNode = (parentId: string | number, isLeaf = false) => {
        const random = Math.random().toString(36).substring(2, 6);
        return {
            id: random,
            pId: parentId,
            value: random,
            title: isLeaf ? 'Tree Node' : 'Expand to load',
            isLeaf,
        };
    };

    onLoadData = (prop: DataNode) => {
        let id: number = prop.id;
        return new Promise((resolve) => {
            setTimeout(() => {
                this.setState({
                    treeData: [
                        ...this.state.treeData,
                        ...[
                            this.genTreeNode(id, false),
                            this.genTreeNode(id, true),
                            this.genTreeNode(id, true),
                        ],
                    ],
                });
                resolve(true);
            }, 300);
        });
    };

    onChange = (value: string|number) => {
        console.log(value);
        this.setState({ value });
    };

    render() {
        const { treeData } = this.state;
        return (
            <SysTreeSelect
                treeDataSimpleMode
                style={{ width: '100%' }}
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                onChange={this.onChange}
                loadData={this.onLoadData}
                treeData={treeData}
            />
        );
    }
}

export default Demo;
