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
  Modal,
  message
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import {getInstances, getCompartments} from '../Server/Compartment';
import CompartmentCard from '../Cards/CompartmentCard';
import InstanceCard from '../Cards/InstanceCard';
import CredentialsModal from './Modals/CredentialsModal';
import Q from 'q';

var confirm = Modal.confirm;

class AdminConsole extends Component {
  constructor() {
    super();
    this.state = {
      cardTitle: null,
      colCount: 0,
      vms: null,
      credentials: false,
      compartment: false,
      loginType: 'O',
      compList: null,
      instances: null
  }
    this.getCompInstances = this.getCompInstances.bind(this);
    this.getCredentials = this.getCredentials.bind(this);
  }

  componentDidMount() {
    var that = this;
    //this.setState({ loginType: localStorage.getItem("loginType") });
    
    if (this.state.loginType === 'O') {
      that.getCompartment();
    }
  }


  getCredentials() {
    this.setState({credentials: true});
  }

  getCompInstances(com) {
    this.setState({ compList: com });
    this.setState({ cardTitle: com });
    console.log(com);
    
    var that = this;
    var instance = null;
    getInstances(com).then(response => {
    
        instance = Array.from(response);
        if (response[0]['token']) {
          instance = instance.concat(Array.from(response));
        } else if (!response[0]['token'] && instance === 'none') { that.setState({ credentials: true }); }
        that.setState({ instances: instance });
      
      }).catch(error => {
        return error;
      });
  }

  getCompartment() {
    var that = this;
    getCompartments().then(response => {
      console.log(response);
      if (response !== "Something went wrong.") {
        that.setState({ compList: response});
        console.log(that.state.compList);
      }

      if (that.state.compList.length <= 0) {
        that.setState({ compList: [{ name: 'none found', ocid:'none found' }] });
      }

      
    }).catch(error => {
      return '';
    });
  }
  



  render() {
    const cols = [];

    if (this.state.compList) {
      cols.push(
        <Col span={6}>
            <CompartmentCard title={this.state.compList} getCred={this.getCredentials} refreshOCI={() => this.getCompInstances}/> 
        </Col>
      );
      console.log(1);
      return (<div>
        <Row gutter={12}>
          {cols}
        </Row>
      </div>
      );
  
    } else if (this.state.compList && !this.state.instances) {
      console.log(2);

      cols.push(
        <Col span={6}>
            <CompartmentCard title={this.state.compList} getCred={this.getCredentials} refreshOCI={() => this.getCompInstances}/> 
        </Col>
      );
      cols.push(
        <Col span={8}>
          <Button type="primary" size="large" loading>
            Looking for Instances
          </Button>
        </Col>
      );

      return (<div>
        <Row gutter={12}>
        {cols}
        </Row>
        <CredentialsModal credentials={this.state.credentials} comp={true} />
      </div>
      );
  
    } else if (this.state.compList && this.state.instances === 'none') {
      console.log(3);

      cols.push(
        <Col span={6}>
          <CompartmentCard title={this.state.compList} getCred={this.getCredentials} refreshOCI={() => this.getCompInstances}/> 
        </Col>
      );
      return (<div>
        <Row gutter={12}>
          {cols}
        </Row>
        <CredentialsModal credentials={this.state.credentials} comp={this.state.compartment} />
      </div>
      );
  
    } else if (this.state.instances) {
      console.log(4);
      cols.push(
        <Col span={6}>
          <CompartmentCard title={this.state.compList} getCred={this.getCredentials} refreshOCI={() => this.getCompInstances}/>    
        </Col>
      );
      var vms = this.state.instances;
      for (var i = 0; i < vms.length; i++) {
        console.log(vms[i]);
        cols.push(
          <Col span={6}>
            <InstanceCard
              title={vms[i].name}
              vmID={vms[i]['token'] ? vms[i]['token'] : vms[i]['ip']}
              t={vms[i]['token'] ? 'vm' : 'c'}
              k={vms[i]['key']}
              refreshOCI={() => this.getCompInstances} />
          </Col>
        );
      }
      return (
        <div>
          <Row gutter={12}>
            {cols}
          </Row>
          <CredentialsModal credentials={this.state.credentials} comp={true} />
        </div>
      );
    } else {
      return (
        <Button type="primary" size="large" loading>
          Loading
        </Button>
    );
  }
}
  }

export default AdminConsole;