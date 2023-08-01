

const Pelicula = function (nombre, dia, precio, entradasDisponibles) {
  this.nombre = nombre;
  this.dia = dia;
  this.precio = precio;
  this.entradasDisponibles = entradasDisponibles;
};

let pelicula1 = new Pelicula("oppenheimer","miercoles, viernes y sabado", 3500, 95);
let pelicula2 = new Pelicula("barbie", "martes, viernes y domingo", 3500, 89);
let pelicula3 = new Pelicula("mision imposible", "lunes y jueves", 3500, 103);
let pelicula4 = new Pelicula("indiana jones", "sabado y domingo", 3500, 133);

let cartelera = [pelicula1, pelicula2, pelicula3, pelicula4];

function filtrarPelicula() {
  let busqueda = prompt("Ingrese la película que desea ver");
  let resultado = cartelera.filter((pelicula) =>
    pelicula.nombre.includes(busqueda)
  );

  if (resultado.length > 0) {
    console.table(resultado);
  } else {
    alert("no existe coincidencia con: " + busqueda);
  }
}

//Ciclo

do {
    filtrarPelicula();
} while (confirm("¿Desea buscar otra pelicula?"));

alert(
  "Gracias por elegirnos. ¡Que tenga buen día!"
);
