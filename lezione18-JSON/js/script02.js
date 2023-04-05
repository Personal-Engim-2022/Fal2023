var titolo = document.querySelector("#titolo");
var locandina = document.querySelector("#locandina");
var btn = document.querySelector("#btn");

function cercaFilm() {

var campoTitolo = document.querySelector("#campoTitolo").value;

const URL = "http://www.omdbapi.com/?t="+campoTitolo+"&apikey=c30b10e8";

//per poter ottenere il dato deve eseguire una fetch
//fetch è un metodo asincrono

//con questa fetch applico il metodo GET
fetch(URL)
.then(data => {return data.json() }) //dentro il data.json() c'è il parse()
.then(response => {
    //response è l'oggetto JS già parserizzato
    console.log(response);
    titolo.innerHTML = response.Title;
    locandina.setAttribute("src", response.Poster);
});

}

btn.onclick = cercaFilm;