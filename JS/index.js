import { loginvalidation } from "../JS/firebase.js";

const evento = document.getElementById("loginbtn")

async function login(){

    const user = document.getElementById("edtuser").value
    const pass = document.getElementById("edtpassword").value
   

    const sesion =loginvalidation(user,pass)
    const validation  = await sesion

    if(validation !=null)
    {
        alert("User authentication"+user)
        window.location.href="../plantillas/home.html"
    }
    else
    {
        console.log("sesion "+user+"not validation")
        alert("error de usuario verifique y/O contraseña")
    }
}

window.addEventListener('DOMContentLoaded',async()=>{

    evento.addEventListener('click',login)
})
