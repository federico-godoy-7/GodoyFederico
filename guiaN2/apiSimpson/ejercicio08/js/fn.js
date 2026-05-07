// EJERCICIO 8

let resultado = document.getElementById("resultado")

let personajes = []

    fetch('https://thesimpsonsapi.com/api/characters')
    .then (Response => Response.json())
    .then (data => {
        personajes = data.results
    })

    function comparar() {
        personajes.filter
        personajes.sort((a, b) => a.age - b.age)
        let jovenes = personajes.slice(0, 5)
        jovenes.forEach(personajes => { resultado.innerHTML += `<p> Nombre: ${personajes.name} - ${personajes.age} años </p>`})
    }

    comparar()