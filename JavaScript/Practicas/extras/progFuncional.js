// TODO: PROGRAMACION FUNCIONAL
// const firsName = "Richard";
// console.log(firsName);
// // Con funcionalidad
// const getFirstName = () => "Richard";
// console.log(getFirstName());

// const two = 2;
// console.log(two + 3);
// // COn Funcionalidad
// const getTwoNumber = () => 2;
// console.log(getTwoNumber() + 3);

//TODO:  INMUTABILIDAD ==> No modificar el objeto directamente, sino realizar copias y modificar dichas copias
// const names1 = ["Richard", "Daniela", "Terry"];
// const names2 = ["Astrid", "Sophia"];

// const persona1 = {
//   firstName: "Richard",
//   job: "Developer",
//   city: "Capital",
// };

// // Sin Programacion funcional
// const addNewMember = (currentMembers, newMember) => {
//   const newMemberList = [...currentMembers, newMember];
//   return newMemberList;
// };
// console.log(addNewMember(names1, "Tati"));
// console.log(names1);

// TODO: FUNCIONES PURAS ==> Una funcion es pura cuando no produce efectos secundarios o altera variables globales // Ventana, como ya se el resultado, es mas facil hacer los test

// const sum = (a, b) => a + b;

// console.log(sum(2, 3));

// Funcion IMPURA ==> Recibe parametros externos que hacen que se modifique
// const getRandomNumber = () => Math.random();
// const sum = (a, b) => a + b + getRandomNumber();

// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));

// TODO: HIGH ORDER FUNCTIONS  ==> Es una funcion que retorna otra funcion, o una funcion que recibe como argumento una funcion

const logResult = (result) => console.log(result);
// const alertResult = (result) => alert(result);

const sum = (a, b, callback) => callback(a + b);

sum(2, 3, logResult);
// sum(3, 3, alertResult);
