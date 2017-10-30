$(document).ready(function() {
    var dorso = "../img/vuelta.pnmg";
    var img = ["./img/pez.png", "./img/tucan.png", "./img/corzo.png",
        "./img/ardilla.png", "./img/dalmata.png", "./img/delfin.png",
        "./img/focas.png", "./img/gato.png", "./img/pajaro.png", "./img/zorro.png"
    ];
    var exp = /^\d+$/;
    var errors = "";

    $("#body").ready(function() {
        /* Restauracion de valores iniciales del formulario */
        $("input[type!=button]").val("");
    });
    $("input[name=start]").click(function() {
        var finimg = [];
        var cards = $("input[name=cards]").val();
        var ncards = Number(cards);
        var time = $("input[name=time]").val();
        var ntime = Number(time);
        if (!(ncards < 11 && ncards > 2) || !exp.test(cards)) {
            errors += "Please enter a number of cards between 3 and 10.\n";
            $("input[name=cards]").val("");
        }
        if (!(ntime < 121 && ntime > 9) || !exp.test(time)) {
            errors += "Please enter a number of seconds between 10 and 121.\n";
            $("input[name=time]").val("");
        }
        if (errors) {
            alert(errors);
            errors = "";
        } else {
            /* Contador */

            /* Cartas */
            /* Barajamos las posibles imagenes */
            img.sort(function(a, b) { return 0.5 - Math.random() });
            /* Las introfucimos duplicadas en un array */
            for (var i = 0; i <= ncards; i++) {
                finimg.push(img[i]);
                finimg.push(img[i]);
            }
            /* Barajamos las cartas duplicadas */
            finimg.sort(function(a, b) { return 0.5 - Math.random() });
        }
    });

    /* var milisegundos = 2000;
    var siguiente = 0;
    function temporizador() {
        $(".imagenes").attr("src", imagenes[siguiente]);
        $(".imagenes").slideDown(1000).delay(1000).fadeIn(1000);
        $(".imagenes").fadeOut(1500).delay(500).slideUp(1000, function() {
            timer = setTimeout(temporizador(), milisegundos);
        });

    } */

    /*var tiempodejuego = $("#tiempodejuego").val();
	setTimeout(function() {
      
    }, $(tiempodejuego);
	*/


});