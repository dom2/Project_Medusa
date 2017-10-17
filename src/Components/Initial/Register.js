import React, {Component} from 'react';
import logo from '../../theme/images/logo.png';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Card,
  Layout,
  Row,
  Col,
  Menu
} from 'antd';
import Login from './Register';
import AdminConsole from '../Admin/AdminConsole';
import {cardStyles, contentStyles, medusa, headStyles} from '../../theme/styles';
import {Link} from "react-router-dom";

const {Header, Content} = Layout;
const FormItem = Form.Item;

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      adminRedirect: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Layout>
        <Header style={headStyles}>
          <div>
            <img src={logo} height={60} width={195} alt=""/>
            <span style={medusa}>
              Project Medusa
            </span>
          </div>
        </Header>
        <Content style={contentStyles}>
          <Row>
            <Col span={6} offset={9}>
              <Card title="Register" bordered={false} style={cardStyles}>
                <Form onSubmit={this.handleSubmit} className="register-form">
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
                  <FormItem hasFeedback>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!'
                        }, {
                          validator: this.checkConfirm
                        }
                      ]
                    })(
                      <Input
                        prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                        type="password"
                        placeholder="Password"/>
                    )}
                  </FormItem>
                  <FormItem hasFeedback>
                    {getFieldDecorator('confirm', {
                      rules: [
                        {
                          required: true,
                          message: 'Please confirm your password!'
                        }, {
                          validator: this.checkPassword
                        }
                      ]
                    })(
                      <Input
                        prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                        type="password"
                        placeholder="Confirm Password"/>
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('rUserName', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Ravello username!'
                        }
                      ]
                    })(
                      <Input
                        prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>}
                        placeholder="Ravello Username"/>
                    )}
                  </FormItem>
                  <FormItem hasFeedback>
                    {getFieldDecorator('rPassword', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Ravello password!'
                        }, {
                          validator: this.checkConfirm
                        }
                      ]
                    })(
                      <Input
                        prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                        type="password"
                        placeholder="Ravello Password"/>
                    )}
                  </FormItem>
                  <FormItem hasFeedback>
                    {getFieldDecorator('confirm', {
                      rules: [
                        {
                          required: true,
                          message: 'Please confirm your Ravello password!'
                        }, {
                          validator: this.checkPassword
                        }
                      ]
                    })(
                      <Input
                        prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                        type="password"
                        placeholder="Confirm Ravello Password"/>
                    )}
                  </FormItem>

                  <FormItem>
                    <Button type="primary" htmlType="submit">Register</Button>
                    <div>Or
                      <Link
                        style={{
                        marginLeft: 5
                      }}
                        to="/Login">Login</Link>
                    </div>
                  </FormItem>
                </Form>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

const Register = Form.create()(RegisterForm);

export default Register;