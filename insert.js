const db = require('./models'); //index.js in models is what will make everything work -- hence requiring whole folder

console.log(db.Pokemon); // this is the pokemon model. 


db.Pokemon.create({
    name: 'Pikachu',
    mood: 'happy'
});