para_evento = document.getElementById("el_div")

para_evento.addEventListener('click', function() {
    alert('Hola! Soy el div.');
});

para_evento.addEventListener("click", mostrarAlertaDiv);

function alerta(event){
    alert("Hola!");
    event.stopPropagation();
}