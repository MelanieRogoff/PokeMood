// Requiring our models and passport 
const db = require("../models");
const passport = require("../config/passport");
const axios = require('axios');


module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user); //If user has valid login, send them to login page, otherwise throw error. 
  });

  // Route for signing up a user 
  app.post("/api/signup", function(req, res) {
    db.User.create({ //if user is created successfully
      email: req.body.email,
      password: req.body.password
    })
      .then(function() { 
        res.redirect(307, "/api/login"); //take them to login page
      })
      .catch(function(err) { //otherwise throw an error
        res.status(401).json(err);
      });
  });

  // Route for getting data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) { //if user isn't logged in
      res.json({}); //send back empty object
    } else {
      res.json({ //send back user's email + PW
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/moods/:moods", function(req, res) { //finding all the pokemon with the corresponding mood
    db.Pokemon.findAll({
        where: {
            mood: req.params.moods
        }
    }).then(function(dbUser) {
        const multiplePokemon = [];
        dbUser.map(async function(pokename) {
            const value = pokename.dataValues.name; //this now works!
            multiplePokemon.push(value); //pushes the pokemon from corresponding api call 
        })
        for (let i = 0; i < multiplePokemon.length; i++) {
            console.log(apiCall(multiplePokemon)); //returns 3 empty arrays
        }
        // console.log(multiplePokemon) returns ["Pikachu, Clefairy, Eevee"]
        //console.log(multiplePokemon[0].toLowerCase()) returns pikachu
        res.json(multiplePokemon);
    });
  });


  
function apiCall(multiplePokemon) { //function for finding the pokemon
    const pokeArray = [];
    axios.get(`https://pokeapi.co/api/v2/pokemon/${multiplePokemon.toString().toLowerCase()}`)
    .then(response => { //call for the pokemon sprites
      pokeArray.push({
            sprite: response.data.sprites.front_default
        })
    }).catch(error => {
      console.log(error);
    });
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${multiplePokemon.toString().toLowerCase()}`) //Call for description
    .then(response => {
      pokeArray.push( {
          description: response.data.flavor_text_entries[54].flavor_text      
        })
    }).catch(error => {
      console.log(error);
    });
    return pokeArray;
}
}

