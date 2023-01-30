// TODO: Ejercicio 1-

class Deportes {
  constructor(nombre, deporteEquipo) {
    this.nombre = nombre;
    this.deporteEquipo = deporteEquipo;
  }
  nombreDeporte() {
    console.log(`El nombre del deportes es ${this.nombre}`);
  }

  juegoEnEquipo() {
    const mensaje = this.deporteEquipo
      ? `${this.nombre} es un deporte de equipo`
      : `${this.nombre} no es un deporte de equipo`;

    console.log(mensaje);
  }
}

// Extendemos

class EquipoDeportes extends Deportes {
  constructor(nombre, numerosJugadores) {
    super(nombre);
    this.numerosJugadores = numerosJugadores;
  }

  validarJugadores() {
    console.log(
      `Para jugar al ${this.nombre} necesitas ${this.numerosJugadores} jugadores por equipo`
    );
  }
}

const tennis = new Deportes("Tennis", false);
tennis.nombreDeporte();
tennis.juegoEnEquipo();

const futbol = new EquipoDeportes("Futbol", 11);
futbol.nombreDeporte();
futbol.validarJugadores();

const basquet = new EquipoDeportes("Basquet", 5);
basquet.nombreDeporte();
basquet.validarJugadores();
