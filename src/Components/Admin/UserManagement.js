import React, {Component} from 'react';
import {Button, Table, Icon} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import CreateUserModal from './CreateUserModal';
import {getAllUsers, assignVM, createUser} from "../server/UserAdmin";

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
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">Delete</a>
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
      users: null,
      cuOpen: false
    }
  }

  componentDidMount() {
    var that = this;
    getAllUsers().then(response => {
      if (response) 
        this.setState({users: response});
      }
    ).catch(error => {
      console.log(error);
      return '';
    });
  }

  render() {
    if (true) {
      return (
        <div>
          <Button
            type="danger"
            icon="plus"
            size='large'
            onClick={(e) => {
            this.setState({cuOpen: true});
          }}
            ghost
            style={{
            marginBottom: '20px'
          }}>Create User</Button>
          <Table columns={columns} dataSource={this.state.users}/>
          <CreateUserModal open={this.state.cuOpen}/>
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
