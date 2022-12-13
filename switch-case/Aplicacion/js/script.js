var mapa;
function mostrarMapa() {
  //1.comporbar si el navegador y el dispositivo soportan los recursos de geolocalizacion
  if (navigator.geolocation) {
    //2.obtener la ubicacion
    navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
  } else {
    alert("Tu dispositivo o navegador no puede acceder a la localización");
  }

  //3.Generar opciones de la variable en nuestro mapa
  var opciones = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  //4.Asigno la variable mapa a su visualizacion
  mapa = new google.maps.Map(document.getElementById("resultado"),opciones);
}

function mostrarLocalizacion(posicion) {
  //5.Obtener las coordenadas y plasmarla
  var pos = new google.maps.LatLng(40.43499770440581, -3.6519925308452317);

  //6.Contenido del mapa, info que tiene el mapa.
  var info = new google.maps.InfoWindow({
    map: mapa,
    position: pos,
    content: "Estamos aqui"
  });

  //7.Mostrar marca de posicion
  var marker = new google.maps.Marker({
    position: { lat: 40.43499770440581, lng: -3.6519925308452317 },
    map: mapa,
    title: "Negocio?"
  });

  //8.Nos aseguramos de centrar el mapa,
  mapa.setCenter(pos);
}

function manejarError() {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Permiso denegado");
      break;
    case error.TIMEOUT:
      alert("TIempo de carga excesivo");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("No se detecta la ubicacion");
      break;
    case error.UNKNOWN_ERROR:
      alert("Error desconocido");
      break;
    //default:
      //alert("Error desconocido");
      //break;
  }
}
