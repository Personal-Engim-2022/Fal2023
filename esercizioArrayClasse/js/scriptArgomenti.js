var argomenti = [
    "Variabili",
    "Funzioni",
    "Array",
    "Ciclo For"
];

//ul lista Argomentis
var listaArgomenti = document.getElementById("listaArgomenti");
    
function stampaArg(){
    listaArgomenti.innerHTML = "";

    for(var i = 0; i < argomenti.length; i++){
        listaArgomenti.innerHTML += "<li>" + argomenti[i] + "</li>";
    }
}