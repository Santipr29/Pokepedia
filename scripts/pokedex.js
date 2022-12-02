const storage = window.localStorage
const container = document.getElementById('pokedex');
const allPokemons = []
const input = document.getElementById('type')

async function getPokemon(url){
    let response = await fetch(url);
    let data = await response.json();
    allPokemons.push(data)
}

let urlBase = 'https://pokeapi.co/api/v2/pokemon/'

async function getAllPokemon(){
    for(i=1; i<152;i++){
        let url = urlBase + i;
        await getPokemon(url)
    }
    printpokemon(allPokemons)
}

input.addEventListener('keyup', e => {
    const newPokemon = allPokemons.filter(pokemon => pokemon.types[0].type.name.startsWith(input.value))
    console.log(newPokemon)
    container.innerHTML = ""
    printpokemon(newPokemon)
})

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
console.log(allPokemons)


function Addpokefav(id){
    const loggedTrainer = storage.getItem("trainer")
    const trainer = JSON.parse(loggedTrainer)
    trainer.Favlist.push(id)
    const trainerJsonStr = JSON.stringify(trainer)
    storage.setItem("trainer", trainerJsonStr)
    alert("se ha agregado tu pokemon a favoritos")
}
