// CONTROL DE FLUJO

 //  TODO: IF

let age = 17;

if (age >= 18) {
  console.log("Podes manejar");
} else {
  console.log("No podes manejar");
}

// TODO: ELSE IF

let number = 10;

if (number < 10) {
  console.log("El numero es menor a 10");
} else if (number > 10) {
  console.log("El numero es mayor a 10");
} else {
  console.log("El numero es igual a 10");
} */

// TODO: Ejercicio N1

// 1) Tringualo de #

#
##
###
####
##### */

/* let output = "";

for (let i = 1; i <= 5; i++) {
  output = output + "#";
  console.log(output);
}

// 2) Numeros pares e impares.

// EN ESTE CASO como hay una sola línea en el IF y ELSE no es necesario abrir llaves, si es mas de una sola línea, en ese caso si hay que abrir llaves

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) console.log(`${i} es un numero par`);
  else console.log(`${i} es un numero impar`);
}

// 3) FizzBuzz, Generar un programa que itere del 1 al 15

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// OTRA MANERA DE SOLUCIONARLO

for (let i = 1; i <= 15; i++) {
  let text = "";

  if (i % 3 === 0) {
    text += "Fizz";
  }

  if (i % 5 === 0) {
    text += "Buzz";
  } else if (i % 3 !== 0 && i % 5 !== 0) {
    text = i;
  }
  console.log(text); 
}

// Para este caso declare una variable vacia, en la primera comprobacion en el caso de que el numero sea 1, la primera comprobacion es False, pasa a la 2da comprobacion
// y tambien es False, llega al ELSE IF y es TRUE ya que 1 es distinto de 0, y  la variable text toma el valor de i=1, en el caso del numero 15, al ser TRUE en la primera
// comprobacion text toma el valor de "FIZZ" en la 2da comprobacion al ser TRUE tambien, se concatena con "BUZZ" y por eso da el resultado "FIZZBUZZ"

// CODING CHALLENGE

//  TODO: 1)Registro
let isRegistered, registerUserName, registerPassword;

// TODO: Para poder acceder desde otro punto de mi aplicacion a una variable que esta dentro de otra estructura no lo voy a poder hacer si no declare la variable por fuera
// de esa estructura, es decir si la variable no esta como global. "NO podemos acceder a una variable por fuera de su scope"

const wishesToRegister = confirm(
  "Bienvenido al sitio, Haz click en OK para registrarse"
);

do {
  if (wishesToRegister) {
    if (!registerUserName) {
      registerUserName = prompt("Ingrese su nombre de usuario");
    }

    if (registerUserName.length >= 3) {
      registerUserName = registerUserName.toLowerCase();

      registerPassword = prompt("Ingrese su contrasena");

      if (registerPassword.length >= 6) {
        alert("El registro se completo exitosamente");
        isRegistered = true;
      } else {
        alert("Debe ingresar una contrasena de por lo menos 6 caracteres");
        registerPassword = true;
      }
    } else {
      alert("El nombre de usuario tiene que tener por lo menos 3 caracteres");
    }
  } else {
    alert("OK, te esperamos cuando gustes volver");
  }
} while (wishesToRegister && (!registerPassword || !registerUserName)); //TODO: negamos esta condicion (Coersion de tipo) Undefine y NULL son False, String es evaluado como TRUE

// TODO: 2) LOGIN   EN este paso veo la importancia del scope, si esta declarada la variable de manera global puedo acceder a ella desde otro lado, pero si la declare dentro
// de una estructura y despues la quiero llamar fuera de ella, esto me va a dar error

// TODO: Declaro las variables globales

let loginUserName, loginPassword;

if (isRegistered) {
  let wishesToLogin = confirm("Haz click en OK para iniciar sesion");

  do {
    if (wishesToLogin) {
      loginUserName = prompt("Ingresa tu usuario");

      if (loginUserName !== null) {
        loginUserName = loginUserName.toLowerCase();
        loginPassword = prompt("Ingresa tu password");
        if (loginPassword === null) {
          wishesToLogin = false;
        } else if (
          loginUserName === registerUserName &&
          loginPassword === registerPassword
        ) {
          alert(`${loginUserName} Login Exitoso!`);
        } else {
          alert("Alguno de los datos ingresados son incorrectos");
          loginUserName = null;
          loginPassword = null;
        }
      } else {
        wishesToLogin = false;
      }
    } else {
      alert("Vuelve cuando gustes");
    }
  } while (wishesToLogin && (!loginUserName || !loginPassword));
}
