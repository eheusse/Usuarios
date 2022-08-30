import {url as endpoint } from  './url.js'

//const ul = document.querySelector('.list-group')

const getUser = async () => {

    const respuesta = await fetch(endpoint);
    const data = await respuesta.json();
    
    data.forEach(element => {
        const {id, nombre, url} = element
        ul.innerHTML += `
        <li class="list-group-item">
           <span class="lead>${nombre}</span>
           <img src=${url} width= "50px></img>
           <button id=${id} class="btn btn-dark btm-sm float-end ">
              Borrar
           </button>
        </li> 
    `
    })

    console.log(data);
   
    
    

}
document.addEventListener('DOMContentLoaded', getUser)