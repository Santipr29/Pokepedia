const Cards = document.getElementById('Cards');




for(let i=0; i<favoritos.length; i++){
    let pokemon = new Pokeinfo(
        favoritos[i].img, 
        favoritos[i].name, 
        favoritos[i].type, 
        favoritos[i].description, 
        favoritos[i].dates, 
        favoritos[i].debility, 
        favoritos[i].imgpre, 
        favoritos[i].namepre, 
        favoritos[i].imgevol1, 
        favoritos[i].namevol1, 
        favoritos[i].imgevol2, 
        favoritos[i].namevol2, 

    )
    Cards.innerHTML += `<div>${pokemon.renderPokecardfavoritos()}</div>`;
};