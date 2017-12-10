$(document).ready(function() {
	/* Variables */
	var email = /^[a-z0-9\.]+@([a-z0-9]+\.)+[a-z]{2,4}$/;
    var password = /^[a-z0-9]{1,8}$/;
    var forms = "";
    var errors = "";
    /* Para el logo */
    $("#logo").click(function(){
        window.location.href= '../../principal/noreg/principalnr.html';
    });
    /* Para el menu desplegable */
    $(".menu").click(function() {
        $(".dropdown-content").toggle();
    });
    /* Para el boton de iniciar sesion */
    $(".inises").click(function(){
    	 $("#modal").show();
    });
    /* Para la x de la ventana modal */
    $(".close").click(function(){
    	$(".modal").hide();
    });
    /* Para registrate aquí de la ventana modal */
    $("#registro").click(function(){
    	window.location.href= '../../../registro/registro.html';
    });
    /* Si se hace click en el boton log in */
    $("#login").click(function() {
        /*Validacion de email en la ventana modal*/
        if (!email.test($("#modal-email").val())) {
            errors += "Email inválido.\n";
            $("#modal-email").value("");
        }
        /*Validacion de contraseña en la ventana modal*/
        if (!password.test($("#modal-password").val())) {
            errors += "Contraseña inválida.\n";
            $("#modal-password").value("");
        }
        if (!errors) {

            if (checkCookie($("#modal-email").val())) {
                if (forms[1].substr(1, forms[1].length - 2).localeCompare($("#modal-password").val()) && forms[1]) {
                    $("#modal-password").val("");
                    alert("Por favor, introduce la contraseña correcta.");
                    
                } else {
                    if (forms[0]) {
                    	window.location.href = "../../principal/reg/principalr.html";
                        $("#username").text(forms[0].substr(1, forms[0].length - 2));
                        $(".modal").hide();
                    }
                }

            } else {
                alert("No estás registrado");
            }

        } else {
            alert(errors + "\nPor favor, rellena los campos correctamente.");
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
        window.location.href= '../../repro/noreg/repronr.html';
    });
    $(".titulo").click(function(){
        window.location.href= '../../repro/noreg/repronr.html';
    });
});