//l'array si definisce attraverso le parentesi quadre. Ogni elemento è separato da virgole
var frutta = ["arancia", "mandarino", "kiwi", "mela", "banana"];

//stampo l'array, in console
console.log(frutta);

//stampo un elemento alla volta
console.log( frutta[0] ); //-> arancia

console.log( frutta[3] ); //-> mela

console.log( frutta[6] ); //-> undefined

//stampo la lunghezza dell'array
console.log( frutta.length ) //-> 4

//stampo i singoli elementi con un ciclo FOR == leggere l'array
for(var i = 0; i < frutta.length; i++){
    console.log("Frutto numero " + (i + 1) + " " + frutta[i] );
}

//stampo nella pagina 
var listaFrutta = document.getElementById('listaFrutta');

for(var i = 0; i < frutta.length; i++){
    listaFrutta.innerHTML += "<li>" + frutta[i] + "</li>";
}
