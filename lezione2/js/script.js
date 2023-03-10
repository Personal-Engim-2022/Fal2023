console.log("Script collegato");

//matematica 
var num1 = 12;
var num2 = 23;

//creo le 4 operazioni e stampo il risultato in console
var somma = num1 + num2; 
var somma = num1 + num2; 
var differenza = num1 - num2;
var moltiplicazione = num1 * num2;
var divisione = num1 / num2;

console.log("il risultato della somma è: " + somma);
console.log("il risultato della differenza è: " + differenza);
console.log("il risultato della moltiplicazione è: " + moltiplicazione);
console.log("il risultato della divisione è: " + divisione);

//vado a prendere i contenitori div
var numeri = document.getElementById("numeri");
var risultati = document.getElementById("risultati");

//vado a scrivere nei contenitori
numeri.innerHTML = "I numeri per fare i calcoli sono: " + num1 + " e " + num2;

// risultati.innerHTML = "La somma vale: " + somma 
// + "<br> La diferenza vale: " + differenza
// +"<br> La moltiplicazione vale: " + moltiplicazione 
// +"<br> La divisione vale: " + divisione;
    

//+= operatore di self increment: posso aggiungere un "pezzo" alla mia variabile esistente
risultati.innerHTML = "La somma vale: " + somma + " <br>";
risultati.innerHTML += "La differenza vale: " + differenza + "<br>";
risultati.innerHTML += "La moltiplicazione vale: " + moltiplicazione +"<br>";
risultati.innerHTML += "La divisione vale: " + divisione + "<br>";

//oggi vale
var miaEta = 33;
var aggiunta = 5;
//tra un anno
miaEta += aggiunta;

console.log(miaEta);




