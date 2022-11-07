import { db} from "../js/firebase.js";
import {getDoc,doc,getDocs,collection} 
from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

const formregistro = document.getElementById('mostrar')
const btnmostrar= document.getElementById("buscartodos")
const contenedor= document.getElementById("mostrartodo")
async function mostrartabla(){

    const querySnapshot = await getDocs(collection(db, "DBdatos"));
    contenedor.innerHTML=`
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">USUARIO</th>
      <th scope="col">NOMBRE</th>
      <th scope="col">CIUDAD</th>
      <th scope="col">DEPARTAMENTO</th>
      <th scope="col">DIRECCION</th>
      <th scope="col">GENERO</th>
      <th scope="col">RH</th>
      <th scope="col">TELEFONO</th>

      
    </tr>
  </thead>
  <tbody id="cuerpotabla">
    
  </tbody>
</table>
    
    `
    let contador=1

    querySnapshot.forEach((doc) => {
        const cuerpotabla=document.getElementById("cuerpotabla")
        const fila=cuerpotabla.insertRow()
        const registros = doc.data();
        console.log(registros)
        fila.innerHTML=`
        <tr>
      <th scope="col">${contador++}</th>
      <th scope="col">${registros.user}</th>
      <th scope="col">${registros.nombre}</th>
      <th scope="col">${registros.ciudad}</th>
      <th scope="col">${registros.departamento}</th>
      <th scope="col">${registros.direccion}</th>
      <th scope="col">${registros.genero}</th>
      <th scope="col">${registros.rh}</th>
      <th scope="col">${registros.telefono}</th>

      
    </tr>
        
        
        `
        
    });


}

formregistro.addEventListener('submit',async (e)=>{
    e.preventDefault()

    const correo= formregistro ['correo'].value

    const docRef = doc(db, "DBdatos", correo);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const card= document.getElementById("card")
      contenedor.innerHTML=`
      <div class="card text-center">
      <div class="card-header">
      </div>
      <div class="card-body">
        <h5 class="card-title"> ${docSnap.data().user}</h5>
        <p class="card-text"> Ciudad: ${docSnap.data().ciudad}</p>
        <p class="card-text"> Departamento: ${docSnap.data().departamento}</p>
        <p class="card-text"> Direccion: ${docSnap.data().direccion}</p>
        <p class="card-text"> Genero: ${docSnap.data().genero}</p>
        <p class="card-text">Nombre: ${docSnap.data().nombre}</p>
        <p class="card-text"> RH: ${docSnap.data().rh}</p>
        <p class="card-text">Telefono: ${docSnap.data().telefono}</p>
        
      </div>
      <div class="card-footer text-muted">
      </div>
      </div>
      
      `
      formregistro.reset()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }  

}) 

window.addEventListener('DOMContentLoaded',async()=>{btnmostrar.addEventListener('click',mostrartabla)})


