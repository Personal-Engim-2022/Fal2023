//VideoGame

var sogliaPunti = 50;
var sogliaSkill = 25;

//il giocatore per superare il livello deve avere almeno 50 punti e 25 puntiSkill, cioè entrambi i punteggi devono superare la soglia

var puntiUser = 45;
var skillUser = 24;

if(puntiUser >= sogliaPunti && skillUser >= sogliaSkill ){

    console.log("Bravo, hai superato il livello !!");

}else if(puntiUser < sogliaPunti && skillUser >= sogliaSkill){

    console.log("Il tuo punteggio è sotto la soglia, le skill vanno bene. Non hai superato il livello");
    

}else if(puntiUser >= sogliaPunti && skillUser < sogliaSkill){

    console.log("Le skill sono sotto la soglia, il punteggio va bene. Non hai superato il livello");

}else{
    console.log("Non sei buono, cambia videogame !!");
}