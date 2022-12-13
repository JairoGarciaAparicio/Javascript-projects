function adivina() {
    var adivina = 0;
    var intentos = 5;
    var numero = parseInt(Math.random() * 50);
    do {
        adivina=parseInt(window.prompt("Introduce un nº del 1 al 50"));
        if(adivina>numero){
            alert("Te has pasado, te quedan " + (--intentos) + "intentos");
        }else if(adivina<numero){
            alert("Te has quedado corto, te quedan " + (--intentos) + "intentos");
        }
    }
    while (adivina != numero && intentos > 0 );

    if(numero == adivina){
        alert("enhorabuena, has acertado");
    }else{
        alert("errrrrrrrorrrr!!Se agotaron los intentos")
    }

    if(adivina <0 || adivina > 50){
        alert("errrrrrrrorrrr!!del 1 al 50")
    }


}

