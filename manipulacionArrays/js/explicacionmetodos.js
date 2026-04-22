    const frutas = ["anana","manzana","pera"];
    console.log(frutas);
    frutas.push("melon"); // ingresa un parametro al array al final del mismo
    console.log(frutas);
    frutas.unshift("kiwi"); // agrega un parametro al principio
    console.log(frutas);
    frutas.pop(); //  borra el ultimo parametro del array
    console.log(frutas);
    frutas.shift();  // borra el primer parametro del array
    console.log(frutas);
    frutas.splice(1, 2,"banana"); // agrega o elimina parametros del array (posicion, cuantos elementos eliminar, "agrega")
    console.log(frutas, "splice");

    const numeros = [1,2,4,6]
    const nuevos = numeros.map(n=>n*2); //no modifica el original pero agrega un nuevo array
    console.log(nuevos);

    const numeross = [4,3,2,9];
    const mayores = numeross.filter(n=>n>=5)
    console.log(mayores);

    console.log('----------------------------')

    // FETCH

    // json
            let resp =  {
            "id" : 1,
            "name": "javier",
            "lastname": "parra",
            "skill": {}
        }
        console.log(resp.lastname)

    // DEVUELVE STRINGS 

        console.log("///////////////////////////")
        
        // asi se declara un objeto javascript
        let personajes = {
            nombre:"rick",
            especie:"humano",
            vivo:true,
            episodio:"si",
            edad:18,
            origen:{
                nombre:"ricardo",
                especie:"no humano",
                edad:22
            }
        };
        console.log(personajes.origen.nombre)

        console.log("///////////////////////////")

        const personaje = [
            {id: 1,nombre:"rick",vivo:true},
            {id: 2,nombre:"morty",vivo:false},
            {id: 3,nombre:"ricardopolis",vivo:true}
        ]
    console.log(personaje[1].nombre)

    const pj = {
        nombre:"rick",
        saludar: function () {
            return "Hola mundo";
        }
    }

    fetch('https://rickandmortyapi.com/api/character')
    .then (Response => Response.json())
    .then (data => console.log(data.info.count))

    fetch('https://thesimpsonsapi.com/api/characters')
    .then (Response => Response.json())
    .then (data => console.log(data.results[0].name))