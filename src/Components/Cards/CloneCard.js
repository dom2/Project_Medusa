import React, {Component} from 'react';
import {
  Icon,
  Card,
  Badge,
  Dropdown,
  Button,
  Col,
  Row,
  Menu
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import {startStopVM, getVDIToken} from '../server/Blueprint';
import vmImage from '../../theme/images/vm.png';

class CloneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }

  componentDidMount() {
    if (this.props.status === "\"STOPPED\"") {
      this.setState({status: 'error'})
    } else if (this.props.status === "\"STARTED\"") {
      this.setState({status: 'success'})
    } else {
      this.setState({status: 'processing'})
    }
  }

  clicked = (e) => {
    startStopVM(this.props.vmID, e.key);
  }

  launchVM(vmID) {
    getVDIToken(vmID)
      .then(function (response) {
        console.log(response);
      });
  }

  render() {
    const vMenu = (
      <Menu onClick={this.clicked}>
        <Menu.Item key="start">
          Start
        </Menu.Item>
        <Menu.Item key="stop">
          Stop
        </Menu.Item>
        <Menu.Item key="poop">
          Destroy
        </Menu.Item>
      </Menu>
    );
    return (
      <Card title={this.props.title} bordered={false} style={vmCard}>
        <img
          src={vmImage}
          onClick={() => {
          this.launchVM(this.props.vmID)
        }}/>
        <br/>
        <div>
          <Badge
            status={this.state.status}
            text={this.props.status}
            style={{
            marginRight: '10px'
          }}/>
          <Dropdown overlay={vMenu}>
            <a className="ant-dropdown-link" href="#">
              Actions
              <Icon type="down"/>
            </a>
          </Dropdown>
          <div>
            Assigned User: {this.props.user}
          </div>
        </div>
      </Card>
    );
  }
}

export default CloneCard;