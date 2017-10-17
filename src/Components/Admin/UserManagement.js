import {Table, Icon} from 'antd';
import React, {Component} from 'react';

const columns = [
  {
    title: 'username',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">Action 一 {record.name}</a>
        <span className="ant-divider"/>
        <a href="#">Delete</a>
        <span className="ant-divider"/>
        <a href="#" className="ant-dropdown-link">
          More actions
          <Icon type="down"/>
        </a>
      </span>
    )
  }
];

const data = [
  {
    key: '1',
    name: 'JohnBrown'
  }, {
    key: '2',
    name: 'JimGreen'
  }, {
    key: '3',
    name: 'JoeBlack'
  }
];

//ReactDOM.render( <Table columns={columns} dataSource={data}/>, mountNode);