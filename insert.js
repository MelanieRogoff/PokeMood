const db = require('./models'); //index.js in models is what will make everything work -- hence requiring whole folder

console.log(db.Pokemon); // this is the pokemon model. 

//Need to do node insert.js to put this in the table

db.Pokemon.bulkCreate([
{
    name:'Pikachu',
    mood:'Happy'
},
{
    name:'Ditto',
    mood:'Angry'
},
{
    name: 'Snorlax',
    mood: 'Tired'
},
{ 
    name: 'Fearow',
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
    name: 'Dugtrio',
    mood: 'Confused'
},
{
    name: 'Lapras',
    mood: 'Sad'
},
{
    name: 'Haunter',
    mood: 'Sad'
},
{
    name: 'Abra',
    mood: 'Tired'
},
{
    name: 'Sandshrew',
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
    name: 'Butterfree',
    mood: 'Hungry'
}
]).then(() => {
    return db.Pokemon.findAll();
}).then(pokemons => {
    console.log(pokemons)
})