//resto della divisione %

// var restoDiv = 42 % 2;  //--> 0 == PARI
// console.log(restoDiv);

// var resDiv2 = 7 % 2; //---> 1 == DISPARI
// console.log(resDiv2);

//dato un array di numeri verifica quelli pari e quelli dispari

var numeri = [2,6,7,19,3,5,24, 15];

//PARI E DISPARI
// for(var i = 0; i < numeri.length; i++){
//     if(numeri[i] % 2 == 0){
//         console.log(numeri[i] + " - PARI");
//     }else{
//         console.log(numeri[i] + " - DISPARI");
//     }
// }

//MULTIPLI DI 3 e DI 2
// for(var i = 0; i < numeri.length; i++){
//     if(numeri[i] % 2 == 0 && numeri[i] % 3 == 0){
//         console.log(numeri[i] + " multiplo di 2 e di 3");
//     }else if(numeri[i] % 2 == 0){
//         console.log(numeri[i] + " multiplo di 2");
//     }else if(numeri[i] % 3 == 0){
//         console.log(numeri[i] + " multiplo di 3");
//     }else{
//         console.log(numeri[i]);
//     }
// }

var listaMultipli = document.getElementById("listaMultipli"); //<ul> </ul>

//costruiamo un array di 100 numeri 
var numeri100 = [];

//carico 100 numeri nell'array
for(let i = 1; i <= 100; i++){
    numeri100.push(i);
}

//prendo i paragrafi
var sumMult3 = document.getElementById("sumMult3");
var sumMult5 = document.getElementById("sumMult5");
var sumMult35 = document.getElementById("sumMult35");

var somme3 = 0;
var somme5 = 0;
var somme35 = 0;

//leggo l'array di numeri 
for(let i = 0; i < numeri100.length; i++){
    //con un if controllo un numero alla volta
    if(numeri100[i] % 3 == 0 && numeri100[i] % 5 == 0){
        console.log(numeri100[i] + " - Ciao, mondo");
        somme3 += numeri100[i];
        somme5 += numeri100[i];
        somme35 += numeri100[i];
        listaMultipli.innerHTML += "<li>" + numeri100[i] + " - Ciao, mondo </li>";

    }else if(numeri100[i] % 3 == 0){
        console.log(numeri100[i] +  " - Ciao");
        somme3+=numeri100[i];
        listaMultipli.innerHTML += "<li>" +numeri100[i] +  " - Ciao </li>";
        
    }else if(numeri100[i] % 5 == 0){
        console.log(numeri100[i] + " - Mondo");
        somme5+= numeri100[i]
        listaMultipli.innerHTML += "<li>"+numeri100[i] + " - Mondo </li>";

    }else{
        console.log(numeri100[i]);
        listaMultipli.innerHTML += "<li>" +numeri100[i]+"</li>"; 
    }
}

sumMult3.innerHTML = "La somma dei multipli di 3 è " + somme3;
sumMult5.innerHTML = "La somma dei multipli di 5 è " + somme5;
sumMult35.innerHTML = "La somma dei multipli solo di 3 e di 5 è  " + somme35;
