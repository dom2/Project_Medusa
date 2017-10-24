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
import vmImageH from '../../theme/images/vm.png';
import vmImage from '../../theme/images/vmg.png';
import Popup from 'popup-window';

class CloneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      imgSrc: vmImage,
      vmToken: "",
      popOpen: false,
      win: null
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
    this
      .props
      .refreshVMS();
  }

  launchVM(vmID) {
    var that = this;
    getVDIToken(vmID).then(function (response) {
      console.log(response);
      var message = {
        token: response.token,
        width: window.screen.width,
        height: window.screen.height
      };
      window
        .open('http://129.146.85.80/', "width=" + window.screen.width + ",height=" + window.screen.height)
        .postMessage(message, window.location.href);
      /*that.setState({
        win: new Popup('http://129.146.85.80/?token=' + response.token, {
          name: 'Guac',
          width: screen.width,
          height: screen.height
        })
      });
      that.state.win.open();*/
      that.setState({vmToken: response.token});
      that.setState({popOpen: true});
    });
  }
  handleMouseOver = (e) => {
    this.setState({imgSrc: vmImageH});
  }

  handleMouseOut = (e) => {
    this.setState({imgSrc: vmImage});
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
          onMouseOver={(e) => this.handleMouseOver(e)}
          onMouseOut={(e) => this.handleMouseOut(e)}
          src={this.state.imgSrc}
          onClick={() => {
          this.launchVM(this.props.vmID)
        }}/>
        <br/>
        <div>
          <Badge status={this.state.status} text={this.props.status}/>
          <span style={{
            padding: '0 5px'
          }}></span>
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