const axios = require('axios');

axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then(response => {
    console.log(response.data.url);
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });