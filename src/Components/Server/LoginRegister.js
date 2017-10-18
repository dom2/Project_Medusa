import axios from 'axios';
var token = require('basic-auth-token');

const url = 'http://129.146.85.80:8000/';

export async function checkLogin(user, pass) {
  var login = url + "login";
  var lToken = "Basic " + token(user, pass);
  var auth = {
    headers: {
      "Authorization": lToken
    }
  }
  return axios
    .get(login, auth)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

export async function registerAdmin(user, pass, ruser, rpass) {}

export async function getAllVDI() {
  return axios
    .get(url + 'vdi')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}