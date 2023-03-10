//una stringa può essere considerata come un array di caratteri
var parola = "Ciao";

//METODI PER LA RICERCA
//indexOf ci dice in  quale indice è presente quella lettera o quella sequenza di lettere
var ricerca1 = parola.indexOf("i"); //->1
console.log(ricerca1);

var saluto = "Ciao Dario, come stai ?";
console.log(saluto.indexOf("Dario"));
console.log(saluto.indexOf("a")); //prende la prima occorrenza
console.log(saluto.lastIndexOf("a")); //prende l'ultima occorrenza

//Misuriamo una stringa
var numCaratteri = saluto.length;
console.log(numCaratteri);

var frase = "Oggi è una bella giornata";
var ricerca2 = frase.indexOf("bella");
console.log("La parola bella è all'indice " + ricerca2);
console.log(frase.indexOf("ella"));


var ricerca3 = frase.indexOf("brutta"); //---> -1 poiché non la trova.
console.log("La parola brutta si trova all'indice " + ricerca3);

// Funziona anche negli array
var colori = ["giallo", "blue", "verde"];
console.log(colori.indexOf('oro')); //-1

//il metodo includes restituisce un boolean
console.log(frase.includes("bella"));
console.log(frase.includes("brutta"));

//Metodi per il taglio 
var parola2 = "Programmazione";
//substring(indiceInizio, indiceFine) estrae qualcosa
var taglio1 = parola2.substring(2,5); //-> ogr
console.log(taglio1);

var taglio2 = parola2.slice(2,5); //->ogr
console.log(taglio2);

//split taglia in un punto e trasforma in array
//split taglia ogni volta che trova il pattern
var taglio3 = parola2.split("a");
console.log(taglio3);

var nomeFile = "appunti.pdf";
var taglio4 = nomeFile.split(".");
console.log(taglio4);
var estensioneFile = taglio4[1];
console.log("Il file ha la seguiente estensione: " + estensioneFile);

var parola3 = "Mennillo";
//voglio invertire la parola
var taglio5 = parola3.split(""); //passando le "" vuota taglia ogni carattere
console.log(taglio5);
var giroArray = taglio5.reverse();
console.log(giroArray);
var ricuci = giroArray.join("");
console.log(ricuci);

var parola4 = "Bottiglia d'acqua";
console.log(parola4.split("").reverse().join(""));

var frase2 = "I topi non avevano nipoti";
console.log(frase2.split("").reverse().join(""));

var mioFile = "marca da bollo.pdf";
//voglio sostituire gli spazi con underscore
console.log(mioFile.split(" ").join("_"));

console.log(mioFile.toUpperCase());

//metodo Trim() per tagliare gli spazi
var nomeUtente = "     Dario     Mennillo         ";

console.log(nomeUtente);

function separa() {
    var nomeArray = nomeUtente.trim().split(" ");
    console.log(nomeArray);
    var nuovoNome = ""
    for(var i = 0; i < nomeArray.length; i++){
        if(nomeArray[i] != ""){
            nuovoNome += nomeArray[i] + " ";
        }
    }
    console.log(nuovoNome);
    return nuovoNome;
}

separa()




