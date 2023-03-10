//quello che devo ottenere
//<img class="dimImg" src="./img/torino.jpg">
//deve essere inserito (con AppendChild) dentro la galleria

var btnAgg = document.querySelector("#btnAgg");
var percorsoImg = document.querySelector("#percorsoImg"); //qui c'è solo il nome della città
var galleria = document.querySelector("#galleria");

function aggiungiImg() {
    let nomeCitta = percorsoImg.value; //torino
    let path = "./img/"+nomeCitta+".jpg";
    
    //creo il tag img
    var img = document.createElement("img");
    
    //linko l'immagine al tag
   
    img.setAttribute("src", path);
    img.setAttribute("class", "dimImg");

    galleria.appendChild(img);
    }
    

    btnAgg.onclick = aggiungiImg;

   
