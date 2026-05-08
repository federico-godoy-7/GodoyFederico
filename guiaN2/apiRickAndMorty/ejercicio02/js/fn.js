//EJERCICIO 2

let resultado = document.getElementById("id_resultado")
fetch ('https://rickandmortyapi.com/api/character')
.then (Response => Response.json())
.then (data => {    

    data.results.slice(0,5).forEach(Element => {
        resultado.innerHTML += `<div>Nombre: ${Element.name}<div>
                                <div>Edad: ${Element.status}<div>
                                ---------------------------------`
    });
})