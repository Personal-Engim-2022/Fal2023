var btn = document.querySelector("#btn");
var demo = document.querySelector("#demo");
btn.addEventListener("click", function() {
    // if(demo.classList.contains("bgBlack")){
    //     demo.classList.remove("bgBlack");
    //     demo.classList.add("bgYellow");
    // }else{
    //     demo.classList.remove("bgYellow");
    //     demo.classList.add("bgBlack");
    // }
    demo.classList.toggle("bgYellow");
});

var demo2 = document.querySelector("#demo2");
demo2.addEventListener("mousemove", function() {
    demo2.setAttribute("style", "background-color: rgb("+Math.ceil( Math.random() * 255 ) +","+Math.ceil( Math.random() * 255 ) +", "+Math.ceil( Math.random() * 255 ) +")")
})