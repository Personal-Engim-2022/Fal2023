console.log("Recap dopo le vacanze");

//variabili globali
var nome = "Dario";
var cognome = "Mennillo";
var annoAttuale = 2023;

//commento
console.log("Ciao " + nome + " " + cognome);
console.log("Siamo nel nuovo anno " + annoAttuale);

// Commento automatico ctrl + ù
//scrivo nella pagina 
var demo = document.getElementById("demo");
demo.innerHTML = "<h2>Ciao " + nome + " " + cognome + "</h2>";
demo.innerHTML += "<p>Siamo nel nuovo anno " + annoAttuale + "</p>";

function stampa(){
    //variabili locali vivono solo ed esclusivamente nella funzione. All'esterno non so cosa sono
    var corso = "Fal - Aiutante Programmatore";
    var materia = "Javascript";

    demo.innerHTML += "<p>Stai frequentando il corso di " + corso + "</p>";
    demo.innerHTML += "<p>Oggi stiamo studiando " + materia + "</p>"; 
}

var lista = document.getElementById("lista");
var imgPiatto = document.getElementById("imgPiatto");

//al click sul pulsante stampa nella lista un elenco di cose che hai mangiato durante le vacanze di Natale
// function stampaCoseDaMangiare(){
//     var antipasto = "Polpo all'insalata";
//     var primo = "Calamarata con Scampi";
//     var secondo = "Ricciola al forno";

//     //riempio una listacon cose da mangiare
//     lista.innerHTML = "<li>" + antipasto + "</li>";
//     lista.innerHTML += "<li>" + primo + "</li>";
//     lista.innerHTML += "<li>" + secondo + "</li>";
    
//     //cambio l'attributo src dell'immagine
//     imgPiatto.src = "./img/calamarata-con-scampi.jpg";
// }


function stampaCoseDaMangiare(){
    var portate = [
        "Polpo all'insalata", 
        "Calamarata con Scampi", 
        "Ricciola al forno", 
        "Frittura di gamberi e totati", 
        "Struffoli",
        "Panettone",
        "Limonecello",
        "Caffè",
        "Noccioline",
        "Amaro "
    ];

    // lista.innerHTML += "<li>" + portate[0] + "</li>";
    // lista.innerHTML += "<li>" + portate[1] + "</li>";
    // lista.innerHTML += "<li>" + portate[2] + "</li>";
    // lista.innerHTML += "<li>" + portate[3] + "</li>";
    // lista.innerHTML += "<li>" + portate[4] + "</li>";
    var i = 0;
    for(i = 0; i < portate.length; i++){
        lista.innerHTML += "<li>" + portate[i] + "</li>";
    }

    // portate.forEach(piatto => {
    //     lista.innerHTML += "<li>" + piatto + "</li>";
    // })
}

