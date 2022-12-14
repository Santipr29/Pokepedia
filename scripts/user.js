const storage = window.localStorage
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('correo')
const contraInput = document.getElementById('contra')

const loggedTrainer = storage.getItem("trainer")
const trainer = JSON.parse(loggedTrainer)
const Username = trainer.name
const password = trainer.contraseña
const email = trainer.email

nameInput.placeholder = Username
emailInput.placeholder = password
contraInput.placeholder = email

const UnlogBtn = document.getElementById('cerrar')

function unlogin(){
    if(trainer.isLogged === true){
        trainer.isLogged = false
        const trainerJsonStr = JSON.stringify(trainer)
        storage.setItem("trainer", trainerJsonStr)
    }
}
UnlogBtn.addEventListener('click',unlogin)