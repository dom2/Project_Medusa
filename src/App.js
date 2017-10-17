import React, {Component} from 'react';
import LoginNav from './Components/Initial/LoginNav';
import {Route, Link} from "react-router-dom";
import Routes from './Components/Routes';
import AdminNav from './Components/Admin/AdminNav';

class App extends Component {
  render() {
    return (<LoginNav/>);
  }
}

export default App;