import React, {Component} from 'react';
import {
  Icon,
  Card,
  Badge,
  Dropdown,
  Button,
  Popover,
  InputNumber,
  message
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import goldImage from '../../theme/images/gold_image.png';
import {cloneBlueprint, getAllVDI} from '../server/Blueprint';

class CompartmentCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compartmentOpen: false
    };
  }

  componentWillReceiveProps() {
    if (this.props.compartmentOpen !== this.state.compartmentOpen) {
      this.setState({ compartmentOpen: this.props.compartmentOpen });
    }
  }

  handleCreate = (e) => {
    
  }

  render() {

    return (
      <Card title={this.props.title} bordered={false} style={vmCard}>
        <img src={goldImage}/>
        <div style={{
          padding: "12px 0 4px"
        }}>
           <Button type="primary" size="medium" onClick={() => this.props.getCred}>
            Change RDP
          </Button>  
          <Button type="primary" size="medium" onClick={() => this.setState({compartmentOpen:true})}>Change Compartment</Button>
        </div>
      </Card>
    );
  }
}

export default CompartmentCard;
