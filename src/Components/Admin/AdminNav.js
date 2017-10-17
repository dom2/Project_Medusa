import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import AdminConsole from './AdminConsole';
import {Layout, Menu, Button} from 'antd';
import {contentStyles, medusa, headStyles} from '../../theme/styles';

const {Header, Content} = Layout;

class AdminNav extends Component {
  render() {
    return (
      <Layout>
        <Header style={headStyles}>
          <span style={medusa}>
            Project Medusa
          </span>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{
            lineHeight: '64px',
            float: 'left',
            color: '#F80000'
          }}>
            <Menu.Item key="1">Admin Console</Menu.Item>
            <Menu.Item key="2">User Management</Menu.Item>
          </Menu>
          <Button></Button>
        </Header>
        <Content style={contentStyles}>
          <AdminConsole/>
        </Content>
      </Layout>
    );
  }
}

export default AdminNav;