//Variables
var numeroMaximoDeIntentos = 10;


var numeroSecreto = parseInt(Math.random()*1000+1);
var contador = 1;

alert(`Tienes ${numeroMaximoDeIntentos} intentos para adivinar el numero secreto \n¡Suerte!`);

while(numeroSecreto != numeroDigitado){

  var numeroDigitado = prompt("Ingrese un número entre 1 y 1000");

  if(numeroSecreto == numeroDigitado){
    alert(`Acertarse el número \nLo hiciste en ${contador} ${contador == 1 ? "vez" : "Veces"} `);
  } else if(numeroSecreto > numeroDigitado){
    alert(`Te equivocaste el numero secreto es mayor que ${numeroDigitado}`);
  } else if(numeroSecreto < numeroDigitado){
    alert(`Te equivocaste el numero secreto es menor que ${numeroDigitado}`);
  }
  
  contador ++;
  
    if(contador == numeroMaximoDeIntentos + 1){      
      break
    }
}

