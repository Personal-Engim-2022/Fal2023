//Operatori di confronto

var condizione = (2 < 3); //true
console.log(condizione);

var condizione2 = (2 == 3); //false
console.log(condizione2);

var condizione3 = (2 == "2"); //true
console.log(condizione3);

var condizione4 = (2==="2"); //false
console.log(condizione4);

var condizione5 = ("ciao" == "Ciao");
console.log(condizione5);

var condizione6 = ("ciao" != "Ciao");
console.log(condizione6);

var condizione7 = ("ciao" !== "Ciao");
console.log(condizione7);

var controlloTipo = (typeof 3 == "number");
console.log(controlloTipo);

var ora = 10.75;

if(ora > 10.5){
    console.log("ANDIAMO IN PAUSA");
}

