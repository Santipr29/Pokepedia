class Creador{
    constructor(img,name,email){
        this.img=img;
        this.name=name;
        this.email=email;
    };

    cardRender(){
        let html= `<div class="creadores">
                        <div class="cardCreator">
                            <img src="${this.img}">
                            <h3>${this.name}</h3>
                            <p>${this.email}</p>
                        </div>
                    </div>`;
        return html;
    };
};


