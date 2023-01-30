//TODO:  ARRAY

// TODO: Formas de declarar un array

// TODO: 1-const otroArray = new []();

const miArray = ["Richard", "Daniela", "Sophia", "Astrid", "Terry"];

console.log(miArray[2]); // con [indice] accedo a un elemento del array

// TODO: Puedo almacenar ==> String, number, array, booleano,funcion,objetos

// TODO: .length ==> sirve para ver la cantidad del array

// Acceder al ultimo elemento de mi array, tecnica de poner .length -1
console.log(miArray[miArray.length - 1]);

//TODO:  Lo puedo guardar en una variable tambien para tenerlo

const lastelement = miArray[miArray.length - 1];

console.log(lastelement);

// TODO: Acceder a un elemento sin saber el indice  / indexof /

const elemento = "Daniela";

const index = miArray.indexOf(elemento);

console.log(`el index ${index} corresponde a ${miArray[index]}`);

// Si busco un elemento que no esta en el array siempre me retorna -1, eso lo hago usando el indexof

// TODO: Forma de modificar un elemento (Alternativa)

miArray[miArray.indexOf("Terry")] = "Bingo";

console.log(miArray);

// TODO: Agregar elemento al final de array   [PUSH]

miArray.push("Terry");

console.log(miArray);

// TODO: Remover un elemento del final de un array  [POP]

miArray.pop();

// puedo guardar mi array eliminado en una variable
// const removedElement = miArray.pop();

console.log(miArray);

// TODO: Agregar un elemento al principio del array [UNSHIFT]

miArray.unshift("Kevin");

console.log(miArray);

// TODO: Eliminar un elemento del principio del array [SHIFT]

const deletedFirst = miArray.shift(); // LO guarde en una variable en el caso de que lo quiera usar en el futuro

console.log(deletedFirst);

console.log(miArray);

// TODO: SPLICE ==> Remover elementos del array, hay que indicar donde se empieza y cuanto se desea eliminar

console.log(miArray);

// Elimino desde el indice [2] 1 elemento, (Sophia)
miArray.splice(2, 1);

console.log(miArray);

// TODO: SLICE  ==> Recortar un array, indicar donde empiezo y hasta donde (la ultima no esta incluida)
// No modifica el array original

const newArray = miArray.slice(1, 3);

console.log(newArray);
console.log(miArray);

miArray.push("Sophia", "Terry");

console.log(miArray);

// Recorrer mi array

for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}
