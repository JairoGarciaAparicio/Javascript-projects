function presiona() {
  var fecha = new Date();
  var dia = fecha.getDay()-1;
  switch (dia) {
    case 0:
      menu = "Cocido Madrileño";
      break;

    case 1:
      menu = "Cerrado por descanso";
      break;

    case 2:
      menu = "Penne a la Siciliana";
      break;

    case 3:
      menu = "Calamares del Cantábrico";
      break;

    case 4:
      menu = "Lubina a la sal";
      break;

    case 5:
      menu = "Judiones a la vasca";
      break;

    case 6:
      menu = "Sartén de espárragos";
      break;

    default:
      menu = "Inténtelo de nuevo";
      break;
  }
  document.getElementById('resultado').innerText='El menu del dia es: ' + menu;
}
