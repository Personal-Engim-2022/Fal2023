
const URL = "http://localhost:3000/studenti";

//GET degli studenti
fetch(URL)
.then(data => {return data.json()})
.then(response => {
    console.log(response);
});

const URLUser = "http://localhost:3000/utente";
fetch(URLUser)
.then(data => {return data.json()})
.then(response => {
    console.log(response);
}); 

//POST di un nuovo studente 

function caricaNuovoStud() {
    const URLDoc = "http://localhost:3000/docenti";
    
    var nuovoDocente = {
        nome: "Alfonso",
        cognome: "Longo"
    };

    fetch(URLDoc, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(nuovoDocente)
    })
    .then(data=>{return data.json()})
    .then(response => {
        console.log(response);
    })
}

var btn = document.querySelector("#btn");
btn.onclick = caricaNuovoStud;


