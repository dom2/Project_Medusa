import React, {Component} from 'react';
import {
  Icon,
  Card,
  Badge,
  Dropdown,
  Button,
  Col,
  Row,
  Menu,
  message
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import {startStopVM, getVDIToken, destroyVM} from '../Server/Blueprint';
import vmImageH from '../../theme/images/vm.png';
import vmImage from '../../theme/images/vmg.png';
import Popup from 'popup-window';

class InstanceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: vmImage,
      vmToken: "",
      popOpen: false,
      win: null
    };
  }

  launchVM(vmID) {
    var that = this;
  
        var w = window.screen.availWidth*.95;
        var h = window.screen.availHeight*.95;
        var message = {
          token: vmID,
          width: w,
          height: h
        };
        var newWindow = window.open("http://129.146.85.80/", "_blank", "toolbar=no, menubar=no,scrollbars=yes,resizable=yes,width=" + window.screen.width + ",height=" + window.screen.height);
        var intervalID = setInterval(function () {
          newWindow.postMessage(message, "*");
        }, 1000);

        //listen to holla back
        window.addEventListener('message', function (event) {
          if (event.data) 
            console.log('that shit worked.');
          }
        , false);
        /*that.setState({
          win: new Popup('http://129.146.85.80/?token=' + response.token, {
            name: 'Guac',
            width: screen.width,
            height: screen.height
          })
        });
        that.state.win.open();*/
        that.setState({vmToken: this.props.vmID});
        that.setState({popOpen: true});
      }

  handleMouseOver = (e) => {
    this.setState({imgSrc: vmImageH});
  }

  handleMouseOut = (e) => {
    this.setState({imgSrc: vmImage});
  }
  clicked = (e) => {
    var that = this;
    if (e.key === "delete") {
      destroyVM(this.props.vmID);
    } else {
      startStopVM(this.props.vmID, e.key);
    }
    message.loading('Updating VM', 15, this.props.refreshVMS());
    window.setTimeout(function () {
      that
        .props
        .refreshVMS();
    }, 7000);

  }
  render() {

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
          <span style={{
            padding: '0 5px'
          }}></span>
        </div>
      </Card>
    );
  }
}

export default InstanceCard;