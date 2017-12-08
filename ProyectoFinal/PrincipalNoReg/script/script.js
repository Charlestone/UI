$(document).ready(function() {
    /* Para el logo */
    $("#logo").click(function(){
        window.location.href= './basenr.html';
    });
    /* Para el menu desplegable */
    $(".menu").click(function() {
        $(".dropdown-content").toggle();
    });
    /* Para el boton de iniciar sesion */
    $(".inises").click(function(){
         $(".modal").show();
    });
    /* Para la x de la ventana modal */
    $(".close").click(function(){
        $(".modal").hide();
    });
    /* Para registrate aquí de la ventana modal */
    $("#registro").click(function(){
        window.location.href= './registro.html';
    });
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
                        window.location.href = "./principalr.html";
                        $("#username").text(forms[0].substr(1, forms[0].length - 2));
                        $(".modal").hide();
                    }
                }

            } else {
                window.location.href = "./registro.html";
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
    /*Funcion para que muestre una modal al usuario no registrado*/
    $(".funcionalidad").click(function(){
        $("#noreg").show();
    });
    /* Funcion para redirigir a el usuario a ver un video*/
    $(".posvideo").click(function(){
        window.location.href= './reproduccionnr.html';
    });
    $(".titulo").click(function(){
        window.location.href= './reproduccionnr.html';
    });
});