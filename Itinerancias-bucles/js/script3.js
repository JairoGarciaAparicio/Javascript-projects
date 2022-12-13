function tablaMultiplicar() {   
var number = parseInt(num.value);
  var tabla = "";
  for (var i = 1; i <= 10; i++) {
    tabla += number + "x" + i + "=" + number * i + "<br>";
    console.log(tabla);
  }
  document.getElementById("resultado").innerHTML = (tabla);
}
