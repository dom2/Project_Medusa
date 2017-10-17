import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import AdminConsole from './AdminConsole';
import { Layout, Menu } from 'antd';
import { contentStyles, medusa, headStyles } from '../../theme/styles';

const {Header, Content} = Layout;

class AdminNav extends Component {
  render() {
    return (
      <Layout>
        <Header style={headStyles}>
          <div>
          <img src={logo} height={60} width={195} alt="" />
          <span style={medusa}> Project Medusa</span>
          </div>  
          
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key="1">User Management</Menu.Item>
            <Menu.Item key="2">Logout</Menu.Item>
          </Menu>
        </Header>
        <Content style={contentStyles}>
                  <AdminConsole />
        </Content>
      </Layout>
    );
  }
}

export default AdminNav;