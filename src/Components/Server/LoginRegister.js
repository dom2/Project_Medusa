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