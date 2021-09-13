async function getAllPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
}

async function getOnePokemon(term) {
  const url = `https://pokeapi.co/api/v2/pokemon/${term}`;
  const response = await fetch(url);
  const result  = await response.json();

  return result;
}


async function getOnePokemonSprite(url) {
  const response = await fetch (url);
  const pokemon = await response.json();

  return pokemon.sprites['front_default']
}

function right(){
  const root = document.getElementById("root");

  const right = document.createElement("div");
  const pEl = document.createElement("p");
  pEl.className = "right";
  pEl.textContent = "Sky"

  right.appendChild(pEl);
  root.appendChild(right);
}

export { getAllPokemon, getOnePokemonSprite, getOnePokemon };