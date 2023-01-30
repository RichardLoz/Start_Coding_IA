

// Ejercicio 2

/* alert("Ingresar un numero, para terminar ingresar un numero negativo");

numero01 = parseInt(prompt("Ingresar un numero")); */

/* function obtenerNumero() {
  for (let i = 0; i < 10; i++) {
    let numero1 = prompt("Ingrese un numero");
    if (
      numero1 !== "" &&
      typeof Number(numero1) === "number" &&
      numero1 < 10 &&
      numero1 > 0
    ) {
      Number(numero1);
    } else {
      return false;
    }
  }
}
obtenerNumero(); */

/* function obtenerSuma() {
    let arraisito = []
    for (let i = 0; i < 10; i++) {
      let someNumber = prompt('Ingrese un numero');
      if (someNumber !== '' && typeof Number(someNumber) === 'number' && someNumber < 10 && someNumber > 0) {

        Number(someNumber);
        arraisito.push(someNumber);
      } else {
        return false;
      }
    }
    var result = arraisito.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    prompt(`La suma de los valores es de ${result}`);
  }
  obtenerSuma(); */

//2.3)
/* function obtenerPromedio() {
    let arraisito = []
    for (let i = 0; i < 10; i++) {
        let someNumber = prompt('Ingrese un numero');
        if (someNumber !== '' && typeof Number(someNumber) === 'number' && someNumber < 10 && someNumber > 0) {

            Number(someNumber);
            arraisito.push(someNumber);
        } else {
            return false;
        }
    }
    var result = arraisito.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var avg = (result / arraisito.length) || 0;
    prompt(`El promedio de los valores es de ${avg}`);
}
obtenerPromedio(); */

// Ejercicio 3

/* let number1 = parseInt(prompt("Ingresar un numero"));

const print = () => {
  if (number1 % 2 === 0) document.write(`${number1} es un numero par`);
  else console.log(`${number1} es un numero impar`);
};

print(); */

// Ejercicio 04

/* alert("Ingrese un numero para saber su tabla de multiplicacion");

let number01 = parseInt(prompt("Ingresar un numero"));
document.write(`<h1>Tabla de ${number01}</h1>`);

for (let i = 0; i <= 10; i++) {
  multi = number01 * i;
  document.write(`${number01}x ${i} = ${multi}<br> `);
} */

// Ejercicio 05

/* alert("Ingresar los 6 numeros");
numero1 = parseInt(prompt("Ingresar un numero"));
numero2 = parseInt(prompt("Ingresar un numero"));
numero3 = parseInt(prompt("Ingresar un numero"));
numero4 = parseInt(prompt("Ingresar un numero"));
numero5 = parseInt(prompt("Ingresar un numero"));
numero6 = parseInt(prompt("Ingresar un numero"));

let datos = [numero1, numero2, numero3, numero4, numero5, numero6];
 */

/* function obtenerNumero() {
  for (let i = 0; i < 10; i++) {
    let someNumber = prompt("Ingrese un numero");
    if (
      someNumber !== "" &&
      typeof Number(someNumber) === "number" &&
      someNumber < 10 &&
      someNumber > 0
    ) {
      Number(someNumber);
    } else {
      return false;
    }
  }
}
obtenerNumero();

function obtenerSuma() {
  let arraisito = [];
  for (let i = 0; i < 10; i++) {
    let someNumber = prompt("Ingrese un numero");
    if (
      someNumber !== "" &&
      typeof Number(someNumber) === "number" &&
      someNumber < 10 &&
      someNumber > 0
    ) {
      Number(someNumber);
      arraisito.push(someNumber);
    } else {
      return false;
    }
  }
  var result = arraisito.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  prompt(`La suma de los valores es de ${result}`);
}
obtenerSuma();

function obtenerPromedio() {
  let arraisito = [];
  for (let i = 0; i < 10; i++) {
    let someNumber = prompt("Ingrese un numero");
    if (
      someNumber !== "" &&
      typeof Number(someNumber) === "number" &&
      someNumber < 10 &&
      someNumber > 0
    ) {
      Number(someNumber);
      arraisito.push(someNumber);
    } else {
      return false;
    }
  }
  var result = arraisito.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  var avg = result / arraisito.length || 0;
  prompt(`El promedio de los valores es de ${avg}`);
}
obtenerPromedio();
 */
/* 

1) EJERCICIO 01

1.1) Solicitar 2 numeros por un prompt
Ej:
Ingrese el primer valor:
Ingrese el segundo valor:

1.2) Indicar a traves de un alert si el primer numero es menor, mayor o igual al segundo.
Ej:
El primer numero es mayor al segundo.

Bonus) Verificar que los datos ingresados sean numericos


/* // Ejercicio 1

let num1 = parseInt(prompt("Ingresar el primer numero"));
let num2 = parseInt(prompt("Ingresar el segundo numero"));

console.log(
  `El primer numero ingresado es ${num1} y el segundo numero ingresado es ${num2}`
);

const mayor = () => {
  if (num1 > num2) console.log(`${num1} es mayor`);
  else console.log(`${num2} es mayor`);
};

mayor(); */



2) EJERCICIO 02

2.1) Solicitar numeros por un prompt hasta que el usuario ingrese un numero negativo.
Ejemplo:
Ingrese un numero (la ejecución finaliza ingresando un número negativo)

2.2) Indicar a traves de un alert cual es la suma de todos los numeros ingresados.
Ej:
La suma total es: 8

2.3) Indicar a traves de un alert cual es el promedio de los numeros ingresados.
Ej:
El promedio de todos los numeros es 2.6

Bonus) Verificar que los datos ingresados sean numericos

3) EJERCICIO 03

3.1) Solicitar un numero por un prompt
Ej:
Ingrese un numero:

3.2) Indicar a traves del cuerpo del html o de la consola si el numero ingresado es par o impar
El numero: 5 es impar.

Bonus) Verificar que los datos ingresados sean numericos

4) EJERCICIO 04

4.1) Solicitar un numero por un prompt.
Ej:
Ingrese el numero del cual quiere la tabla de multiplicar:

4.2) Mostrar en el cuerpo del html un h1 con el texto Tabla del "X" (Siendo X el numero ingresado)
Ej:
Tabla del 5

4.2) Mostrar en el cuerpo de un html la tabla (del 1 al 10) de ese numero. 
Ej:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50

Bonus) Verificar que los datos ingresados sean numericos

5) EJERCICIO 05

5.1) Solicitar por un prompt 6 numeros al usuario y almacenarlos en un Array
Ejemplo:
Introducir el valor 1 de 6: 
Introducir el valor 2 de 6: 
Introducir el valor 3 de 6: 
...

5.2) Al finalizar de pedir los 6 numeros pedir un numero mas a buscar dentro del array
Ejemplo:
Introducir el valor a buscar:

5.3) Mostar en el cuerpo de un html todos los elementos del Array con su indice
Ejemplo:
ARRAY INGRESADO:
Indice: 0. Valor: 6
Indice: 1. Valor: 2
Indice: 2. Valor: 3
Indice: 3. Valor: 5
Indice: 4. Valor: 4
Indice: 5. Valor: 1

5.4) Mostar en el cuerpo de un html todos los elementos del Array pero ordenados con su indice.
Ejemplo:
ARRAY ORDENADO:
Indice: 0. Valor: 1
Indice: 1. Valor: 2
Indice: 2. Valor: 3
Indice: 3. Valor: 4
Indice: 4. Valor: 5
Indice: 5. Valor: 6

5.5) Mostar en el cuerpo de un html todos los elementos del Array ordenados invertidamente con su indice
Ejemplo:
ARRAY ORDEN INVERSO:
Indice: 0. Valor: 6
Indice: 1. Valor: 5
Indice: 2. Valor: 4
Indice: 3. Valor: 3
Indice: 4. Valor: 2
Indice: 5. Valor: 1

5.6) Mostar en el cuerpo de un html cuantos elementos tiene el array.
Ejemplo:
EL ARRAY TIENE: 6 ELEMENTOS

5.7) Mostar en el cuerpo de un html si el valor ingresado en el punto 5.2) se encuentra dentro del array y su indice.
Ejemplo:
EL ARRAY CONTIENE EL VALOR: 4 Y SE ENCUENTRA EN EL INDICE: 2

