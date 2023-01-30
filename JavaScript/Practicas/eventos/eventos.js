// TODO: EVENTOS

/* const sayHello = () => alert("Hola Mundo"); */

/* const saludar = document.querySelector(".saludar"); */

// TODO: Manera nro 1
/* saludar.onclick = () => sayHello(); */

// TODO: Manera nro 2 addEventListener

/* saludar.addEventListener("click", sayHello); */
/* saludar.addEventListener("click", () => alert("ALERT")); */

// TODO: SI queremos sacar un evento, usamos REMOVE, recibe los mismos argumentos que el addEvenListener

// Funcion que remueve elemento luego de utilizarlo

/* const sayHello = () => {
  alert("Hola mundo");

  saludar.removeEventListener("click", sayHello);
};

saludar.addEventListener("click", sayHello);
 */

//Objeto Colors

const colors = {
  red: "rojo",
  black: "negro",
  white: "blanco",
  yellow: "amarillo",
  green: "verde",
  brown: "marron",
  purple: "violeta",
  peru: "peru",
};

//Defino la variable en un scope global
let selectedColor;

const selectColor = (event) => {
  selectedColor = event.target.id;
  const strongTag = document.querySelector("#selected-color");
  strongTag.textContent = colors[selectedColor];
};

// Callback  con validacion en el caso de que se seleccione la grilla antes que el color

const paintSquare = (event) => {
  if (!selectedColor) return;
  const selectedSquare = document.querySelector(`#${event.target.id}`);
  selectedSquare.className = `paiterBlock ${selectedColor}`;
};

// Callback   Evento Mousemove
// Con .buttons veo la accion del mouse con los botones 1 izq, 2 derecha
const paintSquareOnMove = (event) => {
  if (event.buttons !== 1) return;
  paintSquare(event);
};

// Callback que se dispara al momento de resetear la grilla
const resetGrid = () => {
  gridSquares.forEach((square) => (square.className = "painterBlock"));
  selectedColor = null;
  const strongTag = document.querySelector("#selected-color");
  strongTag.textContent = "";
};

const colorSquares = document.querySelectorAll(".color");

colorSquares.forEach((square) => square.addEventListener("click", selectColor));

const gridSquares = document.querySelectorAll(".painterBlock");

gridSquares.forEach((square) => square.addEventListener("click", paintSquare));

gridSquares.forEach((square) =>
  square.addEventListener("mousemove", paintSquareOnMove)
);

// Boton de reset

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", resetGrid);
