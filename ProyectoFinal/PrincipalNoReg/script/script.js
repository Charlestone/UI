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


 var    corazon1 = true,
        corazon2 = true,
        corazon3 = true,
        corazon4 = true,
        corazon5 = true,
        corazon6 = true,
        compartir1 = true,
        compartir2 = true,
        compartir3 = true,
        compartir4 = true,
        compartir5 = true,
        compartir6 = true;


    /* Si se hace click en el corazon1 */
    $("#corazon1").click(function() {
        if (corazon1) {
            $("#corazon1").attr('src', './img/corazonColoreado.png');
            corazon1 = false;
            return;
        }
        else{
            $("#corazon1").attr('src', './img/corazon.png');
            corazon1 = true;
            return;
        }
    });

    /* Si se hace click en el corazon2 */
    $("#corazon2").click(function() {
        if (corazon2) {
            $("#corazon2").attr('src', './img/corazonColoreado.png');
            corazon2 = false;
            return;
        }
        else{
            $("#corazon2").attr('src', './img/corazon.png');
            corazon2 = true;
            return;
        }
    });

        /* Si se hace click en el corazon3 */
    $("#corazon3").click(function() {
        if (corazon3) {
            $("#corazon3").attr('src', './img/corazonColoreado.png');
            corazon3 = false;
            return;
        }
        else{
            $("#corazon3").attr('src', './img/corazon.png');
            corazon3 = true;
            return;
        }
    });

        /* Si se hace click en el corazon4 */
    $("#corazon4").click(function() {
        if (corazon4) {
            $("#corazon4").attr('src', './img/corazonColoreado.png');
            corazon4 = false;
            return;
        }
        else{
            $("#corazon4").attr('src', './img/corazon.png');
            corazon4 = true;
            return;
        }
    });

        /* Si se hace click en el corazon5 */
    $("#corazon5").click(function() {
        if (corazon5) {
            $("#corazon5").attr('src', './img/corazonColoreado.png');
            corazon5 = false;
            return;
        }
        else{
            $("#corazon5").attr('src', './img/corazon.png');
            corazon5 = true;
            return;
        }
    });

        /* Si se hace click en el corazon6 */
    $("#corazon6").click(function() {
        if (corazon6) {
            $("#corazon6").attr('src', './img/corazonColoreado.png');
            corazon6 = false;
            return;
        }
        else{
            $("#corazon6").attr('src', './img/corazon.png');
            corazon6 = true;
            return;
        }
    });



        /* Si se hace click en el compartir1 */
    $("#compartir1").click(function() {
        if (compartir1) {
            $("#compartir1").attr('src', './img/compartirColoreado.png');
            compartir1 = false;
            return;
        }
        else{
            $("#compartir1").attr('src', './img/compartir.png');
            compartir1 = true;
            return;
        }
    });
        /* Si se hace click en el compartir2 */
    $("#compartir2").click(function() {
        if (compartir2) {
            $("#compartir2").attr('src', './img/compartirColoreado.png');
            compartir2 = false;
            return;
        }
        else{
            $("#compartir2").attr('src', './img/compartir.png');
            compartir2 = true;
            return;
        }
    });

        /* Si se hace click en el compartir3 */
    $("#compartir3").click(function() {
        if (compartir3) {
            $("#compartir3").attr('src', './img/compartirColoreado.png');
            compartir3 = false;
            return;
        }
        else{
            $("#compartir3").attr('src', './img/compartir.png');
            compartir3 = true;
            return;
        }
    });

        /* Si se hace click en el compartir4 */
    $("#compartir4").click(function() {
        if (compartir4) {
            $("#compartir4").attr('src', './img/compartirColoreado.png');
            compartir4 = false;
            return;
        }
        else{
            $("#compartir4").attr('src', './img/compartir.png');
            compartir4 = true;
            return;
        }
    });

        /* Si se hace click en el compartir5 */
    $("#compartir5").click(function() {
        if (compartir5) {
            $("#compartir5").attr('src', './img/compartirColoreado.png');
            compartir5 = false;
            return;
        }
        else{
            $("#compartir5").attr('src', './img/compartir.png');
            compartir5 = true;
            return;
        }
    });

        /* Si se hace click en el compartir6 */
    $("#compartir6").click(function() {
        if (compartir6) {
            $("#compartir6").attr('src', './img/compartirColoreado.png');
            compartir6 = false;
            return;
        }
        else{
            $("#compartir6").attr('src', './img/compartir.png');
            compartir6 = true;
            return;
        }
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
    });*/

});