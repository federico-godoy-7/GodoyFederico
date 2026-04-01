function saludo (){
    alert('¡Hola, Mundo!')
}

    function saludoPersonalizado (){
        let nombre = document.getElementById('name').value
        let resultado = document.getElementById('resultado')

        if (nombre === '') {
            resultado.innerText = "Por favor ingresá tu nombre."
        }
        else {
            alert(`¡Hola, ${nombre}!`) // con los backsticks (``) se pueden mostrar variables
        }
    }

        function analisis () {
            let valor = document.getElementById('valor').value

            if (valor === '') {
                console.log('El input esta vacío')
                console.log('Ingrese denuevo el input')
                console.log('---------------------')
            }
                else if (isNaN(valor)) { //si isNaN es true, no son numeros. si es false o NaN, son numeros
                console.log('No es un número válido')
                console.log('Tipo: String')
                console.log('---------------------')
                }
                else {
                    console.log('Es un número válido')
                    console.log('---------------------')
                }
        }
            function calcular () {
                let aux = 25*4; //se resuelve primero la multiplicacion
                let aux2 = 10 //se resta al resultado de la multiplicacion
                let operacion

                let resultado = document.getElementById('resultado')

                operacion = aux - aux2; //se guarda el resultado
                console.log('El resultado es: ' + operacion)
                resultado.innerText = "El resultado es: " + operacion // se muestra en el parrafo
            }

                function sumar () { 
                    
                    let resultado = document.getElementById('resultado')

                    let n1 = document.getElementById('n1').value
                    let n2 = document.getElementById('n2').value
                    let operacion = Number(n1) + Number(n2)

                    if ((n1 === '') || (n2 === '')) { // el "||"" se usa como OR (al menos uno tiene que cumplir con la condicion)
                        resultado.innerText = 'Error, uno de los inputs están vacíos'
                    }
                    else {
                        resultado.innerText = "El resultado es: " + operacion
                    }
                }
                    function restar () {
    
                        let n1 = document.getElementById('id_num1').value
                        let n2 = document.getElementById('id_num2').value
                        let operacion = Number(n1) - Number(n2)

                        let resultado = document.getElementById('resultado')

                            if (operacion > 0) {
                            resultado.innerText = 'Resultado:' + operacion + ' (Positivo)'
                            }
                            else if (operacion < 0) {
                                resultado.innerText = 'Resultado: ' + operacion + ' (Negativo)'
                            }
                                else {
                                    resultado.innerText = 'Resultado: ' + operacion
                                }
                        }
                            function multiplicar () {

                                let n1 = document.getElementById('id_num1').value
                                let n2 = document.getElementById('id_num2').value
                                let operacion = Number(n1) * Number (n2)

                                let resultado = document.getElementById('resultado')

                                resultado.innerText = 'El producto es: ' + operacion

                                console.log(n1 + 'x1=' + n1*1)
                                console.log(n1 + 'x2=' + n1*2)
                                console.log(n1 + 'x3=' + n1*3)
                                console.log(n1 + 'x4=' + n1*4)
                                console.log(n1 + 'x5=' + n1*5)
                                console.log('---------------------')
                            }
                                function dividir () {
                                    
                                    let n1 = document.getElementById('id_num1').value
                                    let n2 = document.getElementById('id_num2').value
                                    let operacion = Number(n1) / Number(n2)

                                    let resultado = document.getElementById('resultado')

                                    if (Number(n2)==0) {
                                        resultado.innerText = "Error: no se puede dividir por cero"
                                    }
                                    else {
                                        resultado.innerText = 'El resultado es: ' + operacion.toFixed(2)
                                    }
                                }
                                    function clasificar () {
                                        
                                        let n1 = document.getElementById('id_num').value

                                        let resultado = document.getElementById('resultado')

                                        if (n1>0) {
                                            resultado.innerText = "El numero ingresado es positivo."
                                        }
                                            else if (n1==0) {
                                                resultado.innerText = "El numero ingresado es cero (0)."
                                            }
                                                else if (n1<0) {
                                                    resultado.innerText = "El numero ingresado es negativo."
                                                }
                                    }
                                        function verificar () {
                                            let n1 = parseFloat(document.getElementById('id_num').value) // se convierte el input en un número real
                                            
                                            let resultado = document.getElementById('resultado')

                                            if (Math.floor(n1) !== n1) {
                                                resultado.innerText = "Ingrese un numero entero"
                                            }
                                                else if (n1 % 2 === 0) {
                                                    resultado.innerText = "El numero es par"
                                                }
                                                    else {
                                                        resultado.innerText = "El numero es impar"
                                                    }
                                        }