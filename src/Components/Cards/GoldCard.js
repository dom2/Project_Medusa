import React, {Component} from 'react';
import {Icon, Card, Badge, Dropdown, Button} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import goldImage from '../../theme/images/gold_image.png';
import {cloneBlueprint} from '../server/Blueprint';

class GoldCard extends Component {
  constructor() {
    super();
  }

  handleCreate = (e) => {
    cloneBlueprint(1);
  }
  render() {
    return (
      <Card title={this.props.title} bordered={false} style={vmCard}>
        <img src={goldImage}/>
        <div>
          <Button type="primary" size="large" onClick={this.handleCreate}>Create Instances</Button>
        </div>
      </Card>
    );
  }
}

export default GoldCard;
