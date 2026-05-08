//EJERCICIO 5

let resultado = document.getElementById("id_resultado")

let boton = document.getElementById("id_boton")

boton.addEventListener('click', buscar)

function buscar() {
    let input = document.getElementById("id_input").value

    fetch(`https://rickandmortyapi.com/api/character/${input}`)
        .then(response => response.json())
        .then(data => {
            resultado.innerHTML = `
                <div>Nombre: ${data.name}</div>
                <div>Estado: ${data.status}</div>
                <img src="${data.image}">`
        })
        .catch(() => {
            resultado.innerHTML = 'Personaje no encontrado'
        })
}