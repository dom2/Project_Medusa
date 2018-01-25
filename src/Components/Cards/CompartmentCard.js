import React, {Component} from 'react';
import {
  Icon,
  Card,
  Badge,
  Dropdown,
  Button,
  Popover,
  InputNumber,
  Avatar,
  message
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import goldImage from '../../theme/images/gold_image.png';
import { cloneBlueprint, getAllVDI } from '../Server/Blueprint';

var FA = require('react-fontawesome');


const { Meta } = Card;

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
           <Button type="primary" size="default" onClick={() => this.props.getCred}>
            Change RDP
          </Button>  
          <Button type="primary" size="default" onClick={() => this.setState({compartmentOpen:true})}>Change Compartment</Button>
        </div>
      </Card>
      <Card
        style={{vmCard}}
        cover={<FontAwesome
                  className='super-crazy-colors'
                  name='dropbox'
                  size='2x'
                  spin
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />}
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    );
  }
}

export default CompartmentCard;
