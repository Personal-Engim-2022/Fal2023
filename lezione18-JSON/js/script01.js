var mioJSON = '{"nome": "Dario", "cognome": "Mennillo"}';

console.log(mioJSON); 
console.log(typeof mioJSON); 
console.log(mioJSON.nome); //questo è inutile perché mioJSON è una semplice stringa

//trasformo la stringa mioJSON in un oggetto JS
//Il metodo parse() trasforma una stringa in un object
var mioOBJ = JSON.parse(mioJSON);

console.log(mioOBJ);
console.log(typeof mioOBJ);
console.log(mioOBJ.nome);
console.log(mioOBJ.cognome);


//Faccio il passaggio opposto, quindi da oggetto a string
var studenteOBJ = {
    nome: "Pippo",
    cognome: "Rossi"
}

//il metodo stringify() prende un oggetto e lo trasforma in stringa così da poterlo inviare ad una qualsiasi API
var studenteJSON = JSON.stringify(studenteOBJ);
console.log(studenteJSON);

var mioArr = [
    //primo oggetto
    {
        nome: "Anna",
        cognome: "Bianchi",
        materie: [
            {
                codMateria: "JS23",
                descrizione: "Javascript Pratica"
            },
            {
                codMateria: "An23",
                descrizione: "Angular 4+",
                crediti: 10
            }
        ]
    },
    //secondo oggetto
    {
        nome: "Marco",
        cogome: "Verdi"
    }
];


var mioArrJson = JSON.stringify(mioArr);
console.log(mioArrJson);

//Crea un array di studenti con le sequenti proprietà: 
/**
 * nome: string
 * cognome: string
 * zaino : array[ object {
 *  nome: "smartphone",
 *  modello: "",
 *  descrizione: ""
 * }]
 */