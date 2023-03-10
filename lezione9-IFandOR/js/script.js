var demo = document.getElementById("demo");

function generaBiglietto() {    
    var miaEta =Number(document.getElementById('eta').value);
    //questo che ho fatto sotto si chiama CASTING. Cioè forzo una variabile ad essere di tipo Boolean, poiché ricevendo una stringa la devo forzare ad essere un booleano.
    var tesseraSocio = document.getElementById('tesseraSocio').value;
    
    if(miaEta > 120 || miaEta < 0 || miaEta == ""){
        demo.innerHTML = "Caro utente, hai inserito un'età non valida";
    }else{
       
        demo.innerHTML = "<p>Caro utente la tua età è di " + miaEta + " anni </p>";
        
        
        if(miaEta <= 5){
            console.log("Biglietto gratuito");
            demo.innerHTML += "<p>Biglietto gratuito</p>";
        }else if( miaEta < 18 || miaEta >= 65){
            console.log("Biglietto scontato");
            demo.innerHTML +="<p>Biglietto Scontato</p>";
        }else{
            console.log("Biglietto Intero");
            demo.innerHTML += "<p>Biglietto Intero</p>";
        }
        
        //devo valutare il caso in cui lo spettatore ha più di 18 anni e ha la tessera
        if(miaEta >= 18 && tesseraSocio == "true"){
            console.log("Hai diritto ad uno sconto ulteriore del 10%");
            demo.innerHTML += "Hai diritto ad uno sconto ulteriore del 10%";
        }else{
            console.log("Non hai diritto ad uno sconto ulteriore");
            demo.innerHTML += "Non hai diritto ad uno sconto ulteriore"
        }
    }

}