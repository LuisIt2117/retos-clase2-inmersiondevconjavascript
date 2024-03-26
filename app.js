//Variables
var numeroMaximoDeIntentos = 10;
var numeroSecreto = parseInt(Math.random()*1000+1);
alert(numeroSecreto);
var contador = 1;

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

