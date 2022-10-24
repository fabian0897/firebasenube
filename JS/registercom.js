import { registercom} from "../js/firebase.js";



window.addEventListener('DOMContentLoaded',()=>{

    
})
const formregistro = document.getElementById('registercom')

formregistro.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nombre= formregistro ['ednombre']
    const direccion= formregistro ['eddireccion']
    const telefono= formregistro ['edtelefono']
    const ciudad= formregistro ['edtciudad']
    const departamento= formregistro ['edtdepartamento']
    const rh= formregistro ['edtrh']
    const genero= formregistro ['edtgenero']

    registercom(
        nombre.value,
        direccion.value,
        telefono.value,
        ciudad.value,
        departamento.value,
        rh.value,
        genero.value,
        )

    alert("registro exitoso")
    formregistro.reset()


})

