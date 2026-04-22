// EJERCICIO 6

let resultado = document.getElementById("resultado")
let personajes = []

    fetch('https://thesimpsonsapi.com/api/characters')
    .then (Response => Response.json())
    .then (data => {
        personajes = data.results
    })

    function buscarPj() {
        let texto = document.getElementById("id_input").value
        
        let personaje = personajes.find(elemento => elemento.name.toLowerCase() === texto.toLowerCase())
         
            if (personaje) {
                resultado.innerHTML = `<p>Nombre: ${personaje.name}</p>
                <p>Ocupacion: ${personaje.occupation}</p>
                <p>Edad: ${personaje.age}</p>`
            }
            else {
                resultado.innerHTML = `Personaje no encontrado`
            }
}