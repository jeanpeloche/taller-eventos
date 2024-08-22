document.addEventListener('DOMContentLoaded', function(){

const div = document.getElementById("el-Div")
const boton = document.getElementById("el-Boton");

    div.addEventListener("click", function(){
        alert("Hola! Soy el div");
    });

    boton.addEventListener("click", function(evento){
        evento.stopPropagation();
        alert("Hola!")
    })
})
