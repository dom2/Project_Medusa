import axios from 'axios';
var token = require('basic-auth-token');

const url = 'http://129.146.85.80:8000/';
const lToken = sessionStorage.getItem("lToken");

export async function getBlueprint() {
  if (lToken) {
    var blueprint = url + "blueprint";
    var auth = {
      headers: {
        "Authorization": lToken
      }
    }
    return axios
      .get(blueprint, auth)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return "Something went wrong.";
      });
  } else 
    return "logout";
  }

export async function cloneBlueprint(quant) {
  if (lToken) {
    var vdi = url + "vdi";
    var auth = {
      headers: {
        "Authorization": lToken
      }
    }
    return axios.post(vdi, {
      quantity: quant
    }, auth)
      .then(function (response) {
        console.log(response);
        return '';
      })
      .catch(function (error) {
        console.log(error);
        return '';
      });
  } else 
    return "logout";
  }