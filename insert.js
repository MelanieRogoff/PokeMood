const db = require('./models'); //index.js in models is what will make everything work -- hence requiring whole folder

console.log(db.Pokemon); // this is the pokemon model. 

db.Pokemon.bulkCreate([
{
    name:'Pikachu',
    mood:'Happy'
},
{
    name:'Mewtwo',
    mood:'Angry'
},
{
    name: 'Snorlax',
    mood: 'Tired'
},
{ 
    name: 'Charizard',
    mood: 'Angry'
},
{
    name: 'Mankey',
    mood: 'Angry',
},
{
    name: 'Gloom',
    mood: 'Sad'
},
{
    name: 'Psyduck',
    mood: 'Confused'
},
{
    name: 'Slowpoke',
    mood: 'Confused'
},
{
    name: 'Clefairy',
    mood: 'Happy'
},
{
    name: 'Eevee',
    mood: 'Happy'
},
{
    name: 'Tangela',
    mood: 'Confused'
},
{
    name: 'Lapras',
    mood: 'Sad'
},
{
    name: 'Weezing',
    mood: 'Sad'
},
{
    name: 'Abra',
    mood: 'Tired'
},
{
    name: 'Weepinbell',
    mood: 'Hungry'
},
{
    name: 'Graveler',
    mood: 'Hungry'
},
{
    name: 'Seel',
    mood: 'Tired'
},
{
    name: 'Hitmonchan',
    mood: 'Hungry'
}
]).then(() => {
    return db.Pokemon.findAll();
}).then(pokemons => {
    console.log(pokemons)
})