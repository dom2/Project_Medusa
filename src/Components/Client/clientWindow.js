import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import {Layout, Menu} from 'antd';
import {contentStyles, medusa, headStyles} from '../../theme/styles';
import Script from 'react-load-script';

const {Header, Content} = Layout;
var Guacamole = null;

class ClientWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guac1: false,
      guac2: false,
      scriptError: false,
      scriptLoaded: false,
      open: false
    };
  }
  componentDidMount() {
    console.log('FUUUUUUUUUUCCCCKKCKCKC');

    this.setState({open: this.props.open});
  }
  handleScriptCreate() {
    this.setState({scriptLoaded: false})
  }

  handleScriptError() {
    this.setState({scriptError: true})
  }

  handleScriptLoad1() {
    this.setState({guac1: true})
    this.connect();
  }

  handleScriptLoad2() {
    this.setState({guac2: true})
    this.connect();
  }

  render() {
    if (this.state.open) {
      return ();
    } else 
      return (
        <span></span>
      );
    }
  }

export default ClientWindow;