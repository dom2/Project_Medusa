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
import Register from './Register';
import AdminNav from '../Admin/AdminNav';
import {cardStyles, contentStyles, medusa, headStyles} from '../../theme/styles';
import {Link, Redirect} from "react-router-dom";
import {checkLogin} from '../server/LoginRegister';
const {Header, Content} = Layout;
const FormItem = Form.Item;

class LoginForm extends Component {
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
          checkLogin(values.userName, values.password).then(a => {
            console.log(a);
            if (a === 'Admin') {
              this.setState({adminRedirect: true});
            } else 
              console.log(a);
            }
          );
        }
      });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Layout>
        <Header style={headStyles}>
          <img src={logo} alt="" style={medusa}/>
        </Header>
        <Content style={contentStyles}>
          <Row>
            <Col span={6} offset={9}>
              <Card title="Login" bordered={false} style={cardStyles}>
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
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true
                    })(
                      <Checkbox>Remember me</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Login
                    </Button>
                    <div>Or
                      <Link
                        style={{
                        marginLeft: 5
                      }}
                        to="/Register">
                        Register</Link>
                    </div>
                  </FormItem>
                </Form>
              </Card>
            </Col>
          </Row>
          {this.state.adminRedirect && (<Redirect to='/AdminNav'/>)}
        </Content>
      </Layout>
    );
  }
}

const Login = Form.create()(LoginForm);

export default Login;
