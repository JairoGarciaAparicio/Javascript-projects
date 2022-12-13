var n1 = parseInt(window.prompt("Introduce el primer número: "));
var n2 = parseInt(window.prompt("Introduce el primer número: "));

function sumar(){
    resultado = n1 + n2;
    swal("La suma es: " + resultado);

}
function restar(){
    swal("La resta es: " + (n1-n2));
    
}
function multiplicar(){
    let resultado = n1 * n2;
    swal("La multiplicacion es: " + resultado);
    
}
function dividir(){
    let resultado = n1 / n2;
    swal("La division es: " + resultado);
    
}