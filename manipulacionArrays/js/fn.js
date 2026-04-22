    // BLOQUE 1 

    // PUNTO 1
    console.log('------------PUNTO 1--------------')
    const colores = ['rojo', 'verde']
    console.log('antes ', colores);

    colores.push('azul', 'amarillo')
    console.log('despues ', colores);

    // PUNTO 2
    console.log('------------PUNTO 2--------------')
    const dias = ['Lunes', 'Martes', 'Miercoles'];
    console.log('antes ', dias);
    
    let diaEliminado = dias.pop();
    
    console.log('despues ', dias)
    console.log('Dia eliminado: ', diaEliminado);

    // PUNTO 3
    console.log('------------PUNTO 3--------------')
    const frutas = ['manzana', 'pera'];
    console.log('antes ', frutas);
    
    frutas.unshift('banana');
    console.log('despues', frutas)
    
    // PUNTO 4
    console.log('------------PUNTO 4--------------')
    const numeros = [10, 20, 30, 40]
    console.log('antes ', numeros)
    
    numeros.shift()
    console.log('despues ',numeros)
    
    // PUNTO 5
    console.log('------------PUNTO 5--------------')
    const nombres = ['Juan','Ana','Pedro','Marta','Luis']
    console.log('antes ', nombres)
    
    nombres.splice(2, 1)
    console.log('despues ', nombres)

    // PUNTO 6
    console.log('------------PUNTO 6--------------')

    const meses = ['Enero','Marzo','Abril'];
    console.log('antes ',meses)

    meses.splice(1,0,"Febrero");
    console.log('despues ', meses);

    // PUNTO 7
    console.log('------------PUNTO 7--------------')
    let mochila = ['Cuaderno','Lapiz']
    console.log('antes ', mochila)

    function utiles (mochila) {

        if (mochila.length<3) {
            mochila.push('Regla');

            console.log('Como habia menos de 3 elementos ')
            console.log('Se agrega "Regla"')
        }
    }
   
    utiles(mochila)

    console.log('despues ', mochila)

    // PUNTO 8
    console.log('------------PUNTO 8--------------')

    const tareas = ['Lavar','Cocinar']
    console.log('tareas ', tareas)
    console.log('')

    const terminadas = [tareas.pop()]
    console.log('tareas terminadas: ', terminadas)
    console.log('tareas: ',tareas)

    // PUNTO 9
    console.log('------------PUNTO 9--------------')
    
    const herramientas = ['Martillo', 'Destornillador', 'Pinza']
    console.log(herramientas)

    herramientas.splice(1,1,'Llave Inglesa')
    console.log(herramientas);

    // PUNTO 10
    console.log('------------PUNTO 10--------------')

    const fila = ['Cliente 1','Cliente 2']
    console.log('antes ', fila)

    fila.push('Cliente 3')
    fila.shift()

    console.log('despues ', fila)


    //BLOQUE 2

    // PUNTO 11
    console.log('------------PUNTO 11--------------')
    
    const names = ['Lucas','Matias','Sofia']
    names.forEach(names => {
        console.log(names)
    })

    // PUNTO 12
    console.log('------------PUNTO 12--------------')

    const stock = ['Monitor','Teclado','Mouse']
    if (stock.includes('Parlantes')) {
        console.log('Parlantes está en la lista')
    }
    else {
        console.log('Parlantes no está en la lista')
    }

    // PUNTO 13
    console.log('------------PUNTO 13--------------')
    
    const alumnos = [
        {nombre: 'Ana',nota:7},
        {nombre: 'Hugo',nota:9},
        {nombre: 'Luz',nota:4}
    ];

    alumnos.find(alumnos => {
        if (alumnos.nota>=6) {
            console.log(alumnos)
        }
    })

    // PUNTO 14
    console.log('------------PUNTO 14--------------')

    const premios = ['Oro','Plata','Bronce']
    let indice = premios.findIndex(premio=> premio === 'Plata')

    console.log('Plata se encuentra en el indice: ',indice)

    // PUNTO 15
    console.log('------------PUNTO 15--------------')

    const lista = ['Chrome','Firefox','Edge']