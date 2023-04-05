var elenco = document.querySelector("#elenco");
const URL = "https://reqres.in/api/users";

fetch(URL)
.then(data => {return data.json()})
.then(response => {
    console.log(response);
    var contatti = response.data; //contatti è un array
    
    contatti.forEach(contatto => {
        elenco.innerHTML += creaCard(contatto.first_name, contatto.last_name, contatto.avatar, contatto.email);
    });
})


function creaCard(nome, cognome, immagine, email) {
    var card = `<div class="dimCard">
                    <p> ${nome} ${cognome} </p>
                    <img class="img" src="${immagine}">
                    <p> ${email} </p>
                </div>`;
                
    return card;    
}
