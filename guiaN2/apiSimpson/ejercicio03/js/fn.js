// EJERCICIO 3
let resultado = document.getElementById("resultado")

    fetch('https://thesimpsonsapi.com/api/characters')
    .then (Response => Response.json())
    .then (data => {
        let mujeres = data.results.filter(results => results.gender === "Female")
        resultado.innerHTML = `Se encontraron ${mujeres.length} personajes femeninos`

        mujeres.forEach(mujer => {
            resultado.innerHTML += `<p>${mujer.name}</p>`
        });
    })