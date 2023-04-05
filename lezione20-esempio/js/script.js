var container = document.querySelector("#elPres");

var URLMaterie = "http://localhost:3000/materie";
var URLRef = "http://localhost:3000/referente";

fetch(URLMaterie)
.then(res =>{return res.json()})
.then(res => {
   //res è un array
   res.forEach(materia => {
    var contMateria = document.createElement("div");
    
    contMateria.setAttribute("class", "dimDiv");

    contMateria.innerHTML = `<p> ${materia.id} </p>
    <p>Docente: ${materia.docente} </p>
    <p>Materia: ${materia.insegnamento} </p>
    <p>Orario: ${materia.orario} ore </p>`;

    var button = document.createElement("button");
    button.innerHTML = "Elimina";
    contMateria.appendChild(button);

    button.addEventListener("click", function() {
        eliminaMateria(materia.id);
        console.log("Sto eliminando la materia.." + materia.id);
    } );

    container.appendChild(contMateria);

   });
});

fetch(URLRef)
.then(res =>{return res.json()})
.then(res => {
    console.log(res);
});

function eliminaMateria(id){
    fetch(URLMaterie + "/" + id, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
    })
    .then(res =>{return res.json()})
    .then(res => {
        console.log(res, " ... avvenuta eliminazione");
    })
}