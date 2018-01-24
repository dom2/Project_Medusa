import React, {Component} from 'react';
import {
  Icon,
  Card,
  Badge,
  Dropdown,
  Button,
  Col,
  Row,
  Menu,
  message,
  Modal,
  Upload,
  Form
} from 'antd';
import {cardStyles, vmCard} from '../../theme/styles';
import {Link} from "react-router-dom";
import {startStopVM, getVDIToken, destroyVM} from '../Server/Blueprint';
import {setConsoleKey} from '../Server/Compartment';
import vmImageH from '../../theme/images/vm.png';
import vmImage from '../../theme/images/vmg.png';
import Popup from 'popup-window';

const FormItem = Form.Item;


class InstanceCard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: vmImage,
      vmToken: "",
      popOpen: false,
      win: null,
      upload: false,
      fileList: [],
      file: null
    };
  }


  runVMType() {
    console.log(this.props.k);
    if (this.props.k) {} else if (this.props.k === false) {
      this.setState({upload: true});
    } else 
      this.launchVM(this.props.vmID)
  }

  launchVM(vmID) {
    var that = this;

    var w = window.screen.availWidth * .95;
    var h = window.screen.availHeight * .95;
    var message = {
      token: vmID,
      width: w,
      height: h
    };
    var newWindow = window.open("http://129.146.85.80/", "_blank", "toolbar=no, menubar=no,scrollbars=yes,resizable=yes,width=" + window.screen.width + ",height=" + window.screen.height);
    var intervalID = setInterval(function () {
      newWindow.postMessage(message, "*");
    }, 1000);

    //listen to holla back
    window.addEventListener('message', function (event) {
      if (event.data) 
        console.log('that shit worked.');
      }
    , false);
    that.setState({vmToken: this.props.vmID});
    that.setState({popOpen: true});
  }

  handleMouseOver = (e) => {
    this.setState({imgSrc: vmImageH});
  }

  handleMouseOut = (e) => {
    this.setState({imgSrc: vmImage});
  }
  clicked = (e) => {
    var that = this;
    if (e.key === "delete") {
      destroyVM(this.props.vmID);
    } else {
      startStopVM(this.props.vmID, e.key);
    }
    message.loading('Updating VM', 15, this.props.refreshVMS());
    window.setTimeout(function () {
      that
        .props
        .refreshVMS();
    }, 7000);

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, values) => {
        const {fileList} = this.state;
        const formData = new FormData();
        formData.append('ip', this.props.vmID);
        formData.append('file', this.state.file);
        setConsoleKey(formData).then(a => {
          if (a === 'OK') {
            this.setState({upload: false});
          }
        });
      });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { uploading } = this.state;
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        console.log(file);
        var ft = file.name.split('.')[1];
        if (ft === 'pem') {
          this.setState({ fileList: [] });
          this.setState({ file: file });
          this.setState(({ fileList }) => ({
            fileList: [...fileList, file],
          }));
          return false;
        }
      },
      fileList: this.state.fileList,
    };
    return (
      <span>
        <Card title={this.props.title} bordered={false} style={vmCard}>
          <img
            onMouseOver={(e) => this.handleMouseOver(e)}
            onMouseOut={(e) => this.handleMouseOut(e)}
            src={this.state.imgSrc}
            onClick={() => {
            this.runVMType()
          }}/>
          <br/>
          <div>
            <span style={{
              padding: '0 5px'
            }}></span>
          </div>
        </Card>
        <Modal
          title="Upload OpenSSL Key"
          visible={this.state.upload}
          closable={false}
          footer={null}>
          <Form onSubmit={this.handleSubmit} className="comp-form">
            <FormItem hasFeedback>
              {getFieldDecorator('upload', {
                rules: [
                  {
                    required: true,
                    message: 'Please upload OpenSSL key!'
                  }, {
                    validator: this.checkConfirm
                  }
                ]
              })(
                <div>

                  <Upload {...props}>
                  <Button size="large">
                      <Icon type="upload"/>
                      Upload Private Key
                    </Button>
                  </Upload>
                </div>
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">Upload</Button>
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

const InstanceCard = Form.create()(InstanceCard2);

export default InstanceCard;