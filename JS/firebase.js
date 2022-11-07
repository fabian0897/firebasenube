// Import the functions you need from the SDKs you need
import { initializeApp } 
from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'

import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } 
from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'

import { getFirestore,collection,addDoc,setDoc,doc}
from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqbEek7EmFAKDZycpGLlK86AXcnhz_8fM",
  authDomain: "developercloud-10b09.firebaseapp.com",
  projectId: "developercloud-10b09",
  storageBucket: "developercloud-10b09.appspot.com",
  messagingSenderId: "590169491954",
  appId: "1:590169491954:web:49242f939657e57e9a836b",
  measurementId: "G-BH8FZ4809Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Module authentication
const auth = getAuth();
// firestre
 export const db= getFirestore();


export const loginvalidation=(email,password)=>
  signInWithEmailAndPassword(auth,email,password)
export const registeruser=(email,password)=>
  createUserWithEmailAndPassword(auth,email,password)

  export const registera=(nombre,direccion,telefono,ciudad,departamento,rh,genero,user)=>{
    setDoc(doc(db,"DBdatos",user),{
  
      nombre,
      direccion,
      telefono,
      ciudad,
      departamento,
      rh,
      genero,
      user
    })
  }

  getFirestore
export const registeradddoc= (nombre,cedula,apellidos,ciudad)=>{
  addDoc(collection(db,"DBdatos"),{
    nombre,
    cedula,
    apellidos,
    ciudad,

  })
}
  
// }
// export const register= (nombre,direccion,telefono,ciudad,departamento,rh,genero)=>{
//   addDoc(collection(db,"DBdatos"),{
//     nombre,
//     direccion,
//     telefono,
//     ciudad,
//     departamento,
//     rh,
//     genero,

//   })
// }


