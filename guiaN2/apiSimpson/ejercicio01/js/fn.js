    // EJERCICIO 1

    let resultado = document.getElementById("resultado")

    fetch('https://thesimpsonsapi.com/api/characters')
    .then (Response => Response.json())
    .then (data => resultado.innerHTML = data.results[0].name)