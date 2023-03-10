var studenti = [
    "Filippo",
    "Stefano",
    "Ayouba",
    "Cinzia",
    "Cesare"
];

//prendo ul
var listaStudenti = document.getElementById("listaStudenti"); //ul

//prendo p
var numStudenti = document.getElementById("numStudenti");

//stampo gli studenti nella lista
for(var i = 0; i < studenti.length; i++){
    listaStudenti.innerHTML += "<li>" + studenti[i] + "</li>";
}

numStudenti.innerHTML = "Totale studenti " + studenti.length;

function aggiungi(){
    var inputNome = document.getElementById('inputNome').value;
   
    studenti.push(inputNome);
    
    listaStudenti.innerHTML += "<li>" + inputNome + "</li>";
    
    console.log(studenti);
}