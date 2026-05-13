// EJERCICIO 10

let resultado = document.getElementById('id_resultado')

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
    const personajes = data.results;

    const total = personajes.length;

    const vivos = personajes.filter(personaje => personaje.status === "Alive").length;
    const muertos = personajes.filter(personaje => personaje.status === "Dead").length;
    const desconocidos = personajes.filter(personaje => personaje.status === "unknown").length;
    const ordenados = [...personajes].sort((a, b) => b.episode.length - a.episode.length);
    const masEpisodios = ordenados[0];
    const menosEpisodios = ordenados[ordenados.length - 1];
    const especies = [...new Set(personajes.map(personaje => personaje.species))];
    resultado.innerHTML = `
      <div>Total de personajes en la primera página: ${total}</div>
      <div>Vivos: ${vivos}</div>
      <div>Muertos: ${muertos}</div>
      <div>Estado desconocido: ${desconocidos}</div>
      <div>Personaje con más episodios: ${masEpisodios.name} (${masEpisodios.episode.length})</div>
      <div>Personaje con menos episodios: ${menosEpisodios.name} (${menosEpisodios.episode.length})</div>
      <div>Especies encontradas: ${especies.join(", ")}</div>
    `;
  });