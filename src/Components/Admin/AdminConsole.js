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
import {getBlueprint} from '../server/Blueprint';
import GoldCard from '../Cards/GoldCard';
import CloneCard from '../Cards/CloneCard';

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
  constructor() {
    super();
    this.state = {
      cardTitle: null,
      colCount: 0
    }
  }

  componentDidMount() {
    getBlueprint().then(response => {
      if (response) 
        this.setState({cardTitle: response.description});
      console.log(response.description);
    }).catch(error => {
      console.log(error);
      return '';
    });
  }

  render() {
    const cols = [];
    cols.push(
      <Col span={6}>
        <GoldCard title={this.state.cardTitle}/>
      </Col>
    );

    if (this.state.cardTitle) {
      return (
        <Row gutter={12}>
          <Col span={6}>
            <GoldCard title={this.state.cardTitle}/>
          </Col>
        </Row>
      );
    } else 
      return (
        <Button type="primary" size="large" loading>
          Loading
        </Button>
      );
    }
  }

export default AdminConsole;
