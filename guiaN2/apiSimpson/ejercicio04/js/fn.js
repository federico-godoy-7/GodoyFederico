// EJERCICIO 04
let resultado = document.getElementById("resultado")

    fetch('https://thesimpsonsapi.com/api/characters')
    .then (Response => Response.json())
    .then (data => {
        let personajes = data.results

        personajes.forEach(personaje => {
            resultado.innerHTML += `<p> ${personaje.name} --- ${personaje.occupation}</p>` 
        });
    })