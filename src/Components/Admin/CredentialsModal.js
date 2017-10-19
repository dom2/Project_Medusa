import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import {Form, Icon, Input, Button, Modal} from 'antd';
import {setCredentials} from '../server/Blueprint';
const FormItem = Form.Item;

class CredModal extends Component {
  constructor() {
    super();
    this.state = {
      credentials: false
    }
  }

  componentDidMount() {
    this.setState({credentials: this.props.credentials});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, values) => {
        if (!err) {
          setCredentials("id", values.userName, values.password).then(a => {
            console.log(a);
            if (a) 
              this.setState({credentials: false});
            }
          );
        }
      });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Modal
        title="Gold Image RDP Credentials Needed"
        visible={this.state.credentials}
        closable={false}
        footer={null}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: 'Please input your username!'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>}
                placeholder="Username"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                type="password"
                placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Save
            </Button>
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const CredentialsModal = Form.create()(CredModal);

export default CredentialsModal;
