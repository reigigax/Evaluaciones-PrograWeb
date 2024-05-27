$(document).ready(function(){
    /*Navbar - Inicio*/
    $(".nav-inicio").click(function(){
        $("#contenido").load("../index.html");
    });

    /*Navbar - Tienda*/
    $(".nav-tienda").click(function(){
        $("#contenido").load("seccion/tienda.html");
    });

    /*Navbar - Donaciones*/
    $(".nav-donaciones").click(function(){
        $("#contenido").load("seccion/donaciones.html");
    });

    /*Navbar - Nosotros*/
    $(".nav-nosotros").click(function(){
        $("#contenido").load("seccion/nosotros.html");
    });

    /*Navbar - Contacto*/
    $(".nav-contacto").click(function(){
        $("#contenido").load("seccion/contacto.html");
    });

});