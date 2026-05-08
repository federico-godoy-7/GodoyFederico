//EJERCICIO 3

let resultado = document.getElementById("id_resultado")
fetch ('https://rickandmortyapi.com/api/character')
.then (Response => Response.json())
.then (data => {    

    data.results.filter(vivo => vivo.status === "Alive").forEach(vivo => {
        resultado.innerHTML += `<div>Nombre: ${vivo.name}<div>
                                <div>Edad: ${vivo.status}<div>
                                ---------------------------------`
    });
})