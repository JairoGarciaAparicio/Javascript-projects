function ejecutar() {
  
  var opcion = document.getElementById("opcion").value; //recogemos la variable
  var respuesta = document.getElementById("resultado");// soltamos la variable

  switch (opcion) {
    case "1":
      respuesta.innerText = "FORMATEANDO EL DISCO..., POR FAVOR ESPERE";
      break;
    case "2":
      respuesta.innerText = "RECOPILANDO DATOS PARA SU ELIMINACION";
      break;
    case "3":
      respuesta.innerText = "RECOPILANDO DATOS DE CONEXION Y COOKIES";
      break;
    case "4":
      respuesta.innerText = "SU NAVEGADOR ESTA SIENDO MONITORIZADO" + navigator.userAgent;
      break;
    case "5":
      respuesta.innerText = "BORRANDO DISCO..., POR FAVOR ESPERE";
      break;
    default:
        respuesta.innerText = "ELIJA LAS OPCIONES DEL 1 AL 5";
      break;
  }
}
