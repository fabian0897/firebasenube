import { registerUser, registerSetDoc } from "../js/firebase.js";

//const evento = document.getElementById("registerbtn");
const form = document.getElementById("formRegister");

form.addEventListener('submit',(evento)=>{
    evento.preventDefault();

    const nombre = document.getElementById("edtUserName");
    const apellido = document.getElementById("edtApellido");
    const direccion = document.getElementById("edtDireccion");
    const genero = document.getElementById("edtGenero");
    const rh = document.getElementById("edtRh");
    const telefono = document.getElementById("edtTelefono");
    const departamento = document.getElementById("edtDepartamento");
    const ciudad = document.getElementById("edtCiudad");
    const email = document.getElementById("edtEmail");
    const confirmEmail = document.getElementById("edtConfirmEmail");
    const password = document.getElementById("edtPass");
    const confirmPassword = document.getElementById("edtConfirmPass");

    console.log(nombre.value);
    console.log(apellido.value);
    console.log(direccion.value);
    console.log(genero.value);
    console.log(rh.value);
    console.log(telefono.value);
    console.log(departamento.value);
    console.log(ciudad.value);
    console.log(email.value);
    console.log(password.value);

    registerSetDoc(nombre.value, apellido.value, direccion.value, genero.value, rh.value, telefono.value, departamento.value, ciudad.value, email.value);

});