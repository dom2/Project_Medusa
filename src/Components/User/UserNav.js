import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import UserConsole from './UserConsole';
import {Layout, Menu} from 'antd';
import {contentStyles, medusa, headStyles} from '../../theme/styles';

const {Header, Content} = Layout;

class UserNav extends Component {
  render() {
    return (
      <Layout>
        <Header style={headStyles}>
          <div>
            <img src={logo} height={60} width={195} alt=""/>
            <span style={medusa}>
              Project Medusa</span>
          </div>

          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">Logout</Menu.Item>
          </Menu>
        </Header>
        <Content style={contentStyles}>
          <UserConsole/>
        </Content>
      </Layout>
    );
  }
}

export default UserNav;