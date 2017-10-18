import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import AdminConsole from './AdminConsole';
import {Route, Link, Switch} from "react-router-dom";
import UManagement from './UserManagement';
import {Layout, Menu} from 'antd';
import {contentStyles, medusa, headStyles} from '../../theme/styles';

const {Header, Content} = Layout;

class AdminNav extends Component {
  constructor() {
    super();
    this.state = {
      current: 'a'
    };
  }

  handleClick = (e) => {
    this.setState({current: e.key});
  }

  render() {
    return (
      <Layout>
        <Header style={headStyles}>
          <img src={logo} alt="" style={medusa}/>
          <Menu
            onClick={this.handleClick}
            theme="light"
            mode="horizontal"
            selectedKeys={[this.state.current]}
            style={{
            lineHeight: '62px',
            float: 'left',
            color: '#DEE0E0'
          }}>
            <Menu.Item key="a">
              <Link to="/AdminNav/AdminConsole">Admin Console</Link>
            </Menu.Item>
            <Menu.Item key="u">
              <Link to="/AdminNav/UManagement">User Management</Link>
            </Menu.Item>
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
          <Route exact path="/AdminNav" component={AdminConsole}/>
          <Route path="/AdminNav/AdminConsole" component={AdminConsole}/>
          <Route path="/AdminNav/UManagement" component={UManagement}/>
        </Content>
      </Layout>
    );
  }
}

export default AdminNav;