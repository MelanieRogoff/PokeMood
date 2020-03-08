const axios = require('axios');

const namer = 'pikachu'; //TESTING WITH JUST PIKACHU FOR NOW -- We will need to replace this with a this.name or something

function pokeStuff() {
axios.get(`https://pokeapi.co/api/v2/pokemon/${namer}`)
  .then(response => showOutput(res)){ //call for the pokemon name and sprites
    const upper = response.data.name.charAt(0).toUpperCase() + response.data.name.substring(1);
    console.log(upper); //ensuring each Pokemon name is uppercase
    console.log(response.data.sprites.front_default)
  })
  .catch(error => {
    console.log(error);
  });

  axios.get(`https://pokeapi.co/api/v2/pokemon-species/${namer}`) //Call for description
  .then(response => showOutput(res)) {

    console.log(response.data.flavor_text_entries[54].flavor_text);
  })
  .catch(error => {
    console.log(error);
  });
}

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

  