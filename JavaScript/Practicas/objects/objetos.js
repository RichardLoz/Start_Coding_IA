// TODO: Estructura  ====> {key: value}

// Declarar un objeto en JS

// Puedo usar const para mis objetos, ya que no estoy modificando la referencia, no estoy creando un nuevo objeto, sino que estoy modificando sus propiedas, eso si lo puedo hacer

// TODO: Hay 2 maneras de declarar un objeto

// 1-
/* const literalObject = { FirstName: "Richard" };

console.log(literalObject);
 */
// 2-
/* const normalObject = new Object();
normalObject.FirstName = "Richardo";

console.log(normalObject); */

// Si tengo algun caracter especial en la KEY, puedo ponerlo entre comilla ""
// Y a la hora de llamarlo, lo hago asi ==> ["key"]

/* literalObject.lastName = "Lozano";

console.log(literalObject.lastName);

literalObject.lastName = "Lozano Melendez";

console.log(literalObject.lastName); */

// La inmutabilidad dice que no deberiamos modificar directamente los objetos, array y datos sino que tenemos que crear copias
// de esos datos modificadas con el nuevo valor que queremos.

// This lo que hace es linkear la propiedad con el scope de la clase
//  Una funcion dentro de un objeto se llama metodo

// Constructor ==> Permite definir la estructura de la clase

class Product {
  constructor(nameProduct, id, desc, price, stock) {
    this.nameProduct = nameProduct;
    this.id = id;
    this.desc = desc;
    this.price = price;
    this.stock = stock;
  }
  precio() {
    console.log(`el precio es ${this.price}`);
  }
}

//Creo mi objeto

/* const Drone = new Product("Drone", 1, "lorem", 100, 10);

Drone.precio(); */

//Creo una clase hija
// Con super traigo los parametros de la clase padre, para usarlo en la hija, los tengo que declarar en el constructor
// de la clase hija tmb.

class Drone extends Product {
  constructor(nameProduct, id, desc, price, stock, disponible) {
    super(nameProduct, id, desc, price, stock);
    this.disponible = disponible;
  }

  precio() {
    console.log(`Mi precio es ${this.price}`);
  }

  inventario() {
    console.log(
      `Mi precio es ${this.price} y  ${
        this.disponible ? "Hay stock" : "No hay stock"
      }`
    );
  }
}

const drone = new Drone("DroneII", 3, "lorem", 300, 3, true);

drone.precio();
drone.inventario();

// Metodos para manipular objetos

// TODO: Modificar un elemento
// objeto.key = newValor;

const celu = {
  marca: "Iphone",
  modelo: 13,
  precio: 1000,
};
// Object.key() ==> si paso un objeto como valor a una variable, esta se convierte en un Array
const keys = Object.keys(celu);
console.log(keys);

// Manera de recorrer mi Array

keys.forEach((key) => console.log(celu[key]));

// TODO: Otra forma de reccorrer mi objeto es con FOR IN
// El "hasOwnProperty, se encarga de fijarse si el objeto tiene las key"

for (const key in celu) {
  if (Object.hasOwnProperty.call(celu, key)) {
    console.log(celu[key]);
  }
}

// TODO: Object.values()   ==> Esto nos permite acceder a los valores del objeto

const values = Object.values(celu);

console.log(values);

// TODO: Object.assign()  ==>> Nos permite asignar los valores de un objeto a otro objeto
// Si la propiedad existe la va a pisar y si no existe la va a crear
const tablet = {
  procesador: "intel",
};

Object.assign(celu, tablet);

console.log(celu);

// TODO: Otra forma de hacerlo es con Spreed Operator

const modifiedCelu = { ...celu, ...tablet };
console.log(modifiedCelu);

// TODO: Object.entries()

const entries = Object.entries(celu);

console.log(entries);
