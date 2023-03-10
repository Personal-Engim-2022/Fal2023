//Array sono contenitori di elementi simili tra loro
//array di stringhe
var colori = ["bianco", "verde", "blu", "rosso"];

//array di numeri
var voti = [30, 21, 25, 12, 18, 25, 25, 25];

//array di boolean
var presenze = [true, false, true, true, false];

//array misto, NO, NON VA FATTO
var persona = ["Dario", "Mennillo", 33, true, "Javascript"];

//stampo qualche colore, in console
//prendo l'elemento di indice 0 nell'array colori
var primoColore = colori[0];
console.log(primoColore);

var terzoColore = colori[2];
console.log(terzoColore);

//voglio sapere il numero di elementi nell'array colori
//cioè la dimensione dell'array
//uso la proprietà length
var numeroColori = colori.length;
console.log("Nell'array ci sono " + numeroColori + " colori");

//stampo in console tutto l'array
console.log(colori);

//stampo i colori nella pagina
var demo = document.getElementById("demo");

// demo.innerHTML = colori;

//stampo un colore alla volta
// demo.innerHTML = "<li>" + colori[0] + "</li>"; 
// demo.innerHTML += "<li>" + colori[1] + "</li>";
// demo.innerHTML += "<li>" + colori[2] + "</li>";
// demo.innerHTML += "<li>" + colori[3] + "</li>";

//Uso un CICLO FOR
for(var i = 0; i < colori.length; i++){
    demo.innerHTML += "<li>" + colori[i] + "</li>";
}

