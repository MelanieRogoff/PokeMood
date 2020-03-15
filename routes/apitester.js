const axios = require('axios');



const thirdName = 'bonsly'; //this has an entry
const fourthName = 'magnezone';
const fiver = 'porygon';
const six = 'gogoat';

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
    console.log(response.data.flavor_text_entries[54].flavor_text, "THIRDNAME");
    console.log("    SPACE")
})
  .catch(error => {
    console.log(error);
  });


   //Fourth CALL -- THIS ONE IS FOR THE SECOND POKEMON TO BE DISPLAYED

   axios.get(`https://pokeapi.co/api/v2/pokemon/${fourthName}`)
   .then(response => { //call for the pokemon name and sprites
     console.log(response.data.sprites.front_default)
   })
   .catch(error => {
     console.log(error);
   });
 
   axios.get(`https://pokeapi.co/api/v2/pokemon-species/${fourthName}`) //Call for description
   .then(response => {
     console.log(response.data.flavor_text_entries[54].flavor_text, "FOURTHNAME");
   })
   .catch(error => {
     console.log(error);
   });


    //FIVE CALL -- THIS ONE IS FOR THE SECOND POKEMON TO BE DISPLAYED

    axios.get(`https://pokeapi.co/api/v2/pokemon/${fiver}`)
    .then(response => { //call for the pokemon name and sprites
      console.log(response.data.sprites.front_default)
    })
    .catch(error => {
      console.log(error);
    });
  
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${fiver}`) //Call for description
    .then(response => {
      console.log(response.data.flavor_text_entries[54].flavor_text, "FIVER");
    })
    .catch(error => {
      console.log(error);
    });


     //SIX CALL -- THIS ONE IS FOR THE SECOND POKEMON TO BE DISPLAYED

     axios.get(`https://pokeapi.co/api/v2/pokemon/${six}`)
     .then(response => { //call for the pokemon name and sprites
       console.log(response.data.sprites.front_default)
     })
     .catch(error => {
       console.log(error);
     });
   
     axios.get(`https://pokeapi.co/api/v2/pokemon-species/${six}`) //Call for description
     .then(response => {
       console.log(response.data.flavor_text_entries[54].flavor_text, "SIX");
     })
     .catch(error => {
       console.log(error);
     });