const container = document.getElementById('pokedex');

for (let i=0; i<pokes.length; i++){
    let pokemon = new Pokeinfo(
        pokes[i].img,
        pokes[i].name,
        pokes[i].type,
    )
    container.innerHTML += `<div class="pokemon">${pokemon.renderPokecard()}</div>`;
}