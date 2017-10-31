$(document).ready(function() {
    /* Variables */
    var dorso = "../img/vuelta.png";
    var img = ["./img/pez.png", "./img/tucan.png", "./img/corzo.png",
        "./img/ardilla.png", "./img/dalmata.png", "./img/delfin.png",
        "./img/focas.png", "./img/gato.png", "./img/pajaro.png",
        "./img/zorro.png"
    ];
    var expn = /^\d+$/;
    var expalt = /\/\w+\./;
    var errors = "";
    var carta1 = "";
    var carta2 = "";
    var matches = 0;
    var imagenes = "";
    var i;
    var aux = "";
    var time = "";
    var ntime = 0;
    var contador = 0;
    var auxtime = 0;
    var finimg = [];
    var alt = [];
    var cards;
    var ncards;
    /* Funciones */
    function contar() {
        auxtime = ntime;
        contador = setInterval(function() {
            auxtime--;
            $("#timer").html(auxtime);
            if (auxtime == 0) {
                clearInterval(contador);
                alert("TIME'S UP!\nTry again");
                matches = 0;
                $(".back").addClass("front");
            }
        }, 1000);
    }
    /* Gestores de eventos */
    /* Cuando se carga el body */
    $("#body").ready(function() {
        /* Restauracion de valores iniciales del formulario */
        $("input[type!=button]").val("");
        $(".datospart").hide();
    });
    /* Cuando se pulsa reset */
    $("input[name=reset]").click(function() {
        $("input[name=start]").show();
        $("#tablero").empty();
        $("input[type!=button]").val("");
        $("#matches").html("0 MATCHES");
        $(".datospart").hide();
        clearInterval(contador);
    });
    /* Cuando se pulsa start */
    $("input[name=start]").click(function() {
        
        aux = "";
        imagenes = "";
        finimg = [];
        alt = [];
        cards = $("input[name=cards]").val();
        ncards = Number(cards);
        time = $("input[name=time]").val();
        ntime = Number(time);
        /* Se comprueban los campos */
        if (!(ncards < 11 && ncards > 2) || !expn.test(cards)) {
            errors += "Please enter a number of cards between 3 and 10.\n";
            $("input[name=cards]").val("");
        }
        if (!(ntime < 121 && ntime > 9) || !expn.test(time)) {
            errors += "Please enter a number of seconds between 10 and 121.\n";
            $("input[name=time]").val("");
        }
        if (errors) {
            /* Se avisa si hay errores */
            alert(errors);
            errors = "";
        } else {
            /* Escondemos el boton start */
            $("input[name=start]").hide();
            /* Si va todo bien */
            /* Cartas */
            /* Barajamos las posibles imagenes */
            img.sort(function(a, b) { return 0.5 - Math.random() });
            /* Las introfucimos duplicadas en un array */
            for (i = 0; i < ncards; i++) {
                finimg.push(img[i]);
                finimg.push(img[i]);
            }
            /* Barajamos las cartas duplicadas */
            finimg.sort(function(a, b) { return 0.5 - Math.random() });

            /* Creamos los alt para las cartas*/
            for (i = 0; i < finimg.length; i++) {
                aux = expalt.exec(finimg[i]).toString;
                aux= aux[0];
                if (aux) {
                    alt.push(aux.substring(1, aux.length - 1));
                }
                               
            }
            /* "Montamos" las imagenes */
            for (i = 0; i < finimg.length; i++) {
                imagenes += "<div class=\"carta col-1 matriz\">\n" +
                    "<img class=\"back\" src=\"" + finimg[i] + "\" alt=\"" + alt[i] + "\">\n" +
                    "</div>";
            }
            /* Metemos el tablero en la pagina */
            $("#tablero").html(imagenes);
            $(".back").toggle();
            /* Mostramos el contador y los datos */
            $(".datospart").show();
            /* Establecemos el tiempo */
            $("#timer").html(ntime);
            /* Iniciamos el contador */
            contar();
            /* Si se pulsa en una carta */
            $(".carta").click(function() {
                /* Se comprueba que la carta esta boca abajo y no hay mas de dos levantadas*/
                if (!$(this).find("img").hasClass('front') && !$(this).find("img").hasClass('ok') && !carta2) {
                    var este = $(this);
                    /* Se revela la carta */
                    $(this).find("img").toggle(function() {
                        if (!carta1) {
                            carta1 = este.find("img").attr('src');
                            este.find("img").addClass('front');
                        } else {
                            if (!carta2) {
                                carta2 = este.find("img").attr('src');
                                este.find("img").addClass('front');
                                /* Si es igual a una ya levantada */
                                if (!carta1.localeCompare(carta2)) {
                                    /* Se registra el acierto*/
                                    matches++;
                                    $("#matches").html(matches + " MATCHES");
                                    carta1 = "";
                                    carta2 = "";
                                    $(".front").addClass('ok');
                                    $(".front").removeClass('front');
                                    if (matches == ncards) {
                                        /* Si ya estan todas bocaarriba, se termina el juego */
                                        clearInterval(contador);
                                        alert("CONGRATS! YOU'VE WON\nNumber of matches: " + matches + "\nTime spent:" + (ntime - auxtime));
                                        matches = 0;
                                    }
                                } else {
                                    /*Si no son iguales*/
                                    $(".front").toggle();
                                    $(".front").removeClass('front');
                                    carta1 = "";
                                    carta2 = "";
                                }
                            }
                        }
                    });
                }
            });
        }
    });
});