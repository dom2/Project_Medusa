import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import {Form, Icon, Input, Button, Modal} from 'antd';
import {createUser} from '../server/UserAdmin';
const FormItem = Form.Item;

var generatePassword = require('password-generator');

class CreateUserForm extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  componentWillReceiveProps() {
    this.setState({open: this.props.open});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, values) => {
        if (!err) {
          createUser(values.userName, values.password, values.email).then(a => {
            console.log(a);
            if (a) 
              this.setState({open: false});
            }
          );
        }
      });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Modal title="New User" visible={this.state.open} footer={null}>
        <Form onSubmit={this.handleSubmit} className="cred-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: 'Please input a username!'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>}
                placeholder="Username"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please input an email!'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "mail" style = {{ fontSize: 13 }}/>}
                placeholder="Email"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true
                }
              ]
            })(
              <Input
                prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                disabled
                value={generatePassword(12, false)}/>
            )}
          </FormItem>

          <FormItem style={{
            float: 'right'
          }}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Save
            </Button>
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const CreateUserModal = Form.create()(CreateUserForm);

export default CreateUserModal;
