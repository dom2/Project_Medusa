import React, {Component} from 'react';
import {
  Icon,
  Card,
  Badge,
  Dropdown,
  Button,
  Popover,
  InputNumber
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import goldImage from '../../theme/images/gold_image.png';
import {cloneBlueprint} from '../server/Blueprint';

class GoldCard extends Component {
  constructor() {
    super();
    this.state = {
      clones: 0
    };
  }

  handleCreate = (e) => {
    cloneBlueprint();
  }

  changeNum = (value) => {
    this.setState({clones: value});
  }

  render() {
    const content = (
      <div>
        <InputNumber min={1} max={10} defaultValue={1} onChange={this.changeNum}/>
        <Button type="primary" onClick={this.handleCreate}>Create</Button>
      </div>
    );
    return (
      <Card title={this.props.title} bordered={false} style={vmCard}>
        <img src={goldImage}/>
        <div>
          <Popover content={content} title="Title" trigger="click">
            <Button type="primary" size="large">Create Instances</Button>
          </Popover>
        </div>
      </Card>
    );
  }
}

export default GoldCard;
