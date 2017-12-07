$(document).ready(function() {

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
    $("#corazon").click(function() {
        numlikes++;
        numlikes.toString();
        $("p[id=likes]").text(numlikes);
    });
    /* Si se hace click en el icono de compartir */
    $("#compartir").click(function() {
        numshares++;
        numshares.toString();
        $("p[id=shares]").text(numshares);
    });
    /* Si se hace click en el boton + o - */
    /*$("#mas1").click(function() {
        $("#descripcion1").toggle();

        if (mostrardesc1 == false) {
            $("#mas1").attr('src', './img/menos.png');
            mostrardesc1 = true;
        } else {
            $("#mas1").attr('src', './img/mas.png');
            mostrardesc1 = false;
        }
    }); */
    /* Si se hace click en el boton + o - */
    /*$("#mas2").click(function() {
        $("#descripcion2").toggle();
        if (mostrardesc2 == false) {
            $("#mas2").attr('src', './img/menos.png');
            mostrardesc2 = true;
        } else {
            $("#mas2").attr('src', './img/mas.png');
            mostrardesc2 = false;
        }
    }); */

});