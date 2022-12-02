const storage = window.localStorage
const loggedTrainer = storage.getItem("trainer")
const trainer = JSON.parse(loggedTrainer)
const UnlogBtn = document.getElementById('cerrar')

function unlogin(){
    if(trainer.isLogged === true){
        trainer.isLogged = false
        const trainerJsonStr = JSON.stringify(trainer)
        storage.setItem("trainer", trainerJsonStr)
    }
}
UnlogBtn.addEventListener('click',unlogin)