function funcionesHora(){

var fecha = new Date();
    document.getElementById('resultado').innerHTML=
    "La hora es: " + fecha.toLocaleTimeString()+"<br>"
}