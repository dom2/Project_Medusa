import React, {Component} from 'react';
import Login from './Login';
import Register from './Register';
import {Layout, Row, Col, Menu} from 'antd';
import {contentStyles, medusa, headStyles} from '../../theme/styles';
import logo from '../../theme/images/logo.png';

const {Header, Content} = Layout;

class LoginNav extends Component {
  render() {
    return (
      <Layout>
        <Header style={headStyles}>
          <div>
            <img src={logo} height={60} width={195} alt=""/>
            <span style={medusa}>
              Project Medusa
            </span>
          </div>
        </Header>
        <Content style={contentStyles}>
          <Row>
            <Col span={6} offset={9}>
              <Login/>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default LoginNav;