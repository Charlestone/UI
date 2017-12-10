$(document).ready(function() {
    $(".modal1").hide();
	/* Variables */
	var email = /^[a-z0-9\.]+@([a-z0-9]+\.)+[a-z]{2,4}$/;
    var password = /^[a-z0-9]{1,8}$/;
    var forms = "";
    var errors = "";
    var likes = $("#likes").text();
    var numlikes = Number(likes);
    var shares = $("#shares").text();
    var numshares = Number(shares);
    var eachlikes = [0, 0, 0, 0];
    var eachshares = [0, 0, 0, 0];
    var videosm = ["../../img/suits.mp4", "../../img/homeland.mp4", "../../img/strangerthings.mp4", "../../img/billions.mp4"];
    var videoso = ["../../img/suits.ogg", "../../img/homeland.ogg", "../../img/strangerthings.ogg", "../../img/billions.ogg"];
    var foto = ["../../img/suits.png", "../../img/homeland.png", "../../img/strangerthings.png", "../../img/billions.png"];
    /* Para el logo */
    $("#logo").click(function(){
        window.location.href= '../../principalnr.html';
    });
    /* Para el menu desplegable */
    $(".menu").click(function() {
        $(".dropdown-content").toggle();
    });
    /* Para el boton de iniciar sesion */
    $(".inises").click(function(){
    	 $(".modal1").show();
    });
    /* Para la x de la ventana modal */
    $(".close").click(function(){
    	$(".modal1").hide();
        $(".modal").hide();
    });
    /* Para registrate aquí de la ventana modal */
    $("#registro").click(function(){
    	window.location.href= '../../registro/registro.html';
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
    $(function() {
        $(".draggable").draggable({
            helper: "clone"
        });

        $("#droppable").droppable({

            acept: ".draggable",

            drop: function(event, ui) {
                var titulop = $(".titulop").html();
                var descrp = $(".descrp").html();
                var videop = $("#sourceo").attr("src");
                var titulonp = $(ui.draggable).find(".titulo").html();
                var descrnp = $(ui.draggable).find(".posdescripcion").html();
                var videonp = $(ui.draggable).find(".posvideo").attr("src");
                var likesaux = $("#likes").text();
                var sharesaux = $("#shares").text();
                $(".titulop").html(titulonp);
                $(".descrp").html(descrnp);
                for (var i = 0; i < videoso.length; i++) {
                    if (!videoso[i].substr(-6, 2).localeCompare(videop.substr(-6, 2))) {
                        $(ui.draggable).find(".posvideo").attr('src', foto[i]);
                        eachlikes[i] = likesaux;
                        eachshares[i] = sharesaux;
                    }
                    if (!videoso[i].substr(-6, 2).localeCompare(videonp.substr(-6, 2))) {
                        $(this).find("#sourcem").attr('src', videosm[i]);
                        $(this).find("#sourceo").attr('src', videoso[i]);
                        $(this).find("video").load();
                        $("#likes").text(eachlikes[i]);
                        $("#shares").text(eachshares[i]);
                    }

                }
                $(ui.draggable).find(".titulo").html(titulop);
                $(ui.draggable).find(".posdescripcion").html(descrp);
            }
        });
    });
     /*Funcion para que muestre una modal al usuario no registrado*/
   $(".funcionalidad").click(function(){
       $("#noreg").show();
   });
   /* Funcion para que se lleve a la pagina de registro */
    $("#registrar").click(function(){
        window.location.href= '../../registro/registro.html';
    });
});