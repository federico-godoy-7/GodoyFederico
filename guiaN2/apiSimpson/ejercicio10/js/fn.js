// EJERCICIO 10

let resultado = document.getElementById("id_resultado");

fetch('https://thesimpsonsapi.com/api/characters')
  .then(response => response.json())
  .then(data => {
    const conteo = data.results.reduce((acumulador, personaje) => {
      if (personaje.gender === "Male") {
        acumulador.hombres += 1;
      } else if (personaje.gender === "Female") {
        acumulador.mujeres += 1;
      }
      return acumulador;
    }, { hombres: 0, mujeres: 0 });

    resultado.innerHTML = `<div>${conteo.hombres} Masculinos<div>
                            <div>${conteo.mujeres} Femeninos<div>`;
  });