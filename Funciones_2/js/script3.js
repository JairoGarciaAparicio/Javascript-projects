function mensaje(){

    var claveAcceso=document.getElementById('clave').value;
    var emailAcceso=document.getElementById('email').value;
    document.getElementById('resultado').innerHTML=
    "Clave correcta: " + emailAcceso + " Pulse para iniciar";

}

function limpiar(){

    document.getElementById('resultado').innerHTML=" ";

}