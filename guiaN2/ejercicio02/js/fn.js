// EJERCICIO 2
let resultado = document.getElementById("resultado")

    fetch('https://thesimpsonsapi.com/api/characters')
    .then (Response => Response.json())
    .then (data => {
        data.results.slice(0, 5).forEach(personaje => {
            resultado.innerHTML += `<p>${personaje.name}</p>`;
        });
    });