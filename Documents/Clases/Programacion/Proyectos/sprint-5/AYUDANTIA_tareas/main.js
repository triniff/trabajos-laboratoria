$(document).ready(function(){
    $("#agregar").click(function(event) {
        var textoUsuario = $("#tarea").val();
        $("#contenedor-tarea").append('<div id="elemento"><p class="texto-tarea">' + textoUsuario + '</p><button class="completo">Listo</button>' + '<button id="borrar">Borrar</button></div>');
        $(".completo").click(function(event){
            $("p").addClass("boton-completo");
            $("#borrar").click(function(event){
                $("#elemento").remove();
            });
        });
    });
});