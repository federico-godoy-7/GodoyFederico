// EJERCICIO 06

let resultado = document.getElementById("resultado") 

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(response => response.json())
        .then(data => {

        personajes = data.results
        
        personajes
        .sort((a, b) => b.episode.length - a.episode.length)
        .forEach(element => {
            resultado.innerHTML += `
                <div> Nombre: ${element.name}</div>
                <div> Cantidad de episodios: ${element.episode.length}</div>
                -----------------------------------`
            })
        })