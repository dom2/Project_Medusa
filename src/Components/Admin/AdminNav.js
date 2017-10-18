import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import AdminConsole from './AdminConsole';
import UManagement from './UserManagement';
import {Layout, Menu} from 'antd';
import {contentStyles, medusa, headStyles} from '../../theme/styles';

const {Header, Content} = Layout;

class AdminNav extends Component {
  render() {
    return (
      <Layout>
        <Header style={headStyles}>
          <img src={logo} alt="" style={medusa}/>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{
            lineHeight: '62px',
            float: 'left',
            color: '#DEE0E0'
          }}>
            <Menu.Item key="1">Admin Console</Menu.Item>
            <Menu.Item key="2">User Management</Menu.Item>
          </Menu>
          <Menu
            mode="horizontal"
            style={{
            lineHeight: '62px',
            float: 'right'
          }}>
            <Menu.Item key="1">Logout</Menu.Item>
          </Menu>
        </Header>
        <Content style={contentStyles}>
          <UManagement/>
        </Content>
      </Layout>
    );
  }
}

export default AdminNav;