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
        return response.statusText;
      })
      .catch(function (error) {
        console.log(error);
        return 'false';
      });
  } else 
    return "logout";
  }

export async function getAllVDI() {
  if (lToken) {
    var vdi = url + "vdi";
    var auth = {
      headers: {
        "Authorization": lToken
      }
    }
    return axios
      .get(vdi, auth)
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

export async function getVDIToken(id) {
  if (lToken) {
    var vdi = url + "vdi/" + id;
    var auth = {
      headers: {
        "Authorization": lToken
      }
    }
    return axios
      .get(vdi, auth)
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

export async function startStopVM(id, action) {
  if (lToken) {
    var vdi = url + "vdi/" + id;
    var auth = {
      headers: {
        "Authorization": lToken
      }
    }
    return axios.put(vdi, {
      action: action
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

export async function setCredentials(id, user, pass) {
  if (lToken) {
    var vdi = url + "user/" + id;
    var auth = {
      headers: {
        "Authorization": lToken
      }
    }
    return axios.put(vdi, {
      rdp_uname: user,
      rdp_pword: pass
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