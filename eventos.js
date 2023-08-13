para_evento = document.getElementById("el_div")

function mostrarAlertaDiv(){
    alert("Hola! Soy el div");
    event.stopPropagation();
}

para_evento.addEventListener("click", mostrarAlertaDiv);