import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import AdminConsole from './AdminConsole';
import {Layout, Menu} from 'antd';
import {contentStyles, medusa, headStyles} from '../../theme/styles';

const {Header, Content} = Layout;

class AdminNav extends Component {
  render() {
    return (
      <Layout>
        <Header style={headStyles}>
          <span style={medusa}>
            <img src={logo} alt=""/>
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
          <Menu
            mode="horizontal"
            style={{
            lineHeight: '64px',
            float: 'right'
          }}>
            <Menu.Item key="1">Logout</Menu.Item>
          </Menu>
        </Header>
        <Content style={contentStyles}>
          <AdminConsole/>
        </Content>
      </Layout>
    );
  }
}

export default AdminNav;