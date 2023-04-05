var lista = document.querySelector("#lista");

const URL = "https://dummyjson.com/products";

fetch(URL)
.then(data => {return data.json()})
.then(response => {
    console.log(response);

    console.log(response.products[0].brand, response.products[0].title);
    
    // for(var i = 0; i < response.products.length; i++){
    //     lista.innerHTML += "<li>" + response.products[i].brand + " " + response.products[i].title + " </li>";
    // }

    var prodotti = response.products; //prodotti è un array

    prodotti.forEach(prodotto => {
        // lista.innerHTML += "<li>" + prodotto.brand + " " + prodotto.title + " - " + prodotto.price + " € "+
        // " <br> <img class='dimImg' src="+prodotto.thumbnail+" >" + " </li>";
        
        //Back tick `` --> Alt + 96 

        lista.innerHTML += `<li> 
        ${prodotto.brand} ${prodotto.title} - ${prodotto.price} 
        <br> 
        <img class = "dimImg" src = "${prodotto.thumbnail}">
        </li>`

    });



})