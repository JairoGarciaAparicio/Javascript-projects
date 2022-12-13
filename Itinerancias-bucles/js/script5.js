var telefonos = ["+34-2-62010116", "+34-2-620101163", "+34-2-620101164", "+34-2-620101165"
, "+34-2-620101166", "+54-2-620101163", "+56-2-620101122", "+34-2-62010116"];

/* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" la primera estructura con letras o numeros, combinados
, una arroba y seguidamente letras y numeros con un. y al menos 2 caracteres = Correo electronica>
pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" Minimo ocho caracteres, contenga alguna mayuscula,
que contenga alguna minuscula y al menos un digito */   

var expresion=/^\+34(-2-|2)\d{8}$/;
for (var tlf of telefonos){
        var fila="<tr>";
        fila+="<td>" + tlf;
        fila+="<td>" + expresion.test(tlf)+"</td>"; 
        fila+="<tr>";
        document.getElementById('tabla').innerHTML+=fila;

}