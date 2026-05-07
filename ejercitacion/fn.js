console.log('---------EJERCICIO 1--------------')

const colores = ['rojo', 'verde'];

colores.push('azul', 'amarillo');

console.log(colores)

/* PUSH AÑADE ELEMENTOS AL FINAL DEL ARRAY */

console.log('---------------EJERCICIO 2---------')

const dias = ['Lunes','Martes','Miercoles']

let diaEliminado = dias.pop()

console.log('dia eliminado: ',diaEliminado)
console.log('dias: ',dias)

/* POP ELIMINA EL ULTIMO ELEMENTO Y LO DEVUELVE */
console.log('---------------EJERCICIO 3---------')

const frutas = ['manzana','pera']

frutas.unshift('banana')
console.log(frutas)

/* UNSHIFT AGREGA ELEMENTOS AL PRINCIPIO */

console.log('---------------EJERCICIO 4---------')

const numeros = [10, 20, 30, 40]

numeros.shift()

console.log(numeros)

/* SHIFT ELIMINA EL PRIMER ELEMENTO DEL ARRAY */

console.log('---------------EJERCICIO 5---------')

const nombres =  ['Juan', 'Ana', 'Pedro', 'Marta', 'Luis']

nombres.splice(2, 1)

console.log(nombres)

/* SPLICE AGREGA, ELIMINA O REEMPLAZA (pos, cant, elem) */

console.log('---------------EJERCICIO 6---------')

const meses = ['Enero', 'Marzo', 'Abril']

meses.splice(1, 0, 'Febrero')

console.log(meses)

console.log('---------------EJERCICIO 7---------')

let mochila = ['Cuaderno','Lápiz']

if (mochila.length<3) {
    mochila.push('Regla')
}

console.log(mochila)

console.log('---------------EJERCICIO 8---------')

const tareas = ['Lavar', 'Cocinar'] 

const terminadas = []
console.log(tareas)
console.log(terminadas)

let tarea = tareas.pop()
terminadas.push(tarea)

console.log(tareas)
console.log(terminadas)

console.log('---------------EJERCICIO 9---------')

const herramientas = ['Martillo', 'Destornillador', 'Pinza']
console.log(herramientas)

herramientas.splice(1, 1, 'llave inglesa')

console.log(herramientas)

console.log('---------------EJERCICIO 10---------')

const fila = ['Cliente 1', 'Cliente 2']
console.log(fila)

fila.splice(0, 1)
fila.push('Cliente 3')

console.log(fila)


console.log('---------------EJERCICIO 11---------')

const names = ['Lucas', 'Matias', 'Sofia']

names.forEach(nombre => {
    console.log(`Alumno: ${nombre}`)
})

/* FOREACH RECORRE EL ARRAY */


console.log('---------------EJERCICIO 12---------')

const stock = ['Monitor', 'Teclado', 'Mouse']

if (stock.includes('Parlantes')) {
    console.log("hay parlantes en stock")
}
else {
    console.log("No hay parlantes en stock")
}

/* BOOLEANO QUE VERIFICA SI EXISTE */

console.log('---------------EJERCICIO 13---------')

const alumnos = [
                    { nombre: 'Ana', nota: 7 },
                    { nombre: 'Hugo', nota: 9 },
                    { nombre: 'Luz', nota: 4 }
                ]

    alumnos.find(alumno => {
        if (alumno.nota>6)
            console.log(alumno)
    })

/* BUSCA EL ELEMENTO QUE CUMPLA LA CONDICION */

console.log('---------------EJERCICIO 14---------')

const premios = ['Oro', 'Plata', 'Bronce']

let indice = premios.findIndex(premio => premio === 'Plata')

console.log('Plata se encuentra en el indice: ',indice)

console.log('---------------EJERCICIO 15---------')

const lista = ['Chrome', 'Firefox', 'Edge']

function buscar () {
let input = document.getElementById("id_input").value

    if (lista.includes(input)) {
        console.log(`${input} Si existe`)
    }
    else {
        console.log(`${input} No existe`)
    }
}

console.log('---------------EJERCICIO 16---------')

let total = 0
const puntajes = [10, 20, 30]

puntajes.forEach(punto => {
    total += punto 
})

console.log("total: ",total)

console.log('---------------EJERCICIO 17---------')

const precios = [120, 80, 45, 200]
let menor 

precios.find(precio => {
     if (precio < 50) {
        menor = precio
     }
})
console.log(menor)

console.log('---------------EJERCICIO 18---------')

const mascotas = ['Perro', 'Gato']

let pos = mascotas.findIndex(mascota =>
    mascota === 'Loro')

console.log(pos)

console.log('---------------EJERCICIO 19---------')

const palabras = ['hola', 'mundo']

palabras.forEach(palabra => {
console.log(palabra.toUpperCase())
})

console.log('---------------EJERCICIO 20---------')

const ids = [101, 102, 103, 104];

if (ids.includes(105)) {
    console.log('El ID si está presente en el array')
}
else {
    console.log('El ID no está presente en el array')
}

/* VERIFICA SI EL ELEMENTO QUE SE BUSCA ESTÁ DENTRO DEL ARRAY O NO COMO UN BOOLEANO */

console.log('---------------EJERCICIO 21---------')

const base = [1, 2, 3, 4, 5];

const multiplicado = base.map(n => n * 10);

console.log(multiplicado);

/* CREA UN ARRAY DEL MISMO TAMAÑO TRANSFORMANDO CADA ELEMENTO */

console.log('---------------EJERCICIO 22---------')

const edades = [12, 18, 25, 10, 30];

const mayores = edades.filter(edad => edad>=18)

console.log(mayores);

/* CREA UN ARRAY NUEVO CON LOS ELEMENTOS QUE CUMPLEN LA CONDICION */

console.log('---------------EJERCICIO 23---------')

const lista1 = ['Pan', 'Leche'];

const lista2 = ['Carne', 'Fruta'];

const compra = lista1.concat(lista2)

console.log(compra);

/* Devuelve un nuevo array uniendo los elementos, sin modificar el original */ 

console.log('---------------EJERCICIO 24---------')

const letras = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(letras.slice(2, 5))

/*SLICE sirve para extraer una parte de un array y devolver un nuevo array, sin modificar el original. */
// inicio: índice desde donde empieza a cortar.
// fin: índice donde termina, pero no se incluye.

console.log('---------------EJERCICIO 25---------')

const items = ['Inicio', 'Contacto']

const itemModificado =  items.map(item => '<li>' + item + '</li>') 

console.log(itemModificado)

console.log('---------------EJERCICIO 26---------')

const words = ['sol', 'computadora', 'casa', 'televisor']

const cincoLetras = words.filter(palabra => palabra.length>5)

console.log(cincoLetras)

console.log('---------------EJERCICIO 27---------')

const num = [1, 2, 3, 4, 5];    

console.log(num.slice(3,5))

console.log('---------------EJERCICIO 28---------')

const productos = [
{ id: 1, nombre: 'Celular' },
{ id: 2, nombre: 'Tablet' }
                ];

    const nombress = productos.map(n => n.nombre)

    console.log(nombress)

console.log('---------------EJERCICIO 29---------')

const valores = [1, 2, 3, 4, 5, 6, 7, 8];

const pares = valores.filter(n => n%2===0)

console.log(pares)

console.log('---------------EJERCICIO 30---------')

const a = [1, 2]

const b = [3, 4]

const c = [5, 6]

const d = a.concat(b,c)

console.log("ARRAY CONCATENADO ",d)

console.log('---------------EJERCICIO 31---------')

const gastos = [100, 250, 600, 150]

var acumulador = 0

const gastoTotal = gastos.reduce()

console.log(gastoTotal)