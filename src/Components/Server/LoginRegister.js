import axios from 'axios';
var token = require('basic-auth-token');

const url = 'http://129.146.85.80:8000/';

export async function checkLogin(user, pass) {
  var login = url + "login";
  sessionStorage.setItem("lToken", "Basic " + token(user, pass));
  var auth = {
    headers: {
      "Authorization": sessionStorage.getItem("lToken")
    }
  }
  return axios
    .get(login, auth)
    .then(function (response) {
      console.log(response.data);
      return {0:response.data, 1:'R'};
    })
    .catch(function (error) {
      console.log(error);
      localStorage.setItem("loginType", "R");
      return false;
    });
}

export async function checkLoginOCI(user, pass) {
  var login = url + "ocilogin";
  sessionStorage.setItem("lToken", "Basic " + token(user, pass));
  var auth = {
    headers: {
      "Authorization": sessionStorage.getItem("lToken")
    }
  }
  return axios
    .get(login, auth)
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem("loginType", "O");
      return {0:response.data, 1:'O'};
    })
    .catch(function (error) {
      checkLogin(user, pass);
      return false;
    });
}

export async function registerRavello(user, pass, rUser, rPass) {
  var link = url + "register";
  return axios
    .post(link, {
      username: user,
      password: pass,
      ravello_username: rUser,
      ravello_password: rPass
    })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

export async function registerOCI(formData) {
  var link = url + "ociregister";
  return axios
    .post(link, formData,
    {headers: {
      'Content-Type': 'multipart/form-data'
    }})
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
    
}

export async function logout() {
  sessionStorage.removeItem("lToken");
}