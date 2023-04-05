var btn = document.querySelector("#btn");

//Metodo post per registrare un oggetto
const URL = "https://reqres.in/api/users";

//l'utente è l'oggetto che invieremo alla API
var utente = {
    nome: "Anna",
    cognome: "Bianchi",
    eta: 25,
    materia: "Angular"
}

//questa funzione esegue la post
function caricaDati() {
    fetch(URL,{
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(utente)
    })
    .then(data =>{return data.json()})
    .then(response => {
        console.log("Registrazione avvenuta");
        console.log(response);
    })
}

btn.onclick = caricaDati;



