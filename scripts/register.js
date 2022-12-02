const storage = window.localStorage
const regBtn = document.getElementById('terminado')


function register(){
    const email = document.getElementById("Correo").value;
    const name = document.getElementById("Username").value;
    const contraseña = document.getElementById("Contraseña").value;


    const trainer = {
        email: email,
        name: name,
        contraseña: contraseña,
        isLogged: false,
        Favlist: [],
    }


    const trainerJsonStr = JSON.stringify(trainer)
    storage.setItem("trainer", trainerJsonStr)


    window.location.href = 'sesion.html'

}


regBtn.addEventListener('click',register)