const container = document.getElementById('container');
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const pokeid = urlParams.get('id')
console.log(pokeid);

async function getPokemonInfo(url, url2){
    let response = await fetch(url);
    let data = await response.json();
    
    let response2 = await fetch(url2);
    let data2 = await response2.json();

    container.innerHTML = `
    <div>
            <div class="pika">
                <img src="${data.sprites.front_default}" class="pikastar">
                <h2>${data.name}</h2>
                <button class="tipo">${data.types[0].type.name}</button>
            </div>

        <div class="info">
            <p class="pikainf">${data2.flavor_text_entries[8].flavor_text}</p>
            <p class="pikainf">The first game he appeared in was ${data.game_indices[0].version.name}, since it is a pokemon from the ${data2.generation.name}</p>
            <p class="pikacarac">Habitat</p>
            <button class="tipo1">${data2.habitat.name}</button>
            <p class="pikacarac">Type</p>
            <button class="tipo1">${data.types[0].type.name}</button>
        </div>
    </div>
    `;
}

let urlBase2 = 'https://pokeapi.co/api/v2/pokemon-species/'
let urlBase = 'https://pokeapi.co/api/v2/pokemon/'

async function getAllPokeInfo(){
        let url = urlBase + pokeid;
        let url2 = urlBase2 + pokeid
        await getPokemonInfo(url,url2)
}

getAllPokeInfo();