var utenti = [
    "Dario",
    "Paola",
    "Marco",
    "Anna"
];

var password = [
    "admin",
    "basic",
    "pippo",
    "pluto"
];

//per recuperare ciò che scrive l'utente
var btn = document.getElementById("btn");
var demo = document.getElementById("demo");

function controlla() {
   //1 Step: recupero quello che ha scritto l'utente
var nomeUtente = document.getElementById("nomeUtente").value;
var passUtente = document.getElementById("passUtente").value;

if(nomeUtente.trim() == "" || passUtente.trim() == ""){
    demo.innerHTML = "Devi inserire nome e pass per controllare.";

}else if(utenti.indexOf(nomeUtente.trim()) != -1 && password.indexOf(passUtente.trim()) != -1){ //mi permette di capire se l'utente esiste nell'array   
    //controlla la posizione di username e password, se corrisponde allora funziona
    var posizioneUsername = utenti.indexOf(nomeUtente);
    var posizionePassword = password.indexOf(passUtente);

    if(posizionePassword != posizioneUsername){
        demo.innerHTML = "Mi spiace, credenziali errate";
    }else{
        demo.innerHTML = "Ciao " + nomeUtente + " sei nei nostri database";
    }

}else{
    demo.innerHTML = "Ciao, mi dispiace ma NON sei nei nostri database"
}

}

//con onclick faccio partire la funzione nel momento in cui clicco sul pulsante
btn.onclick = controlla;