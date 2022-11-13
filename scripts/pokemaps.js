class Pokeinfo {

    constructor (img, name, type, description, dates, debility, imgpre, namepre, imgevol1, namevol1, imgevol2, namevol2){
        this.img = img;
        this.name = name;
        this.type = type;
        this.description = description;
        this.dates = dates;
        this.debility = debility;
        this.imgpre = imgpre;
        this.namepre = namepre;
        this.imgevol1 = imgevol1;
        this.namevol1 = namevol1;
        this.imgevol2 = imgevol2;
        this.namevol2 = namevol2;
    }

    renderPokedetail(){
        let html = `
        <div class="pika">
            <img src="${this.img}" class="pikastar">
            <h2>${this.name}</h2>
            <button class="tipo">${this.type}</button>
        </div>

        <div class="info">
            <p class="pikainf">${this.description}</p>
            <img src="${this.dates}" class="stats">
            <p class="pikacarac">Tipo</p>
            <button class="tipo1">${this.type}</button>
            <p class="pikacarac">Debilidad</p>
            <button class="debilidad">${this.debility}</button>
            
            <div class="evol">
                <p class="pikainf">Evoluciónes</p>
                <img src="${this.imgpre}" class="pikaevol">
                <p class="evolinf">${this.namepre}</p>
                <button class="tipoevol">${this.type}</button>
                <img src="./Imagenes/flecha.png" class="arrow">
                <img src="${this.imgevol1}" class="pikaevol">
                <p class="evolinf">${this.namevol1}</p>
                <button class="tipoevol">${this.type}</button>
                <img src="./Imagenes/flecha.png" class="arrow">
                <img src="${this.imgevol2}" class="pikaevol">
                <p class="evolinf">${this.namevol2}</p>
                <button class="tipoevol">${this.type}</button>
            </div>

        </div>`

        return html
    }

    renderPokecard(){
        let html = `
            <div class="imag">
                <img src="${this.img}" class="viewpoke">
            </div>
            <div class="name">
                <a href="pokemon.html"><h3>${this.name}</h3></a>
                <img src="./Imagenes/starf.png">
            </div>
            <div class="tipo">
                <p>${this.type}</p>
            </div>
        `

        return html 
    }
    renderPokecardfavoritos(){
        let html = `
        <div class="pokemon">
            <div class="imag">
                <img src="${this.img}" class="viewpoke">
            </div>
            <div class="name">
                <a href="pokemon.html"><h3>${this.name}</h3></a>
                <img class="star" src="./Imagenes/starf.png">
            </div>
            <div class="tipo">
                <p>${this.type}</p>
            </div>
        </div>
        `

        return html 
    }

}

