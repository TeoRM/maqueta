$(document).ready(function () {
    // Abre el modal automáticamente
    $("#myModal").modal("toggle");
});

function quitarClase1() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton");
    var elemento2 = document.getElementById("boton2");

    // Quitar la clase del elemento
    elemento.classList.remove("boton1");
    elemento2.classList.add("boton1");
}

function quitarClase2() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton2");
    var elemento2 = document.getElementById("boton");

    // Quitar la clase del elemento
    elemento.classList.remove("boton1");
    elemento2.classList.add("boton1");
}
