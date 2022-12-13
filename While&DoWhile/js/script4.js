function acceso(){
    var clave="hello";
    console.log(clave);
    var intentos = false;
    var cont=0;
    while(cont < 3 && intentos == 0){
        var claveAcceso = window.prompt("Introduce la clave: ");
        if(claveAcceso == clave){
            intentos = true;
            document.getElementById('resultado').innerText="clave correcta!"
        }
        cont++;
    }
    if(!intentos){
        document.getElementById('resultado').innerText="Error, contacte con el DPTO de Sistemas"
    }


}