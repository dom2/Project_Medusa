import React, {Component} from 'react';
import {
  Icon,
  Card,
  Col,
  Row,
  Badge,
  Menu,
  Dropdown,
  Button
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import goldImage from '../../theme/images/gold_image.png';
import vmImage from '../../theme/images/vm.png';

const vMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">Start</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">Stop</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">Destroy</a>
    </Menu.Item>
  </Menu>
);

class AdminConsole extends Component {

  render() {
    return (
      <Row gutter={12}>
        <Col span={6}>
          <Card title="Gold Image" bordered={false} style={vmCard}>
            <img src={goldImage}/>
            <div>
              <Button type="primary" size="large">Create Instance</Button>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="VM1" bordered={false} style={vmCard}>
            <img src={vmImage}/>
            <br/>
            <div>
              <Badge status="success" text="Running"/>
              <Dropdown overlay={vMenu}>
                <a className="ant-dropdown-link" href="#">
                  Actions
                  <Icon type="down"/>
                </a>
              </Dropdown>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="VM2" bordered={false} style={vmCard}>
            <img src={vmImage}/>
            <br/>

            <div>
              <Badge status="warning" text="Paused"/>
              <Dropdown overlay={vMenu}>
                <a className="ant-dropdown-link" href="#">
                  Actions
                  <Icon type="down"/>
                </a>
              </Dropdown>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="VM3" bordered={false} style={vmCard}>
            <img src={vmImage}/>
            <br/>

            <div>
              <Badge status="error" text="Stopped"/>
              <Dropdown overlay={vMenu}>
                <a className="ant-dropdown-link" href="#">
                  Actions
                  <Icon type="down"/>
                </a>
              </Dropdown>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AdminConsole;
