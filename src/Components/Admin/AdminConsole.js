import React, {Component} from 'react';
import {
  Icon,
  Card,
  Col,
  Row,
  Badge,
  Menu,
  Dropdown,
  Button,
  Modal
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import goldImage from '../../theme/images/gold_image.png';
import vmImage from '../../theme/images/vm.png';
import {getBlueprint, getAllVDI} from '../server/Blueprint';
import GoldCard from '../Cards/GoldCard';
import CloneCard from '../Cards/CloneCard';
import CredentialsModal from './CredentialsModal';
import Q from 'q';

var confirm = Modal.confirm;

class AdminConsole extends Component {
  constructor() {
    super();
    this.state = {
      cardTitle: null,
      colCount: 0,
      vms: null,
      credentials: false
    }
    this.refreshVMS = this
      .refreshVMS
      .bind(this);
  }

  componentDidMount() {
    var that = this;
    getBlueprint().then(response => {
      if (response) 
        this.setState({cardTitle: response.description});
      if (!response.credentials) 
        that.getCredentials();
      that.refreshVMS();
    }).catch(error => {
      console.log(error);
      return '';
    });
  }
  refreshVMS() {
    var that = this;
    getAllVDI().then(function (response) {
      console.log(response);
      that.setState({vms: response});
    });
  }
  getCredentials() {
    this.setState({credentials: true});
  }

  render() {
    const cols = [];
    cols.push(
      <Col span={6}>
        <GoldCard title={this.state.cardTitle} refreshVMS={this.refreshVMS}/>
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
              user={vms[i].assigned_user}
              refreshVMS={this.refreshVMS}/>
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
