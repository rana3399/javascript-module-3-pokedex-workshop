import { getAllPokemon, getOnePokemonSprite, getOnePokemon } from "./api.js";

async function createPokemonImage(url) {
  const pokemonImageDIV = document.createElement("div");
  pokemonImageDIV.className = "img-container";
  const pokemonImage = document.createElement("img");
  
  pokemonImage.src = await getOnePokemonSprite(url);
  pokemonImageDIV.appendChild(pokemonImage)
  return pokemonImageDIV;
}

function createPokemonLink(name, url) {
  console.log(url);
  const pokemonLink = document.createElement("a");
  pokemonLink.href = url;
  pokemonLink.textContent = name;
  return pokemonLink;
}

async function createPokemon(name, url) {
  const newPokemon = document.createElement("div");
  const pEl = document.createElement("p");
  pEl.className = "pokemon-name";

  pEl.textContent =  name;
  newPokemon.appendChild(pEl)
  //newPokemon.textContent =  name;
  
  newPokemon.appendChild(await createPokemonImage(url));
  
  newPokemon.appendChild(document.createElement("br"));
   newPokemon.appendChild(createPokemonLink(name, url));
console.log(newPokemon)
  return newPokemon;
}



function searchPokemon(event) {
  if (event.code === "Enter") {
    const term = event.target.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${term}`;
    const root = document.getElementById("root");
    root.innerHTML=''
    createPokemon(term, url).then(
      newPokemon => root.appendChild(newPokemon)
    )
    const test =  getOnePokemon(term);
    console.log(test)
     .then(pokemon => console.log(pokemon))
  }
}

function createSearchField() {
  const searchField = document.createElement("input")
  searchField.type="text"
  searchField.placeholder="Search"
  searchField.addEventListener("keyup", searchPokemon)
  return searchField;
}



async function init() {
  const root = document.getElementById("root");

  document.body.insertBefore(createSearchField(), root)

  const pokemon = await getAllPokemon();
  console.log(pokemon);

  pokemon.forEach(async ({ name, url }) => {
    root.appendChild(await createPokemon(name, url))
    
  });
}

function myRight(){
  const rights = document.createElement("div");
  const pEl = document.createElement("p");

  pEl.className = "copy-right";
  pEl.textContent = "Rana-Ahmed @ all rights reserved";
  rights.appendChild(pEl);

  root.insertAdjacentElement("afterend", rights);;
  return root;
  
}

myRight();
init();