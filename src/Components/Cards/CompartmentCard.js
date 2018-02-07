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
import {cardStyles, vmCard, compCard, cardIcon} from '../../theme/styles';
import { Link } from "react-router-dom";
import { Table } from 'antd';
var FA = require('react-fontawesome');
const { Meta } = Card;

const columns = [
  { title: 'Compartments', dataIndex: 'name', key: 'name' },
];

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

  selectRow = (record) => {
    this.props.refreshOCI(record.ocid);
  }


  render() {

    return (
      <Card
        style={{vmCard}}
        cover={<Table
                  columns={columns}
                  expandedRowRender={record => <p style={{ margin: 0 }}>{record.ocid}</p>}
                  dataSource={this.props.title}
                  onRow={(record) => ({
                    onClick: () => {
                      this.selectRow(record);
                    },
                  })}
                />}
        actions={[<Icon type="key" onClick={() => this.props.getCred()}/>]}
      >
        <Meta
          avatar={<Icon style={{ fontSize: 32}} type="dropbox"/>}
          title="{Compartments}"
          description="Compartment"
        />
      </Card>
    );
  }
}

export default CompartmentCard;
