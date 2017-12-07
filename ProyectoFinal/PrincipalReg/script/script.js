$(document).ready(function() {
    $("#listas").hide();
    /* Variables */
    var likes = $("#likes").text();
    var numlikes = Number(likes);
    var shares = $("#shares").text();
    var numshares = Number(shares);
    var email = /^[a-z0-9\.]+@([a-z0-9]+\.)+[a-z]{2,4}$/;
    var password = /^[a-z0-9]{1,8}$/;
    var forms = "";
    var errors = "";
    var eachlikes = [0, 0, 0, 0];
    var eachshares = [0, 0, 0, 0];
    var videosm = ["./img/suits.mp4", "./img/homeland.mp4", "./img/strangerthings.mp4", "./img/billions.mp4"];
    var videoso = ["./img/suits.ogg", "./img/homeland.ogg", "./img/strangerthings.ogg", "./img/billions.ogg"];
    var foto = ["./img/suits.png", "./img/homeland.png", "./img/strangerthings.png", "./img/billions.png"];
    var mostrardesc1 = false;
    var mostrardesc2 = false;
    var mostrardesc3 = false;

    /*JS para la ventana modal*/
   $("#body").ready(function() {
        $("#modal-email").val("");
        $("#modal-password").val("");
        //$(".modal").show();

    });
   $("#logueo").click(function(){
        $(".modal").show();
   })
    /* Si se hace click en el boton log in */
    $("#login").click(function() {
        /*Validacion de email en la ventana modal*/
        if (!email.test($("#modal-email").val())) {
            errors += "Invalid email.\n";
            $("#modal-email").value("");
        }
        /*Validacion de contraseña en la ventana modal*/
        if (!password.test($("#modal-password").val())) {
            errors += "Invalid password.\n";
            $("#modal-password").value("");
        }
        if (!errors) {

            if (checkCookie($("#modal-email").val())) {
                if (forms[1].substr(1, forms[1].length - 2).localeCompare($("#modal-password").val()) && forms[1]) {
                    $("#modal-password").val("");
                    alert("Please enter a valid password");
                    
                } else {
                    if (forms[0]) {
                        $("#logueo").text(forms[0].substr(1, forms[0].length - 2));
                        $(".modal").hide();
                    }
                }

            } else {
                window.location.href = "../Formulario/formulario.html";
            }

        } else {
            alert(errors + "\nPlease enter valid alternatives for the wrong fields.");
            errors = "";
        }
    });

    /* Funcion para comprobar si existe cookie para un correo */
    function checkCookie(email) {
        var cookies = document.cookie.split(";");
        if (cookies.length) {
            for (var i = 0; i < cookies.length; i++) {
                if (cookies[i]) {
                    forms = cookies[i].match(/\$.+?\#/g);
                    if (forms[4].substr(1, forms[4].length - 2) == email) {
                        actcookie = cookies[i];
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /* Si se hace click en el corazon */
    $(".corazon").click(function() {
       if($(this).attr("src") == "./img/corazon.png"){
            $(this).attr("src", "./img/corazon1.png");
       }else{
            $(this).attr("src", "./img/corazon.png");
       }
    });
    /* Si se hace click en el icono de compartir */
        $(".compartir").click(function() {
       if($(this).attr("src") == "./img/compartir.png"){
            $(this).attr("src", "./img/compartir1.png");
       }else{
            $(this).attr("src", "./img/compartir.png");
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
    $(".añadir").mouseover(function(){
            $('#listas').css({'top':ejeY,'left':ejeX}).fadeIn("fast"); 
    });  
   /* $(".masd").mouseover(function(){
                $('#listas').css({'top':ejeY,'left':ejeXespecial}).fadeIn();
    });*/
    /*Funcion para ocultar el div con las listas*/
    $(document).click(function(){
        if ( $("#listas").css('display') != 'none' ){
                $("#listas").hide();
        } 
    });
    /*Funcion para que al clickar en el div de las listas no desaparezca*/
    $('#listas').click(function(event){
     event.stopPropagation();
 });
        
});