import { registeradddoc } from "../js/firebase.js";



window.addEventListener('DOMContentLoaded',()=>{

    
})
const formregistro = document.getElementById('registro')

formregistro.addEventListener('submit',(e)=>{
    e.preventDefault()

    const cedula=formregistro['cedula']
    const name=formregistro['nombre']
    const primerapellido=formregistro['primerapellido']
    const segundoapellido=formregistro['segundoapellido']
    const lugar=formregistro['lugar']

    registeradddoc(
        cedula.value,
        name.value,
        primerapellido.value,
        segundoapellido.value,
        lugar.value,
        )

    alert("registro exitoso")
    formregistro.reset()


})