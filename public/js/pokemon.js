$(".mood-selector").on("click", function(evt) {
    var mood = evt.target.text;
 
     mood = mood.trim().toLowerCase();
 
     $.ajax({
         url: "/api/moods/" + mood,
         method: 'GET',
     }).then(function(data) {
 
         $('#addelement').empty();
         for (let i = 0; i < data.length; i++) {
             const pokemon = data[i];
            
             let name = Object.keys(pokemon)[0];
             let pokemonInfo = pokemon[name];
             let desc = pokemonInfo.description;
             let sprite = pokemonInfo.sprite;
 
             let pokeDisplay = '<div>';
                 pokeDisplay += '<p>' + 'Name: ' + name + '</p>';
                 pokeDisplay += '<p>' + 'Description: ' + desc + '</p>';
                 pokeDisplay += '<img src="'+ sprite + '">';
                 pokeDisplay += '</div>';
 
                 $("#addelement").append(pokeDisplay);
 
         }
     })
 
 });