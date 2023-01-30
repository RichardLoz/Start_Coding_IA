// TODO: ANOTACIONES DOM

// Diferentes maneras de acceder al DOM

// 1- Por la clase
/* 
const contenedor = document.getElementsByClassName("container");
console.log(contenedor);

// 2- Por el ID

const titulo = document.getElementById("titulo");
console.log(titulo);

// 3- Por el TAG

const pie = document.getElementsByTagName("footer");
console.log(pie);

// TODO: Metodo 4 ==> QuerySelector   ==> para llamar los TAG, ID o CLASS
// Debo seguir la sintaxis de CSS

// 1- Por la clase
const titulazo = document.querySelector(".titulazo");
console.log(titulazo);

// 2- Por el ID

const comentario = document.querySelector("#comentario");
console.log(comentario);

// 3- Por el TAG

const aside = document.querySelector("aside");
console.log(aside);

// TODO: QuerySelectorAll ==> Con esto llamo a todos los elementos de un mismo tipo

const allcontainer = document.querySelectorAll(".container");
console.log(allcontainer); */

// TODO: Modificar elementos del DOM

/* const titulazo = document.querySelector(".titulazo");

console.log(titulazo.textContent); */ // Veo en la consola el texto del nodo

// .textContent ==> Modificar DOM
/* titulazo.textContent = "Hola Richard";

// .innerText ==> Sirve para modificar tambien el DOM
titulazo.innerText = "Hola Richardo"; */

// TODO: Acceder y modificar SRC de imagen

const drone = document.querySelector("#drone");

drone.src = "https://i.pravatar.cc/300";

/* console.log(drone); */

// TODO: Agregar HTML a los nodos existentes
/* 
const list = document.querySelector("#cont-list");
list.innerHTML = `
<li> Comentario 1</li>
<li> Comentario 2</li>
`;

// TODO: outerHTML   ==> Accedo a lo que esta afuera de mi etiqueta
console.log(list.outerHTML); */

//TODO: Modificar estilos con " className" ==> piso las clases anteriores

/* const container = document.querySelector(".container"); */
/* console.log(container.className);
// className
container.className = "black";
console.log(container.className);
 */

// TODO: ClassList
// a diferencia de className nos devuelvo un array con las clases del nodo
// Sumo una clase mas a las que ya tiene el nodo

/* container.classList.add("black");
console.log(container.classList); */

// TODO: COn .remove ==> sacamos una clase
// container.classList.remove("nombreClase");
/* 
//TODO: container.classList.tootle("nombreClase")
const cambioTema = () => container.classList.toggle("black");
cambioTema();
// SI no la tiene la agrega y si la tiene la elimina

const textNodes = document.querySelectorAll(".text");

console.log(textNodes);

textNodes.forEach((element) => element.classList.toggle("white-text"));
 */
// Funcion para cambiar tema

const switchTheme = () => {
  const textNodes = document.querySelectorAll(".text");
  const container = document.querySelector(".container");
  const drone = document.querySelector("#drone");

  container.classList.toggle("black");
  textNodes.forEach((element) => element.classList.toggle("white-text"));

  // Condicion para saber cuando ponerle el borde rojo a la img
  if (container.classList.contains("black")) {
    // Le pasamos directamente los parametros CSS en JS
    drone.style.border = "2px solid white";
  }
};

switchTheme();

// Eliminar un nodo
// remove()

const coment = document.querySelector("#coment");

coment.remove();

//TODO: Crear Nodo
// document.createElement

const comentNode = document.createElement("h2");
comentNode.textContent = "Comentario";

comentNode.classList.add("text", "white-text");

console.log(comentNode);

// TODO: Incorporar nodo al HTML
// appendChild   ==> Lo agrega al final

/* const parentAside = document.querySelector("aside");

parentAside.appendChild(comentNode); */

// Para agregarlo antes que otro nodo existente usamos ==>before

const comentList = document.querySelector("#cont-list");

comentList.before(comentNode);

// TODO: Si quisiera agregarlo dsp podemos usar ==> .after

// Link propiedades y metodos ==> document mdm ,
