async function getAllPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
}

async function getOnePokemonSprite(url) {
  const response = await fetch (url);
  const pokemon = await response.json();
  console.log(pokemon)
  return pokemon.sprites['front_default']
  
}

export { getAllPokemon, getOnePokemonSprite };