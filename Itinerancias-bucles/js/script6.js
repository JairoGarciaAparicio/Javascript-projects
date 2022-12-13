var nombre = document.getElementById("nombres");
var ape = document.getElementById("apellidos");
var pass = document.getElementById("password");

function enviarDoc() {
  var error = [];
  if (nombre.value == null || nombre.value === "") {
    error.push("Ingresa tu nombre");
  }
  if (ape.value == null || ape.value === "") {
    error.push("Ingresa tus apellidos");
  }
  if (pass.value == null || pass.value === "") {
    error.push("Ingresa tu password");
  }
}

/*
Ejercicio: 
Validar que los campos esten rellenos o sean los correctos. Crear respuesta a los usuarios, para indicar que los campos han de estar correctamente rellenados
Utilizar expresiones regulares con el email, tb que no se vean la passw. y si esta vacio que indique que los campos han de estar rellenos.
*/
