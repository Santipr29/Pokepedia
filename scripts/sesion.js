const storage = window.localStorage
const logBtn = document.getElementById('LoginBtn')

function login(){
    const loggedTrainer = storage.getItem("trainer")
    const trainer = JSON.parse(loggedTrainer)
    const email = document.getElementById("Correo").value
    const contraseña = document.getElementById("Contraseña").value


    if(trainer.email === email && trainer.contraseña === contraseña){
        trainer.isLogged = true
        const trainerJsonStr = JSON.stringify(trainer)
        storage.setItem("trainer", trainerJsonStr)

        window.location.href = 'main.html'
    }


}

logBtn.addEventListener('click',login)