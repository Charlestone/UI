$(document).ready(function() {
    $("#body").ready(function() {
        /* Restauracion de valores iniciales del formulario */
        $("#language").val("español");
        $("input[type!=button]").val("");
        $("input[type=checkbox]").prop('checked', false);
        /* Para poner el nombre del usuario */
        var cookiesa = document.cookie.split(";");
        if (cookiesa[0]) {
            var formsa = cookiesa[0].match(/\$.+?\#/g);
            $(".username").text(formsa[0].substr(1, formsa[0].length - 2));
            $("input[name=username]").val(formsa[0].substr(1, formsa[0].length - 2));
            $("input[name=password]").val(formsa[1].substr(1, formsa[1].length - 2));
            $("input[name=NameLName]").val(formsa[2].substr(1, formsa[2].length - 2));
            $("input[name=Birthday]").val(formsa[3].substr(1, formsa[3].length - 2));
            $("input[name=email]").val(formsa[4].substr(1, formsa[4].length - 2));
            $("#language").val(formsa[5].substr(1, formsa[5].length - 2));
        }
        
        //document.cookie = "user1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        //alert(document.cookie.split(";"));
    });
    /* Para el logo */
    $("#logo").click(function() {
        window.location.href = '../principal/reg/principalr.html';
    });
    /* Para el menu desplegable */
    $(".menu").click(function() {
        $(".dropdown-content").toggle();
    });
    /* Para el menu de usuario*/
    $("#userphoto").click(function() {
        $(".dropdown-content-1").toggle();
    });
    /* Variables */
    var errors = "";
    var terms = "";
    var email = /^[a-z0-9\.]+@([a-z0-9]+\.)+[a-z]{2,4}$/;
    var password = /^[a-z0-9]{1,8}$/;
    var fullname = /^[A-Z][a-z]+(\s[a-z]+){0,2}\s[A-Z][a-z]+$/;
    var bday = /^(\d{2}\/){2}\d{4}$/;
    var today = new Date();
    var actuser = "";
    var actcookie = "";
    var cambios = "";
    var forms = ["stop", "stop", "stop", "stop", "stop", "stop"];
    var cookies;
    /* Funcion para guardar cookies */
    function setCookie(cname, cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + cvalue + ";" + expires + ";path=/";
    }
    /* Funcion para comprobar si existe cookie para un correo */
    function checkCookie(email) {
        cookies = document.cookie.split(";");
        if (cookies.length) {
            for (var i = 0; i < cookies.length; i++) {
                if (cookies[i]) {
                    forms = cookies[i].match(/\$.+?\#/g);
                    if (forms[4].substr(1, forms[4].length - 2) == email) {
                        actcookie = cookies[i];
                        actuser = actcookie.match(/^\w*\d*=/);
                        return true;
                    }
                }
            }
        }
        if (forms[0] != "stop") {
            actuser = "user" + cookies.length + "=";
        } else {
            actuser = "user" + 0 + "=";
        }

        return false;
    }
    /* Si se hace click en login */
    $("#login").click(function() {
        /*Validacion de email en la ventana modal*/
        if (!email.test($("#modal-email").val())) {
            errors += "Email inválido.\n";
        }
        /*Validacion de contraseña en la ventana modal*/
        if (!password.test($("#modal-password").val())) {
            errors += "Contraseña inválida.\n";
        }
        if (!errors) {
            /*Comprueba si el usuario tiene cookie*/
            if (checkCookie($("#modal-email").val())) {
                forms = actcookie.match(/\$.+?\#/g);
                /* Si la contraseña es correcta */
                if (forms[1].substr(1, forms[1].length - 2) == $("#modal-password").val()) {
                    $("input[name=username]").val(forms[0].substr(1, forms[0].length - 2));
                    $("input[name=password]").val(forms[1].substr(1, forms[1].length - 2));
                    $("input[name=NameLName]").val(forms[2].substr(1, forms[2].length - 2));
                    $("input[name=Birthday]").val(forms[3].substr(1, forms[3].length - 2));
                    $("input[name=email]").val(forms[4].substr(1, forms[4].length - 2));
                    $("#language").val(forms[5].substr(1, forms[5].length - 2));
                } else {
                    /* Si la contraseña no es correcta */
                    alert("Contraseña incorrecta\nPor favor, introduce la contraseña correcta.\n");
                    $("#modal-password").val("");
                }
            } else {
                /* Si no hay cookie para el correo */
                $("input[name=email]").val($("input[name=emailm]").val());
                $("input[name=password]").val($("input[name=passwordm]").val());
                $(".modal").hide();
            }
        } else {
            /* Si hay algun campo invalido */
            alert(errors + "\nPor favor, introduce alternativas válidas para los campos anteriores.");
            errors = "";
        }
    });
    /* Si se hace click en el boton guardar */
    $("input[name=guardar]").click(function() {
        /* Validacion del nombre de usuario */
        if (!$("input[name=username]").val()) {
            errors += "Usuario inválido.\n";
        }
        /*Validacion de contraseña en el formualrio*/
        if (!password.test($("input[name=password]").val())) {
            errors += "Contraseña inválida.\n";
        }
        /*Validacion del nombre y el apellido*/
        if (!fullname.test($("input[name=NameLName]").val())) {
            errors += "Nombre y Apellido inválido.\n";
        }
        /*Validacion de la fecha de nacimiento*/
        if (bday.test($("input[name=Birthday]").val())) {
            var birthday = $("input[name=Birthday]").val().match(/\d+/g);
            if (birthday[0] > 31 || birthday[0] < 1 || birthday[1] > 12 || birthday[1] < 1 || birthday[2] < 1907) {
                errors += "Fecha de nacimiento inválida.\n";
            } else {
                var day = new Date();
                day.setDate(birthday[0]);
                day.setMonth(birthday[1] - 1);
                day.setFullYear(birthday[2]);
                if (today <= day) {
                    errors += "Fecha de nacimiento inválida.\n";
                }
            }
        } else {
            errors += "Fecha de nacimiento inválida.\n";
        }
        /* Validacion de la checkbox */
        if (!$("input[name=terms]").prop('checked')) {
            terms += "\nDebes aceptar los términos.";
        }
        /* Si no hay campos invalidos */
        if (!errors && !terms) {
            /* Guardado de usuario */
            var user = "$" + $("input[name=username]").val() + "#";
            user += "$" + $("input[name=password]").val() + "#";
            user += "$" + $("input[name=NameLName]").val() + "#";
            user += "$" + $("input[name=Birthday]").val() + "#";
            user += "$" + $("input[name=email]").val() + "#";
            user += "$" + $("#language").val() + "#";
            checkCookie($("input[name=email]").val());
            setCookie(actuser, user);
            /* Se comprueba en que campos se han producido cambios */
            if ($("input[name=username]").val() != forms[0].substr(1, forms[0].length - 2) && forms[0]) {
                cambios += "Usuario\n";
            }
            if ($("input[name=password]").val() != forms[1].substr(1, forms[1].length - 2) && forms[1]) {
                cambios += "Contraseña\n";
            }
            if ($("input[name=NameLName]").val() != forms[2].substr(1, forms[2].length - 2) && forms[2]) {
                cambios += "Nombre y apellido\n";
            }
            if ($("input[name=Birthday]").val() != forms[3].substr(1, forms[3].length - 2) && forms[3]) {
                cambios += "Fecha de nacimiento\n";
            }
            if ($("#language").val() != forms[5].substr(1, forms[5].length - 2) && forms[5]) {
                cambios += "Idioma\n";
            }
            /* Se muestran los cambios */
            if (cambios) {
                alert("Se han guardado los siguientes cambios:\n" + cambios);
                cambios = "";
            }
            document.location.href = './cuenta.html';
        } else {
            /* Si los hay */
            if (errors) {
                errors += "\nPor favor, introduce alternativas válidas para los campos anteriores.\n";
            }
            alert(errors + terms);
            errors = "";
            terms = "";
        }
    });
    /* Si se hace click en el boton reset */
    $("input[name=borrar]").click(function() {
        /* Si hay cookie, restauramos los valores de esta*/

        if (checkCookie($("#modal-email").val())) {
            $("input[name=username]").val(forms[0].substr(1, forms[0].length - 2));
            $("input[name=password]").val(forms[1].substr(1, forms[1].length - 2));
            $("input[name=NameLName]").val(forms[2].substr(1, forms[2].length - 2));
            $("input[name=Birthday]").val(forms[3].substr(1, forms[3].length - 2));
            $("input[name=email]").val(forms[4].substr(1, forms[4].length - 2));
            $("#language").val(forms[5].substr(1, forms[5].length - 2));
        } else {
            /* Si no hay cookie, dejamos solo los valores que el usuario 
            ha introducido en la ventana modal */
            $("input[name=username]").val("");
            $("input[name=NameLName]").val("");
            $("input[name=Birthday]").val("");
            $("#language").val("español");
            $("input[type=checkbox]").prop('checked', false);
        }
    });
});