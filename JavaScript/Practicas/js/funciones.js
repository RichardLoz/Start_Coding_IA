// Crear programa que pida un numero al usuario y le devuelva un mensaje diciendo si el numero es primo o no. (Nro Primo ==> son aquellos que tiene 4 divisores

const findNumberType = (number) => {
  let message = "";
  const parsedNumber = +number; // TODO: Lo que me va a venir como string aca lo parseo a number, asi no lo tengo que hacer en todos los casos.

  if (!parsedNumber && parsedNumber !== 0) {
    message = "El valor ingresado no es un numero";
    return message;
  }

  if (parsedNumber === 0) {
    message = "El numero ingresado es 0";
  } else if (parsedNumber > 0) {
    message = "El numero ingresado es mayor a 0";
  } else {
    message = "El numero ingresado es negativo";
  }

  return message;
};

const chosenNumber = prompt("Ingrese un numero");

const response = findNumberType(chosenNumber);

alert(response);
