import React, {Component} from 'react';
import logo from '../../../theme/images/logo.png';
import {Form, Icon, Input, Button, Modal, Cascader} from 'antd';
import {setCompartment, getCompartments, getInstances} from '../../server/Compartment';
const FormItem = Form.Item;
const { TextArea } = Input;

class CompModal extends Component {
  constructor() {
    super();
    this.state = {
      compartment: false,
      compVal: 'validating',
      compList: null
    }
  }

  componentWillReceiveProps() {
    this.setState({ compartment: this.props.compartment });
    this.checkComponents();
  }

  checkComponents() {
    var that = this;
    getCompartments().then(response => {
      console.log(response);
      var ocid = response[0].compartment_ocid;
      getInstances(ocid);

      that.setState({ compList: response });
      if (that.state.compList === {}) that.setState({ compList: 'none found' });
      that.setState({ compVal: 'success' });
      
    }).catch(error => {
      this.setState({compVal: 'error'});
      return '';
    });
  }

  reformatCompartments(comps) {
    for (var i = 0; i < comps.length; i++){
      
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, values) => {
        if (!err) {
          setCompartment(values.nickname, values.compartment_ocid).then(a => {
            console.log(a);
            if (a) 
              this.setState({compartment: false});
            }
          );
        }
      });
  }

  ////
  //for cascader rename array from ocid to value and nick name to label
  //goes under looking for components
  //<Cascader defaultValue={['1']} options={this.state.compList} />
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Modal
        title="Set Compartment"
        visible={this.state.compartment}
        closable={false}
        footer={null}>
        <Form onSubmit={this.handleSubmit} className="comp-form">
        <FormItem
          label="Validating"
          hasFeedback
          validateStatus="this.state.compVal"
          help="Looking for components..."
          >
            
          
        </FormItem>
          <FormItem>
            {getFieldDecorator('nickname', {
              rules: [
                {
                  required: true,
                  message: 'Please input a nickname for your compartment!'
                }
              ]
            })(
              <Input
                placeholder="nickname"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('compartment_ocid', {
              rules: [
                {
                  required: true,
                  message: 'Please input your compartment_ocid!'
                }
              ]
            })(
              <TextArea placeholder="compartment_ocid" rows={3} />
            )}
          </FormItem>
          <FormItem style={{
            float: 'right'
          }}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              GO
            </Button>
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const CompartmentModal = Form.create()(CompModal);

export default CompartmentModal;
