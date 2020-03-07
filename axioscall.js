const axios = require('axios');

const namer = 'pikachu'; 
let idKey = this.id

axios.get(`https://pokeapi.co/api/v2/pokemon/${namer}`)
  .then(response => {
    console.log(response.data.name)
    console.log(response.data.sprites.front_default)
  })
  .catch(error => {
    console.log(error);
  });

  axios.get(`https://pokeapi.co/api/v2/characteristic/${idKey}`) //Call for description
  .then(response => {
    console.log(response.data.descriptions[1].description)
  })
  .catch(error => {
    console.log(error);
  });

  