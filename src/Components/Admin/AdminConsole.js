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
import {getBlueprint, getAllVDI} from '../server/Blueprint';
import GoldCard from '../Cards/GoldCard';
import CloneCard from '../Cards/CloneCard';
import CredentialsModal from './CredentialsModal';
//var q = require(q);

class AdminConsole extends Component {
  constructor() {
    super();
    this.state = {
      cardTitle: null,
      colCount: 0,
      vms: null,
      credentials: false
    }
  }

  componentDidMount() {
    var that = this;
    getBlueprint().then(response => {
      if (response) 
        this.setState({cardTitle: response.description});
      console.log(response.description);
      if (!response.credentials) 
        that.getCredentials();
      getAllVDI()
        .then(function (response) {
          that.setState({vms: response});
        });
    }).catch(error => {
      console.log(error);
      return '';
    });
  }

  getCredentials() {
    this.setState({credentials: true});
  }

  getVMS() {
    /**/
    console.log('worked');
  }

  render() {
    const cols = [];
    cols.push(
      <Col span={6}>
        <GoldCard title={this.state.cardTitle} func={this.getVMS}/>
      </Col>
    );
    if (this.state.cardTitle && this.state.vms) {
      var vms = this.state.vms;
      for (var i = 0; i < vms.length; i++) {
        console.log(vms[i]);
        cols.push(
          <Col span={6}>
            <CloneCard
              title={vms[i].name}
              status={vms[i].status}
              vmID={vms[i].id}
              user={vms[i].assigned_user}/>
          </Col>
        );
      }
      return (
        <div>
          <Row gutter={12}>
            {cols}
          </Row>
          <CredentialsModal credentials={this.state.credentials}/>
        </div>

      );
    } else if (this.state.cardTitle) {
      return (
        <div>
          <Row gutter={12}>
            {cols}
          </Row>
          <CredentialsModal credentials={this.state.credentials}/>
        </div>
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
