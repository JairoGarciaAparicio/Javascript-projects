function calcular() {
  var salario = parseFloat(window.prompt("Introduce su salario: "));
  var sexo = parseFloat(window.prompt("Indica su genero: "));
  var hijxs = parseFloat(window.prompt("Indique su numero de hijos: "));
  var salarioFin = 0;

  if (salario <= 15000) {
    salarioFin = salario + ((salario * 1.05)/100);
  } else if (salario > 15000) {
    salarioFin = salario + ((salario * 0.5)/100);
  }

  if (sexo == "femenino") {
    salarioFin += ((salario * 1)/100);
  }


  for(var i = 0; i < hijxs; i++) {
    salarioFin =  salario + ((salario * 0.02) * hijxs); 
  }


  document.getElementById("resultado").innerHTML =
    "Tu salario es: " + salarioFin.toFixed(2) + "€";
}
