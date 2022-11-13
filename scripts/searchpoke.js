var search = document.getElementById("search")
var box_search = document.getElementById("box-search")

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
