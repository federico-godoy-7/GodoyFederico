// EJERCICIO 09
let resultado = document.getElementById("id_resultado")

fetch('https://thesimpsonsapi.com/api/characters')
  .then(response => response.json())
  .then(data => {
    data.results.slice(0, 8).forEach(personaje => {
      resultado.innerHTML += `
        <div style="border: 1px solid gray; padding: 10px; margin: 5px; display: inline-block;">
          <img src="${personaje.portrait_path}" style="width: 150px; height: auto;">
          <h3>${personaje.name}</h3>
          <p>Ocupación: ${personaje.occupation}</p>
          <p>Edad: ${personaje.age}</p>
        </div>
      `;
    });
  });