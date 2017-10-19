import React, {Component} from 'react';
import {
  Icon,
  Card,
  Badge,
  Dropdown,
  Button,
  Col,
  Row
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import goldImage from '../../theme/images/gold_image.png';
import {cloneBlueprint} from '../server/Blueprint';

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

class CloneCard extends Component {
  constructor() {
    super();
  }

  handleCreate = (e) => {
    cloneBlueprint(1);
  }
  render() {
    return (
      <Card title={this.props.title} bordered={false} style={vmCard}>
        <img src={vmImage}/>
        <br/>
        <div>
          <Badge status={this.props.status} text={this.props.status}/>
          <Dropdown overlay={vMenu}>
            <a className="ant-dropdown-link" href="#">
              Actions
              <Icon type="down"/>
            </a>
          </Dropdown>
        </div>
      </Card>
    );
  }
}

export default CloneCard;