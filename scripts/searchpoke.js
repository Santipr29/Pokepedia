var search = document.getElementById("search")
let box_search = document.getElementById("box-search")
const url = 'https://pokeapi.co/api/v2/pokemon/'

for(let i=1; i<152; i++){
    let pokeurl = url+i
    getPokeName(pokeurl)

}
console.log(box_search)

async function getPokeName(url){
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        
        box_search.innerHTML += `<li><a href="pokemon.html?id=${data.id}">${data.name}</a></li>`;
    });
}

document.getElementById("search").addEventListener("keyup", buscador_interno);

function buscador_interno(){

    filter = search.value.toLowerCase();
    li = box_search.getElementsByTagName("li");

    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toLowerCase().indexOf(filter)>-1){
            li[i].style.display = "";
            box_search.style.display = "block"

            if(search.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none"
        }
        
    }

}
