const inputFirstName = document.getElementById("nombre")
const inputEmail = document.getElementById("correo")
const inputmensaje = document.getElementById("mensaje")
const btn = document.getElementById("btn")
const parrafo = document.getElementById("parrafo")
console.log(inputEmail)

function onSubmit (e) {
    e.preventDefault()
    console.log ("onsubmit")
    const firstNameValue = inputFirstName.value
    const firstEmailValue = inputEmail.value
    const firstMensajeValue = inputmensaje.value

    const datos = {
        nombre: firstNameValue,
        correo: firstEmailValue,
        mensaje: firstMensajeValue
    }
    console.log(datos)

localStorage.setItem("user", JSON.stringify(datos))   
const datos1 = JSON.parse(localStorage.getItem("user"))
console.log(datos1)
parrafo.innerText = datos1.nombre + datos1.correo + " " + datos1.mensaje

}

btn.addEventListener("click",onSubmit)




