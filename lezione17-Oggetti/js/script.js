//Funzioni Costruttore
//Utili nel caso in cui vogliamo creare più oggetti dello stesso tipo
//creo lo "stampo" dello studente

class Studente{
    nome;
    cognome;

    constructor(nome, cognome, matricola){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    getNome(){
        return this.nome;
    }
    setNome(nuovoNome){
        this.nome = nuovoNome;
    }
}

// var mioStudente = new Studente("Dario", "Mennillo", 1);
// var nomeStudente = mioStudente.getNome();
// console.log(nomeStudente);

// mioStudente.setNome("Maria");
// console.log(mioStudente.nome);

function Studente(nome,cognome,matricola) {
  this.nome = nome;
  this.cognome = cognome;
  this.matricola = matricola;

  this.presentati = function() {
      var stringaPresentazione = "Ciao mi chiamo " + this.nome + " " + this.cognome + " matr: " + this.matricola;
      
      return stringaPresentazione
  }
}

//quando voglio definire uno studente richiamerò la funzione costruttore

var studente1 = new Studente("Pippo", "De Franco", 1);
var studente2 = new Studente("Anna", "Bianchi", 2);

var classeFal = [
    new Studente("Filippo", "Albano", 1),
    new Studente("Cinzia", "Bellinetti", 2),
    new Studente("Clemente", "Carrella", 3),
    new Studente("Stefano", "Debernardi", 4),
    new Studente("Ayouba", "Doucoure", 5),
    new Studente("Luca", "Fanari", 6),
    new Studente("Cesare", "Prota", 7),
    new Studente("Mahdi", "Sarhan", 8),
    new Studente("Paolo", "Fassin", 9),
];

var elenco = document.querySelector("#elenco");

// for(var i = 0; i < classeFal.length; i++){
//     elenco.innerHTML += "<li>" + classeFal[i].nome + " " + classeFal[i].cognome + " " + classeFal[i].matricola + "</li>";
// }

// for(var i = 0; i < classeFal.length; i++){
//     elenco.innerHTML += "<li>" + classeFal[i].presentati() + "</li>";
// }

//FOREACH - da applica solo ed esclusivamente sugli array
classeFal.forEach( (studente) => {
    elenco.innerHTML += "<li>" + studente.presentati() + "</li>";
})


//Voglio rendere tutti gli li di colore blue

var lis = document.querySelectorAll("li");

//l'operatore spread ... trasforma, in questo caso gli lis in un array
[...lis].forEach(singoloLi => {
    singoloLi.setAttribute("class", "txtBlue");
})

// for(var i = 0 ; i < lis.length; i++){
//     lis[i].setAttribute("class", "txtBlue");
// }
//implementare il metodo presentati e sfruttarlo nel ciclo for


// var somma = function (a,b) {
//     console.log(a+b);
// }

// somma(3,4);

// var somma2 = (a,b) => { 
//     console.log(a+b);
// }

// (function () {
    
// })

