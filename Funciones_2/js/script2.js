function acceso(){
    var nombreAcceso=document.getElementById('nombre').value;
    var apellidoAcceso=document.getElementById('apellido').value;
    var correoAcceso=document.getElementById('email').value;

    document.getElementById('resultado').innerHTML=
    "AUTORIZADA A: " + nombreAcceso + " " + apellidoAcceso;
}