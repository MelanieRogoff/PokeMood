const bcrypt = require("bcryptjs"); //npm for PW hashing
const db = require("../models");
const axios = require('axios');
const uid = require('uid-safe')
const string = uid.sync(18)

module.exports = function(app) {
  app.post("/api/login", function(req, res) {
      db.User.findOne({ //find where password=hashed one
        where: {
              email: req.body.userData.email,
        }
        }).then(function(User) {
            if (User.validPassword(req.body.userData.password)) {
                db.User.update({ token: string }, { //update user's token
                    where: {
                        id: User.id //do User.id because we're in the db
                    }
                }).then(function(User) {
                    return res.json(User) //send user info back to frontend
                });
                }
        });
    });

  // Route for signing up a user 
  app.post("/api/signup", function(req, res) {
    const hash = bcrypt.hashSync(req.body.userData.password, 10); //how many rounds the db is doing
    db.User.create({ 
      email: req.body.email,
      password: hash,
      token: string
    }).then(function() { 
        res.redirect("/login"); //take them to login page
      })
      .catch(function(err) { //otherwise throw an error
        res.status(401).json(err);
      });
  });

  // Route for getting data about user to be used on the client-side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) { //if user isn't logged in
      res.json({}); //send back empty object
    } else {
      res.json({ //otherwise, send back user's email + PW
        email: req.user.email,
        id: req.user.id
      });
    }
  });
//Route for finding all the pokemon with the corresponding mood
  app.get("/api/moods/:moods", async function(req, res) { //makes the whole function asynchronous
   let findPokemon = db.Pokemon.findAll({
        where: {
            mood: req.params.moods
        }
    })
        const multiplePokemon = [];
        await findPokemon.map(async function(pokename) { //the map ensures that one pokemon name is searched for at a time
            const value = pokename.dataValues.name; 
            multiplePokemon.push(await apiCall(value)); //pushes the pokemon from corresponding api call 
        })
        return res.json(multiplePokemon);
    });

//Function for finding Pokemon sprites, names + descriptions
async function apiCall(multiplePokemon) { 
    const pokeArray = {[multiplePokemon]: {}}; //Making an object with the key of the name, and the value is an empty object to be filled with sprite and description
    //Pokemon Sprites Call
    let sprite = await axios.get(`https://pokeapi.co/api/v2/pokemon/${multiplePokemon.toLowerCase()}`)
      pokeArray[multiplePokemon].sprite = await sprite.data.sprites.front_default //this assigns the corresponding sprite to the specific pokemon name 
    
    //Pokemon Description Call
    let description = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${multiplePokemon.toLowerCase()}`) 
    pokeArray[multiplePokemon].description = await description.data.flavor_text_entries[54].flavor_text  //this assigns the corresponding description to the specific pokemon name 
    return await pokeArray;
}
}

