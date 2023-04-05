var formAgg = document.querySelector("#formAgg");

function aggiungi(){
    let docente = document.querySelector("#docente").value;
    let insegnamento = document.querySelector("#materia").value;
    let orario = document.querySelector("#orario").value;
    
    if(docente == "" || insegnamento == "" || orario == ""){
        
        alert("Qualcosa non è compilato nel form");
        //questo preventDefault blocca l'evento submit impedendo che venga lanciato il form 
        event.preventDefault();

    }else{
    
    var materia = {
        docente: docente,
        insegnamento: insegnamento,        
        orario: orario
    }
    
    fetch(URLMaterie,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(materia)
    }).then(res => {return res.json()})
    .then(res => {
        console.log("inserimento avvenuto");
    })
}

}

formAgg.addEventListener("submit", aggiungi);

