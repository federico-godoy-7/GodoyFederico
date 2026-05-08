//EJERCICIO 1

let resultado = document.getElementById("id_resultado")

let personajes = []

fetch ('https://rickandmortyapi.com/api/character')
.then (Response => Response.json())
.then (data => {    
        resultado.innerHTML = `Nombre: ${data.results[0].name}` 
})
