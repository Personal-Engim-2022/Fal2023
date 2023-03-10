//carico un array con un ciclo for
//con dei numeri in sequenza
var arrayNumeri = [];

for(var i = 0 ; i < 10; i++){
    //inserisco i numeri nell'array
    arrayNumeri.push(i + 3);
}

console.log(arrayNumeri);

//controllo i multipli di 3
for(var i = 0; i < arrayNumeri.length; i++){
    if(arrayNumeri[i] % 3 == 0){
        console.log(arrayNumeri[i] + " è multiplo di 3");
    }
}

//MAth

var numeroArrotondatoEccesso = Math.ceil(5.11123);
console.log(numeroArrotondatoEccesso);

var numeroArrotondatoDifetto = Math.floor(5.11123);
console.log(numeroArrotondatoDifetto);
