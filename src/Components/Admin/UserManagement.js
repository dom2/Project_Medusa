import React, {Component} from 'react';
import {Button, Table, Icon} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";

const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    render: text => <a href="#">{text}</a>
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  }, {
    title: 'Password',
    dataIndex: 'password',
    key: 'password'
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">Delete</a>
        <span className="ant-divider">
          /
        </span>
        <a href="#">
          Update Password</a>
        <span className="ant-divider">
          /
        </span>
        <a href="#">
          Associate VM</a>

      </span>
    )
  }
];

const data = [
  {
    key: '1',
    username: 'jbrown',
    email: 'jbrown@oracle.com',
    password: '********'
  }, {
    key: '2',
    username: 'jgreen',
    email: 'jgreen@oracle.com',
    password: '********'
  }, {
    key: '3',
    username: 'jblack',
    email: 'jblack@oracle.com',
    password: '********'
  }
];

class UserConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      this.state.users: null
    }
    this.refreshVMS = this
      .refreshVMS
      .bind(this);
  }
  render() {
    if (this.state.users) {
      return (
        <div>
          <Button
            type="danger"
            icon="plus"
            size='large'
            ghost
            style={{
            marginBottom: '20px'
          }}>Create User</Button>
          <Table columns={columns} dataSource={users}/>
        </div>
      );
    } else 
      return (
        <Button type="primary" size="large" loading>
          Loading Users
        </Button>
      );
    }
  }

export default UserConsole;
