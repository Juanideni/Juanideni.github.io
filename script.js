

function mostrarJuego() {

document.getElementById("juego")
var miEdad = 20;
var numero; 
var cantidadIntentos = 0;
var nombre = prompt("¿Cual es tu nombre?");

do {

    numero = prompt(nombre+" ,ingresa un numero el cual creas que es mi edad. Recuerda que tienes solo 5 intentos");
    
    cantidadIntentos++;

    

    if (numero != miEdad)
    {
        
        alert("Fallaste, ese fue tu intento numero "+cantidadIntentos);

        if (numero > miEdad && cantidadIntentos >= 2)
        {
            alert("PISTA- Mi edad es menor que "+ numero);
        }
        if (numero < miEdad && cantidadIntentos >= 2)
        {
            alert ("PISTA - Mi edad es mayor que "+ numero)
        }
        
    }

    if (numero == miEdad)
    {
        alert("Acertaste! Lo resolviste en "+cantidadIntentos+" intentos");
        break;
    }

    if (cantidadIntentos >= 5)
    {
        alert("Fallaste, mi edad es "+miEdad);
        break;
    }

} while(cantidadIntentos < 5 || numero != miEdad )

}