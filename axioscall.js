const axios = require('axios');

const namer = 'pikachu'; //TESTING  -- will need to replace this with a this.name or something
const secondName = 'butterfree';
const thirdName = 'snorlax';

//USING THREE DIFFERENT API CALLS BECAUSE WE HAVE THREE DIFFERENT POKEMON PER MOOD 
axios.get(`https://pokeapi.co/api/v2/pokemon/${namer}`)
  .then(response => { //call for the pokemon name and sprites
    console.log(response.data.sprites.front_default)
  })
  .catch(error => {
    console.log(error);
  });

  axios.get(`https://pokeapi.co/api/v2/pokemon-species/${namer}`) //Call for description
  .then(response => {
    const upper = response.data.name.charAt(0).toUpperCase() + response.data.name.substring(1);
    console.log(upper + ": " + response.data.flavor_text_entries[54].flavor_text);
    console.log("    ")

  })
  .catch(error => {
    console.log(error);
  });

  //SECOND CALL -- THIS ONE IS FOR THE SECOND POKEMON TO BE DISPLAYED
  axios.get(`https://pokeapi.co/api/v2/pokemon/${secondName}`)
  .then(response => { //call for the pokemon name and sprites
    console.log(response.data.sprites.front_default)
  })
  .catch(error => {
    console.log(error);
  });


  // Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.data.sprites.front_default}</h5>
  </div>
  <div class="card card-body mb-4">
    <h5>Status: ${res.data.flavor_text_entries[54].flavor_text}</h5>
  </div>
`;
}

// Event listener
document.getElementById('get').addEventListener('click', pokeStuff);

  axios.get(`https://pokeapi.co/api/v2/pokemon-species/${secondName}`) //Call for description
  .then(response => {
    const upper = response.data.name.charAt(0).toUpperCase() + response.data.name.substring(1);
    console.log(upper + ": " + response.data.flavor_text_entries[54].flavor_text);
    console.log("    ")
  })
  .catch(error => {
    console.log(error);
  });

  //THIRD CALL -- THIS ONE IS FOR THE SECOND POKEMON TO BE DISPLAYED

  axios.get(`https://pokeapi.co/api/v2/pokemon/${thirdName}`)
  .then(response => { //call for the pokemon name and sprites
    console.log(response.data.sprites.front_default)
  })
  .catch(error => {
    console.log(error);
  });

  axios.get(`https://pokeapi.co/api/v2/pokemon-species/${thirdName}`) //Call for description
  .then(response => {
    const upper = response.data.name.charAt(0).toUpperCase() + response.data.name.substring(1);
    console.log(upper + ": " + response.data.flavor_text_entries[54].flavor_text);
    console.log("    ")
  })
  .catch(error => {
    console.log(error);
  });
