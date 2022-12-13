var xrh;

function buscarPokemon() {

    //creamos el objeto, lo generamos y obtenemos la informacion de la URL
    xhr = new XMLHttpRequest();

    //Recuperar el nombre del pokemon introducido(por el propio usuario)
    var dato = nombre.value;
    //var dato = document.getElementById('nombre').value;

    //1º preparamos la peticion
    xhr.open("GET", "Https://pokeapi.co/api/v2/pokemon/" + dato, true);

    //2º Desarrollamos la respuesta, ene ste caso en formato json
    xhr.setRequestHeader("accept", "application/json");

    //3ª Informar y detectar la funcion que procesa la respuesta
    xhr.onreadystatechange = procesarRespuesta;

    //4ª Enviar la petición
    xhr.send();

    //5ª Gestión de error
    xhr.onerror = procesarRespuesta;

}

function procesarRespuesta() {
    //Sólo habrá procesamiento de respuesta cuando hayamos recibido toda la info.
    if (xhr.readyState = 4) {//Estado de conexion

        //var data = xhr.responseText;
        //var respuesta = JSON.parse(data);
        var respuesta = JSON.parse(xhr.responseText); //JSON.parse(cadena, variable), transformarlo a cadena string
        console.log(respuesta);
        document.getElementById('resultado').innerText =
            "Nombre: " + respuesta.name + "\n" +
            "Altura: " + respuesta.height + "\n" +
            "Peso: " + respuesta.weight + "\n" +
            "Habilidad: " + "\n"
        var habilidades = respuesta.abilities;
        for (i in habilidades) {
            document.getElementById("resultado").innerText +=
                "\t" + habilidades[i].ability.name + "\n";
        }

    }

}