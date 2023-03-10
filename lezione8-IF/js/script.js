///Per adesso valuto i punteggi in console

var giocatore1 = 120;
var giocatore2 = 60;

// if(giocatore1 > giocatore2){
//     console.log("Il vincitore è giocatore1 con " + giocatore1 + " punti");
// }

// if(giocatore2 > giocatore1){
//     console.log("Il vincitore è giocatore2 con " + giocatore2 + " punti");
// }

// if(giocatore1 == giocatore2){
//     console.log("La partita finisce pari con " + giocatore1 + " punti");
// }

// if(giocatore1 > giocatore2){
//     console.log("Il vincitore è giocatore1 con " + giocatore1 + " punti");
// } else if(giocatore1 < giocatore2){
//     console.log("Il vincitore è giocatore2 con " + giocatore2 + " punti");
// }else{
//     console.log("La partita finice pari");
// }

// if(giocatore1 == (2 * giocatore2)){
//     console.log("Il giocatore1 ha doppiato il giocatore2");
// }

//stampa i punteggi nel div feedPunti. Cliccando sul tasto valuta verifica chi tra i due giocatori vince. Stampa il risultato della vittoria nel div demo.

var feedPunti = document.getElementById('feedPunti');
var demo = document.getElementById('demo');

feedPunti.innerHTML = "Giocatore 1 - " + giocatore1 + " punti <br>";
feedPunti.innerHTML += "Giocatore 2 - " + giocatore2 + " punti";

function  valuta(){
    if(giocatore1 > giocatore2){
        demo.innerHTML = ("Il vincitore è giocatore1 con " + giocatore1 + " punti");
    } else if(giocatore1 < giocatore2){
        demo.innerHTML = ("Il vincitore è giocatore2 con " + giocatore2 + " punti");
    }else{
        demo.innerHTML = ("La partita finice pari");
    }
}

