// TODO: EJERCICIO N_1
/* 1.1) Solicitar 2 numeros por un prompt
Ej:
Ingrese el primer valor:
Ingrese el segundo valor:

1.2) Indicar a traves de un alert si el primer numero es menor, mayor o igual al segundo.
Ej:
El primer numero es mayor al segundo.

Bonus) Verificar que los datos ingresados sean numericos */

alert("Ingrese 2 numeros");
let num1 = parseInt(prompt("Ingresar el primer numero"));
let num2 = parseInt(prompt("Ingresar el segundo numero"));

const mayor = () => {
  if (num1 > num2) console.log(`${num1} es mayor`);
  else alert(`${num2} es mayor`);
};

mayor();

// TODO: EJERCICIO N_2

/* 2.1) Solicitar numeros por un prompt hasta que el usuario ingrese un numero negativo.
Ejemplo:
Ingrese un numero (la ejecución finaliza ingresando un número negativo)

2.2) Indicar a traves de un alert cual es la suma de todos los numeros ingresados.
Ej:
La suma total es: 8

2.3) Indicar a traves de un alert cual es el promedio de los numeros ingresados.
Ej:
El promedio de todos los numeros es 2.6

Bonus) Verificar que los datos ingresados sean numericos */

let arraisito = [];
let numero;

while (numero > 0 && !isNaN(numero)) {
  numero = prompt("Ingrese un numero");
  arraisito.push(numero);
}
numero;

console.log("Se termino la secuencia");
console.log(arraisito);

function obtenerNumero() {
  arraisito = [];
  let numero1 = prompt("Ingrese un numero");
  while (numero1 !== "" && typeof Number(numero1) === "number" && numero1 < 0) {
    Number(numero1);
  }
}
/* obtenerNumero(); */

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
/* obtenerSuma(); */

//2.3)
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
/* obtenerPromedio(); */
