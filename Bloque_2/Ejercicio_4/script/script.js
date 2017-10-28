$(document).ready(function() {
    $("#body").ready(function() {
        $(".modal").show();

    });

    var errors = "";
    var terms = "";
    var email = /[a-z0-9]+@([a-z0-9]+\.)+[a-z]{2,4}/;
    var password = /[a-z0-9]{1,8}/;
    var fullname = /[A-Z][a-z]+(\s[a-z]+){0,2}\s[A-Z][a-z]+/;
    var bday = /(\d{2}\/){2}\d{4}/;

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
            $(".modal").hide();
            $("input[name=email]").val($("input[name=emailm]").val());
            $("input[name=password]").val($("input[name=passwordm]").val());
        } else {
            alert(errors + "\nPlease enter valid alternatives for the wrong fields.");
            errors = "";
        }
    });

    $("input[name=guardar]").click(function() {
        /* Validacion del nombre de usuario */
        if (!$("input[name=username]").val()) {
            errors += "Invalid username.\n";
        }
        /*Validacion de contraseña en el formualrio*/
        if (!password.test($("#f-password").val())) {
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
                var today = new Date();
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

        /* Validacion de la checkbox */
        if (!$("input[name=terms]").prop('checked')) {
            terms += "\nYou must agree to the terms.";
        }
        /* Impresion de errores */
        if (!errors && !terms) {} else {
        	if (errors) {
        		errors += "\nPlease enter valid alternatives for the wrong fields.";
        	}
            alert(errors + terms);
            errors = "";
            terms = "";
        }
    });

    $("#payment").change(function() {
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