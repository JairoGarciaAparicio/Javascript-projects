function descuento1(){    
  var opcion1 = document.getElementById("opcion1").value; //recogemos la variable
 
  var respuesta1 = document.getElementById("resultado1");// soltamos la variable

  switch (opcion1) {
    case "cine":
      respuesta1.innerText = "Enhorabuena!!\nTienes 15% DE DTO.\nEl precio final es de 7.56€";
      break;
    default:
        respuesta1.innerText = "Cupón erróneo, vuelva a intentarlo...";
      break;
  }
  
}

function descuento2(){
    var opcion2 = document.getElementById("opcion2").value; //recogemos la variable
    var respuesta2 = document.getElementById("resultado2");// soltamos la variable
    switch (opcion2) {
        case "callos":
          respuesta2.innerText = "Enhorabuena!!\nTienes 25% DE DTO.\nEl precio final es de 33,75€";
          break;
        default:
            respuesta2.innerText = "Cupón erróneo, vuelva a intentarlo...";
          break;
      }
}

function descuento3(){
var opcion3 = document.getElementById("opcion3").value; //recogemos la variable
var respuesta3 = document.getElementById("resultado3");// soltamos la variable
switch (opcion3) {
    case "dientes":
      respuesta3.innerText = "Enhorabuena!!\nTienes 20% DE DTO.\nEl precio final es de 68€";
      break;
    default:
        respuesta3.innerText = "Cupón erróneo, vuelva a intentarlo...";
      break;
  }
}