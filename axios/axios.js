const axios = require('axios');

const fetchAllUsers = () => {
  console.log('Fetching data...');
  return axios
    .get(`https://supportifyafrica.herokuapp.com/api/users`)
    .then(response => {
      return response.data;
    })
}



mondule.exports = {
  fetchAllUsers
}