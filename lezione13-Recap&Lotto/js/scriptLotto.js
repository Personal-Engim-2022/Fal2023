function estrai(numDaEstrarre) {
    
    var numEstratti = [];
    var contatore = 0;
    var doppioni = [];
    
    for(var i = 0; i < numDaEstrarre; i++){ //questo for estrae 5 numeri
        var numero = Math.ceil( Math.random() * 90); //num da 1 a 10
        if(numEstratti.includes(numero) ){
            //rifatti il giro
            i--;
            //aggiungi ai doppioni
            doppioni.push(numero);
        }else{
            numEstratti.push(numero);
        }
        contatore++;
    }
    console.log(numEstratti);
    console.log("Numero di giri: " + contatore);
    console.log("I doppioni sono: " + doppioni);

    return numEstratti;
}

function stampa() {
    demo.innerHTML = "";
    //prendo dall'input quanti numeri estrarre
    var numDaEstrarre = document.getElementById("numDaEstrarre").value;

    if(numDaEstrarre == "" || numDaEstrarre <= 0 || numDaEstrarre > 90 ){
        demo.innerHTML = "Caro utente, inserisci un numero corretto !";
    }else{
        //passo questo valore alla funzione estrai che mi restituisce un array
        var numEstratti = estrai(numDaEstrarre); 
        stampaBene(numEstratti);        
    }
}

/**
 * @param {Array} serieNumeri 
 * @output stampa su html
 */
function stampaBene(serieNumeri) {
    for(var i = 0; i < serieNumeri.length; i++){
        demo.innerHTML += "<div class='cerchio'>" + serieNumeri[i] + "</div>";
    }
}
var demo = document.getElementById("demo");
var btn = document.getElementById("btn");

btn.onclick = stampa;