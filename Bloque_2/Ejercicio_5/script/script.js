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
        $(".modal").show();

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
                        $("#username").text(forms[0].substr(1, forms[0].length - 2));
                        $(".modal").hide();
                    }
                }

            } else {
                window.location.href = "../Ejercicio_4/miau.html";
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
    $("#mas1").click(function() {
        $("#descripcion1").toggle();

        if (mostrardesc1 == false) {
            $("#mas1").attr('src', './img/menos.png');
            mostrardesc1 = true;
        } else {
            $("#mas1").attr('src', './img/mas.png');
            mostrardesc1 = false;
        }
    });
    /* Si se hace click en el boton + o - */
    $("#mas2").click(function() {
        $("#descripcion2").toggle();
        if (mostrardesc2 == false) {
            $("#mas2").attr('src', './img/menos.png');
            mostrardesc2 = true;
        } else {
            $("#mas2").attr('src', './img/mas.png');
            mostrardesc2 = false;
        }
    });
    /* Si se hace click en el boton + o - */
    $("#mas3").click(function() {
        $("#descripcion3").toggle();
        if (mostrardesc3 == false) {
            $("#mas3").attr('src', './img/menos.png');
            mostrardesc3 = true;
        } else {
            $("#mas3").attr('src', './img/mas.png');
            mostrardesc3 = false;
        }
    });

    $(function() {
        /* Variables para el vídeo principal*/
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
                $(".titulop").html(titulonp);
                $(".descrp").html(descrnp);
                for (var i = 0; i < videoso.length; i++) {
                    if (!videoso[i].substr(-6, 2).localeCompare(videop.substr(-6, 2))) {
                        $(ui.draggable).find(".posvideo").attr('src', foto[i]);
                        eachlikes[i] = $("#likes").text();
                        eachshares[i] = $("#shares").text();
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
                likes = $("#likes").text();
                numlikes = Number(likes);
                shares = $("#shares").text();
                numshares = Number(shares);
            }
        });
    });
});