import axios from 'axios';

const url = 'http://129.146.85.80:8000/';

export async function checkLogin(username, password) {
  var login = url + "login/" + username.toLowerCase() + "/" + password;
  return axios
    .get(login)
    .then(function (response) {
      console.log(response);
      if (response.data.IS_AUTHENTICATED === "TRUE") {
        return true;
      } else 
        return false;
      }
    )
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