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