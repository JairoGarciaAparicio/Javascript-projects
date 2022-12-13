var provincias = ['Madrid', 'Valencia', 'Sevilla', 'Barcelona', 'Teruel'];

for (var viaje = 0; viaje < provincias.length; viaje++) {

    var opt = new Option(provincias[viaje], viaje);
    document.getElementById('provincias').options[viaje + 1] = opt;
}

function selecciona() {

    var prov = document.getElementById('provincias').options[
        document.getElementById('provincias').selectedIndex].text;
    
    swal("Has seleccionado la provincia: " + prov);

}