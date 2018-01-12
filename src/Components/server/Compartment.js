import axios from 'axios';
var token = require('basic-auth-token');

const url = 'http://129.146.85.80:8000/';
const lToken = sessionStorage.getItem("lToken");

export async function setCompartment(nickname, comp) {
  if (lToken) {
    var vdi = url + "compartment";
    var auth = {
      headers: {
        "Authorization": lToken
      }
    }
    return axios.post(vdi, {
      name:nickname,
      compartment_ocid: comp
    }, auth)
      .then(function (response) {
        console.log(response);
        return response.statusText;
      })
      .catch(function (error) {
        console.log(error);
        return 'false';
      });
  } else 
    return "logout";
}
  
export async function getCompartments() {
  if (lToken) {
    var compartments = url + "compartment";
    var auth = {
      headers: {
        "Authorization": lToken
      }
    }
    return axios
      .get(compartments, auth)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return "Something went wrong.";
      });
  } else 
    return "logout";
}
  
export async function getInstances(ocid) {
  if (lToken) {
    var compartments = url + "instances" + "/" + ocid;
    var auth = {
      headers: {
        "Authorization": lToken
      }
    }
    return axios
      .get(compartments, auth)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return "Something went wrong.";
      });
  } else 
    return "logout";
  }