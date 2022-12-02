const storagefav = window.localStorage
const container = document.getElementById('Cards')
const allPokemons = []

async function getPokemon(url){
    let response = await fetch(url);
    let data = await response.json();
    allPokemons.push(data)
}

let urlBase = 'https://pokeapi.co/api/v2/pokemon/'

async function getAllPokemon(){
    const loggedTrainer = storagefav.getItem("trainer")
    const trainer = JSON.parse(loggedTrainer)
    let fav = trainer.Favlist
    for(i=0; i<fav.length;i++){
        let url = urlBase + fav[i];
        await getPokemon(url)
    }
    printpokemon(allPokemons)
}

function printpokemon(pokemons){
    pokemons.forEach(pokemon => {
        container.innerHTML += `
    <div class="pokemon">
        <div class="imag">
                <img src="${pokemon.sprites.front_default}" class="viewpoke">
            </div>
            <div class="name">
                <a href="pokemon.html?id=${pokemon.id}"><h3>${pokemon.name}</h3></a>
                <img src="./Imagenes/starf.png" id="fav-${pokemon.id}" data-value="${pokemon.id}" onclick="Addpokefav(${pokemon.id})">
            </div>
            <div class="tipo">
                <p>${pokemon.types[0].type.name}</p>
        </div>
    </div>
    `;
    });
}

getAllPokemon();