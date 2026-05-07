// EJERCICIO 5
    fetch('https://thesimpsonsapi.com/api/characters')
    .then(response => response.json())
    .then(data => {
        let resultado = document.getElementById('resultado')

        let personajes = data.results

        let masViejo = personajes.reduce((acumulador, personaje) => {
            return personaje.age > acumulador.age ? personaje : acumulador
        })
        resultado.innerHTML = `El personaje más viejo es ${masViejo.name} con ${masViejo.age} años`
    })