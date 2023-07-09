//pokemon array
let pokemonList=[
  {
  name: 'Squirtle',
  id: 7,
  height: 5,
  type: ['water']
  },
  {
  name: 'Spearow',
  id: 21,
  height: 3,
  type: ['flying','normal']
  },
  {
  name: 'Jigglypuff',
  id: 39,
  height: 5,
  type: ['fairy','normal']
  }
];

for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    let name = pokemon.name;
    let height = pokemon.height;
  
    document.write(name + " (height: " + height + ")<br>");
  }  
