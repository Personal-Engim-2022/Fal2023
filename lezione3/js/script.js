var nomeCorso = "Fal Programmatore";

//voglio scrivere dentro il demo. 
//Prendo il demo 
var demo = document.getElementById("demo");
//Scrivo nel demo 
demo.innerHTML = nomeCorso;

//Prendo il div feed
var feed = document.getElementById("feed");

function saluta(){
    //recupero il nome utente
    var nome = document.getElementById("nome").value;
    //scrivo il saluto nel feed
    feed.innerHTML = "Ciao " + nome;     
}

