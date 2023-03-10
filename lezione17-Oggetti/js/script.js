//Funzioni Costruttore
//Utili nel caso in cui vogliamo creare più oggetti dello stesso tipo
//creo lo "stampo" dello studente

function Studente(nome,cognome,matricola) {
  this.nome = nome;
  this.cognome = cognome;
  this.matricola = matricola;

  this.presentati = function() {
      var stringaPresentazione = "";
      
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

for(var i = 0; i < classeFal.length; i++){
    elenco.innerHTML += "<li>" + classeFal[i].nome + " " + classeFal[i].cognome + " " + classeFal[i].matricola + "</li>";
}


//implementare il metodo presentati e sfruttarlo nel ciclo for
