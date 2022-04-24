import SysMenu from '../index';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { SysMenuProp } from '../interface';
import React from 'react';

let { Item, SubMenu } = SysMenu;
const App = () => {
    const [current, setCurrent] = React.useState('3Option');

    const onClick: SysMenuProp['onClick'] = (e) => {
        console.log(e.key);
        setCurrent(e.key as string);
    };

    return (
        <SysMenu onClick={onClick} selectedKeys={[current]} mode="horizontal">
            <Item key="1Option">
                <AppstoreOutlined />
                <span>Option 1</span>
            </Item>
            <Item key="2Option">
                <MailOutlined />
                <span>Option 2</span>
            </Item>
            <SubMenu key="3Option" title={'3Option'}>
                <Item key="11Option">
                    <AppstoreOutlined />
                    <span>Option 11</span>
                </Item>
            </SubMenu>
        </SysMenu>
    );
};

export default App;
