import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from './Initial/Register';
import Login from './Initial/Login';
import LoginNav from './Initial/LoginNav';
import AdminConsole from './Admin/AdminConsole';
import AdminNav from './Admin/AdminNav';
import UserConsole from './User/UserConsole';
import UserNav from './User/UserNav';
import UserManagement from './Admin/UserManagement';
import App from '../App';

const Routes = (
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/LoginNav" component={LoginNav}/>
    <Route path="/Register" component={Register}/>
    <Route path="/Login" component={Login}/>
    <Route path="/AdminNav" component={AdminNav}/>
    <Route path="/UserNav" component={UserNav}/>
  </Switch>

);

export default Routes;