// TODO: DESTRUCTURING  ==> Nos permite desarmar un objeto, array, etc

/* const names1 = ["Richard", "Daniela", "Terry"];
const names2 = ["Astrid", "Sophia"];

const persona1 = {
  firstName: "Richard",
  job: "Developer",
  city: "Capital",
};
 */
// TODO: ARRAYS =======================

// TODO: Sin Destructuring
/* const user1 = names1[0];
const user2 = names1[1];
const user3 = names1[2]; */

/* console.log(user1, user2, user3); */

// TODO: Con Destructuring

/* const [user1, user2, user3] = names1;

console.log(user1, user2, user3); */

// ============================

// TODO: OBJETOS  ============================

// TODO: SIN Destructuring
/* const user1 = persona1.firstName;
const job = persona1.job;
console.log(user1, job);
 */

// TODO: CON Destructuring

// EN el caso de que quiera renombrar la variable lo puedo hacer con ":"
// ej: firstName: user1  ==> ahora se llama user1
/* const { firstName, job } = persona1;

console.log(firstName, job); */

// TODO: SPREAD OPERATION ==>se representa con los 3 puntos "..."

// const names1 = ["Richard", "Daniela", "Terry"];
// const names2 = ["Astrid", "Sophia"];

// const persona1 = {
//   firstName: "Richard",
//   job: "Developer",
//   city: "Capital",
// };

// TODO: EN ARRAYS

// 1-Concatenar arrays (concat)

/* const fullName = [...names1, ...names2];

console.log(fullName);

// 2- Copia de Array
// copiedArray ==> es una copia, no es el array original, por eso si modifico el original no afecta a la copia y viceversa
const copiedArray = [...names1];
names1.push("Bingo");

console.log(names1);
console.log(copiedArray); */

// TODO: 3- Obtener elementos del ARRAY

/* const [user1, ...groupedUsers] = names1;

console.log(user1);
console.log(groupedUsers);
console.log(names1); */

// ===================================

// TODO: SPREAD EN FUNCIONES

// NORMAL

/* const logValues = (value1, value2, value3) => {
  const values = [value1, value2, value3];
  values.forEach((value) => console.log(value));
};

logValues("Hola", "Como Estas", "Chau", "Sayonara"); */

// TODO: CON SPREAD

/* const logValues = (...args) => {
  args.forEach((value) => console.log(value));
};

logValues("Hola", "Chau", "Sayonara", "Good"); */

// =====================================

// TODO: SPREAD EN OBJETOS

// TODO: 1- Copiar OBJETOS
// Hago una copia del objeto PErsona1
/* const copiedPErson = { ...persona1 };

// Modifico la copia
copiedPErson.city = "Barcelona";

console.log(copiedPErson);
console.log(persona1);
 */

// TODO: 2- Mergear Objetos  (VS object.assign())

// Copie el objeto Persona y pise el valor de city
/* const mergedPersona = { ...persona1, city: "Belgrano" };

console.log(mergedPersona); */

//TODO:  Otro ejemplo
// Creo una variable con la modificacion de la ciudad y lo paso al merfedPersona con SPREAD, tambien sirve para agregar atributos

// const updatedData = {
//   city: "Vicente Lopez",
// };

// const mergedPersona = { ...persona1, ...updatedData };

// console.log(mergedPersona);
