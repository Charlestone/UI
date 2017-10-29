$(document).ready(function() {
    $("#body").ready(function() {
        $(".modal").show();
        /* Restauracion de valores iniciales del formulario */
        $("#payment").val("choose");
        $("#language").val("español");
        $("input[type!=button]").val("");
        $("input[type=checkbox]").prop('checked', false);
        //document.cookie = "user1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        //alert(document.cookie.split(";"));
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
    var pay = 0;
    var cambios = "";
    var forms;
    var photo = false;
    /* Funcion para guardar cookies */
    function setCookie(cname, cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + cvalue + ";" + expires + ";path=/";
    }
    /* Funcion para comprobar si existe cookie para un correo */
    function checkCookie(email) {
        var cookies = document.cookie.split(";");
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
        actuser = "user" + cookies.length + "=";
        return false;
    }
    /* Si se hace click en login */
    $("#login").click(function() {
        /*Validacion de email en la ventana modal*/
        if (!email.test($("#modal-email").val())) {
            errors += "Invalid email.\n";
        }
        /*Validacion de contraseña en la ventana modal*/
        if (!password.test($("#modal-password").val())) {
            errors += "Invalid password.\n";
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
                    $("input[name=address]").val(forms[6].substr(1, forms[6].length - 2));
                    $("#payment").val(forms[7].substr(1, forms[7].length - 2));
                    switch ($("#payment").val()) {
                        case 'transferencia':
                            $("input[name=Beneficiary]").val(forms[8].substr(1, forms[8].length - 2));
                            $("input[name=Surname]").val(forms[9].substr(1, forms[9].length - 2));
                            $("input[name=Acnumber]").val(forms[10].substr(1, forms[10].length - 2));
                            $("input[name=Bank]").val(forms[11].substr(1, forms[11].length - 2));
                            break;

                        case 'tarjeta':
                            $("input[name=number]").val(forms[8].substr(1, forms[8].length - 2));
                            $("input[name=valid]").val(forms[9].substr(1, forms[9].length - 2));
                            $("input[name=code]").val(forms[10].substr(1, forms[10].length - 2));
                            break;
                        case 'paypal':
                            $("#pay").attr("hasBeenClicked", "true");
                            pay = 1;
                            break;
                    }
                    switch ($("#payment").val()) {
                        case 'transferencia':
                            $("#paypal").hide();
                            $("#tarjeta").hide();
                            $("#transferencia").show();
                            break;

                        case 'tarjeta':
                            $("#paypal").hide();
                            $("#transferencia").hide();
                            $("#tarjeta").show();
                            break;

                        case 'paypal':
                            $("#tarjeta").hide();
                            $("#transferencia").hide();
                            $("#paypal").show();
                            break;
                    }
                    $(".modal").hide();
                } else {
                    /* Si la contraseña no es correcta */
                    alert("Wrong password\nPlease enter a valid one.\n");
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
            alert(errors + "\nPlease enter valid alternatives for the wrong fields.");
            errors = "";
        }
    });
    /* Si se hace click en el enlace a Paypal */
    $("#pay").click(function() {
        if ($("#pay").attr("hasBeenClicked") == "true") {
            pay = 1;
        }
        $("#pay").attr("hasBeenClicked", "true");
    });
    /* Si se cambia la foto*/
    $("input[name=foto]").change(function() {
        photo = true;
    });
    /* Si se hace click en el boton guardar */
    $("input[name=guardar]").click(function() {
        /* Validacion del nombre de usuario */
        if (!$("input[name=username]").val()) {
            errors += "Invalid username.\n";
        }
        /*Validacion de contraseña en el formualrio*/
        if (!password.test($("input[name=password]").val())) {
            errors += "Invalid password.\n";
        }
        /*Validacion del nombre y el apellido*/
        if (!fullname.test($("input[name=NameLName]").val())) {
            errors += "Invalid name and last name.\n";
        }
        /*Validacion de la fecha de nacimiento*/
        if (bday.test($("input[name=Birthday]").val())) {
            var birthday = $("input[name=Birthday]").val().match(/\d+/g);
            if (birthday[0] > 31 || birthday[0] < 1 || birthday[1] > 12 || birthday[1] < 1 || birthday[2] < 1907) {
                errors += "Invalid birthday.\n";
            } else {
                var day = new Date();
                day.setDate(birthday[0]);
                day.setMonth(birthday[1] - 1);
                day.setFullYear(birthday[2]);
                if (today <= day) {
                    errors += "Invalid birthday.\n";
                }
            }
        } else {
            errors += "Invalid birthday.\n";
        }
        /* Validacion de la direccion */
        if (!$("input[name=address]").val()) {
            errors += "Invalid address.\n";
        }
        /* Validacion del metodo de pago */
        switch ($("#payment").val()) {
            case 'choose':
                errors += "Invalid payment method.\n";
                break;

            case 'transferencia':
                if (!$("input[name=Beneficiary]").val() ||
                    !$("input[name=Surname]").val() ||
                    !$("input[name=Acnumber]").val() ||
                    !$("input[name=Bank]").val()) {
                    errors += "Invalid payment method.\n";
                }
                break;

            case 'tarjeta':
                if (!/\d{16}/.test($("input[name=number]").val()) ||
                    !/\d{3}/.test($("input[name=code]").val()) ||
                    !/\d{2}\/\d{4}/.test($("input[name=valid]").val())) {
                    errors += "Invalid payment method.\n";
                } else {
                    var valid = $("input[name=valid]").val().match(/\d+/g);
                    var vday = new Date();
                    vday.setDate("1");
                    vday.setMonth(valid[0] - 1);
                    vday.setFullYear(valid[1]);
                    if (vday < today) {
                        errors += "Invalid payment method.\n";
                    }
                }
                break;

            case 'paypal':
                if ($("#pay").attr("hasBeenClicked") != "true") {
                    errors += "Invalid payment method.\n";
                }
                break;
        }
        /* Validacion de la checkbox */
        if (!$("input[name=terms]").prop('checked')) {
            terms += "\nYou must agree to the terms.";
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
            user += "$" + $("input[name=address]").val() + "#";
            user += "$" + $("#payment").val() + "#";
            switch ($("#payment").val()) {
                case 'tarjeta':
                    user += "$" + $("input[name=number]").val() + "#";
                    user += "$" + $("input[name=valid]").val() + "#";
                    user += "$" + $("input[name=code]").val() + "#";
                    user += "$" + " " + "#";
                    break;

                case 'transferencia':
                    user += "$" + $("input[name=Beneficiary]").val() + "#";
                    user += "$" + $("input[name=Surname]").val() + "#";
                    user += "$" + $("input[name=Acnumber]").val() + "#";
                    user += "$" + $("input[name=Bank]").val() + "#";
                    break;
                case 'paypal':
                    user += "";
                    user += "";
                    user += "";
                    user += "";
                    break;
            }
            checkCookie($("input[name=email]").val());
            setCookie(actuser, user);
            /* Se comprueba en que campos se han producido cambios */
            if ($("input[name=username]").val() != forms[0].substr(1, forms[0].length - 2) && forms[0]) {
                cambios += "Username\n";
            }
            if ($("input[name=password]").val() != forms[1].substr(1, forms[1].length - 2) && forms[1]) {
                cambios += "Password\n";
            }
            if ($("input[name=NameLName]").val() != forms[2].substr(1, forms[2].length - 2) && forms[2]) {
                cambios += "Name & Last Name\n";
            }
            if ($("input[name=Birthday]").val() != forms[3].substr(1, forms[3].length - 2) && forms[3]) {
                cambios += "Birthday\n";
            }
            if (photo) {
                cambios += "Photo\n";
                photo = false;
            }
            if ($("#language").val() != forms[5].substr(1, forms[5].length - 2) && forms[5]) {
                cambios += "Language\n";
            }
            if ($("input[name=address]").val() != forms[6].substr(1, forms[6].length - 2) && forms[6]) {
                cambios += "Address\n";
            }
            if ($("#payment").val() != forms[7].substr(1, forms[7].length - 2) && forms[7]) {
                cambios += "Payment method\n";
                switch ($("#payment").val()) {
                    case 'tarjeta':
                        cambios += "Number\nValid Thru\nCode\n";
                        break;

                    case 'transferencia':
                        cambios += "Beneficiary's Name\nSurname\nAccount Number\nBank\n";
                        break;
                }
            } else {
                switch ($("#payment").val()) {
                    case 'transferencia':
                        if ($("input[name=Beneficiary]").val() != forms[8].substr(1, forms[8].length - 2) && forms[8]) {
                            cambios += "Beneficiary's Name\n";
                        }
                        if ($("input[name=Surname]").val() != forms[9].substr(1, forms[9].length - 2) && forms[9]) {
                            cambios += "Surname\n";
                        }
                        if ($("input[name=Acnumber]").val() != forms[10].substr(1, forms[10].length - 2) && forms[10]) {
                            cambios += "Account Number\n";
                        }
                        if ($("input[name=Bank]").val() != forms[11].substr(1, forms[11].length - 2) && forms[11]) {
                            cambios += "Bank\n";
                        }
                        break;

                    case 'tarjeta':
                        if ($("input[name=number]").val() != forms[8].substr(1, forms[8].length - 2) && forms[8]) {
                            cambios += "Number\n";
                        }
                        if ($("input[name=valid]").val() != forms[9].substr(1, forms[9].length - 2) && forms[9]) {
                            cambios += "Valid Thru\n";
                        }
                        if ($("input[name=code]").val() != forms[10].substr(1, forms[10].length - 2) && forms[10]) {
                            cambios += "Code\n";
                        }
                        break;
                    case 'paypal':
                        if (!pay) {
                            cambios += "Paypal";
                        }
                        break;
                }
            }

            /* Se muestran los cambios */
            if (cambios) {
                alert("The following changes have been saved:\n" + cambios);
                cambios = "";
            }
        } else {
            /* Si los hay */
            if (errors) {
                errors += "\nPlease enter valid alternatives for the wrong fields.\n";
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
            $("input[name=address]").val(forms[6].substr(1, forms[6].length - 2));
            $("#payment").val(forms[7].substr(1, forms[7].length - 2));
            switch ($("#payment").val()) {
                case 'transferencia':
                    $("input[name=Beneficiary]").val(forms[8].substr(1, forms[8].length - 2));
                    $("input[name=Surname]").val(forms[9].substr(1, forms[9].length - 2));
                    $("input[name=Acnumber]").val(forms[10].substr(1, forms[10].length - 2));
                    $("input[name=Bank]").val(forms[11].substr(1, forms[11].length - 2));
                    break;

                case 'tarjeta':
                    $("input[name=number]").val(forms[8].substr(1, forms[8].length - 2));
                    $("input[name=valid]").val(forms[9].substr(1, forms[9].length - 2));
                    $("input[name=code]").val(forms[10].substr(1, forms[10].length - 2));
                    break;
                case 'paypal':
                    $("#pay").attr("hasBeenClicked", "true");
                    break;
            }
            switch ($("#payment").val()) {
                case 'transferencia':
                    $("#paypal").hide();
                    $("#tarjeta").hide();
                    $("#transferencia").show();
                    break;

                case 'tarjeta':
                    $("#paypal").hide();
                    $("#transferencia").hide();
                    $("#tarjeta").show();
                    break;

                case 'paypal':
                    $("#tarjeta").hide();
                    $("#transferencia").hide();
                    $("#paypal").show();
                    break;
            }
            $("input[name=foto]").val("");
        } else {
            /* Si no hay cookie, dejamos solo los valores que el usuario 
            ha introducido en la ventana modal */
            $("input[name=username]").val("");
            $("input[name=NameLName]").val("");
            $("input[name=Birthday]").val("");
            $("input[name=foto]").val("");
            $("input[name=address]").val("");
            $("input[name=number]").val("");
            $("input[name=valid]").val("");
            $("input[name=code]").val("");
            $("input[name=Beneficiary]").val("");
            $("input[name=Surname]").val("");
            $("input[name=Acnumber]").val("");
            $("input[name=Bank]").val("");
            $("#language").val("español");
            $("#payment").val("choose");
            $("#tarjeta").hide();
            $("#transferencia").hide();
            $("#paypal").hide();
            $("input[type=checkbox]").prop('checked', false);
        }
    });

    /* Si se cambia el metodo de pago */
    $("#payment").change(function() {
        $("#tarjeta input").val("");
        $("#transferencia input").val("");
        switch ($("#payment").val()) {
            case 'transferencia':
                $("#paypal").hide();
                $("#tarjeta").hide();
                $("#transferencia").show();
                break;

            case 'tarjeta':
                $("#paypal").hide();
                $("#transferencia").hide();
                $("#tarjeta").show();
                break;

            case 'paypal':
                $("#tarjeta").hide();
                $("#transferencia").hide();
                $("#paypal").show();
                break;
        }
    });
});