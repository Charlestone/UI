$(document).ready(function() {
    /* Para poner el nombre del usuario */
    var cookies = document.cookie.split(";");
    if (cookies[0]) {
        var forms = cookies[0].match(/\$.+?\#/g); 
        $("#username").text(forms[0].substr(1, forms[0].length - 2));
    }
    
    $("#listas").hide();
     /* Para el logo */
    $("#logo").click(function(){
        window.location.href= '../principal/reg/principalr.html';
    });
    /* Para el menu desplegable */
    $(".menu").click(function() {
        $(".dropdown-content").toggle();
    });
    /* Para el menu de usuario*/
    $("#userphoto").click(function(){
        $(".dropdown-content-1").toggle();
    });
       /* Si se hace click en el corazon */
    $(".corazon").click(function() {
       if($(this).attr("src") == "../img/corazon.png"){
            $(this).attr("src", "../img/corazon1.png");
       }else{
            $(this).attr("src", "../img/corazon.png");
       }
    });
    /* Si se hace click en el icono de compartir */
        $(".compartir").click(function() {
       if($(this).attr("src") == "../img/compartir.png"){
            $(this).attr("src", "../img/compartir1.png");
       }else{
            $(this).attr("src", "../img/compartir.png");
       }
    });
    /* Valores para saber donde esta el raton*/
    var ejeX=0;
    var ejeXespecial=0;
    var ejeY=0;
    /*Funcion para obtener la posicion del raton*/
    $(document).mousemove( function(e) {
            ejeX = e.pageX;
            ejeXespecial = e.pageX-150;
            ejeY = e.pageY;
        });
    /* Funciones para mostrar las listas donde añadir el video*/
    $(".mas").mouseover(function(){
            $('#listas').css({'top':ejeY,'left':ejeX}).fadeIn("fast"); 
    });
    $(document).click(function(){
        if ( $("#listas").css('display') != 'none' ){
                $("#listas").hide();
        } 
    });
    /*Funcion para que al clickar en el div de las listas no desaparezca*/
    $('#listas').click(function(event){
     event.stopPropagation();
    });
      /* Funciones para redirigir a el usuario a ver un video*/
    $(".posvideo").click(function(){
        window.location.href= '../repro/reg/repror.html';
    });
    $(".titulo").click(function(){
        window.location.href= '../repro/reg/repror.html';
    });
});