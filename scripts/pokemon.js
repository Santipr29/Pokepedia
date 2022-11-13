const container = document.getElementById('container');

for (let i=0; i<pokes.length; i++){
    let pokemon = new Pokeinfo(
        pokes[i].img,
        pokes[i].name,
        pokes[i].type,
        pokes[i].description,
        pokes[i].dates,
        pokes[i].debility,
        pokes[i].imgpre,
        pokes[i].namepre,
        pokes[i].imgevol1,
        pokes[i].namevol1,
        pokes[i].imgevol2,
        pokes[i].namevol2,
    )
    container.innerHTML = `<div>${pokemon.renderPokedetail()}</div>`;
}