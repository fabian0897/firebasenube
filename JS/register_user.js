import {  registeruser, registera} from "../JS/firebase.js";



const formregistro = document.getElementById("registraruser")


async function registros(nombre, direccion,telefono,ciudad,departamento,rh,genero,user,pass){

    try{
        const authentication = await registeruser(user,pass);
        console.log(authentication);

        registera(nombre,direccion,telefono,ciudad,departamento,rh,genero,user);

        alert("registro exitoso")
        formregistro.reset()
    }catch(error){
        console.log(error.code);
         alert("error de autenticacion: "+error.code)

     
    }

}

formregistro.addEventListener('submit',(evento)=>{
    evento.preventDefault()




    const nombre= document.getElementById("ednombre")
    const direccion= document.getElementById("eddireccion")
    const telefono= document.getElementById("edtelefono")
    const ciudad= document.getElementById("edtciudad")
    const departamento= document.getElementById("edtdepartamento")
    const rh= document.getElementById("edtrh")
    const genero= document.getElementById("edtgenero")


    const user = document.getElementById("edtuser")
    const pass = document.getElementById("edtpassword")
    const confirmaruser = document.getElementById("edtconfirmaruser")
    const confirmarpassword = document.getElementById("edtconfirmarpassword")

   

    

    if(user.value =='' || confirmaruser.value == '' || pass.value == '' || confirmarpassword.value == ''){

        alert("Los campos estan vacios por favor llenarlos ")
        return;
    }

    if(user.value != confirmaruser.value){
        alert("Los usurarios no coinciden intente de nuevo ")
        return;

    }
    if(pass.value != confirmarpassword.value){
        alert("contraseña no coinciden intente de nuevo ")
        return;
    }
    if(pass.value.length <6){
        alert("La contraseña es muy corta, minimo 6 caracteres ")
        return;
    }

    registros(nombre.value, direccion.value,telefono.value,ciudad.value,departamento.value,rh.value,genero.value,user.value,pass.value)

    // const registro =registeruser(user,pass)


    // if(registro !=null)
    // {
    //     alert("User resgister succesfull"+user)
    //     // window.location.href="../index.html"
    // }
    // else
    // {
    //     console.log("register "+user+"not validation")
    //     // alert("error de usuario verifique y/O contraseña")
    // }
    // alert("registro exitoso")
    // //formregistro.reset()




});
