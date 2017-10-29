

$(document).ready(function(){
    var likes =$("p[id=likes]").text();
    var numlikes = Number(likes);

    var oculto1 = true;
    var oculto2 = true;
    var oculto3 = true;

    /*JS para la ventana modal*/
    /*$("#body").ready(function () {
        //El siguiente par de lineas esta puesto por firefox
        $(".modal").show();

    });


    $("#login").click(function () {
        /*Validacion de email en la ventana modal*/
       /* if (!email.test($("#modal-email").val())) {
            errors += "Invalid email.\n";
        }
        /*Validacion de contraseña en la ventana modal
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

*/

    $("#corazon").click(function () {
    numlikes++;
    numlikes.toString();
    $("p[id=likes]").text(numlikes);
    });
    var shares = $("p[id=shares]").text();
    var numshares = Number(shares);
    $("#compartir").click(function(){
      numshares++;
      numshares.toString();
      $("p[id=shares]").text(numshares);
    });

    var mostrardesc1 = false;
    $("#mas1").click(function(){
        $("#descripcion1").toggle();

        if(mostrardesc1 == false){
        $("#mas1").attr('src','../Ejercicio_5/img/menos.png');
        mostrardesc1= true;
        }else{
            $("#mas1").attr('src','../Ejercicio_5/img/mas.png');
            mostrardesc1 = false;
        }

    });
    var mostrardesc2 = false;

    $("#mas2").click(function(){
        $("#descripcion2").toggle();
        if(mostrardesc2 == false){
        $("#mas2").attr('src','../Ejercicio_5/img/menos.png');
        mostrardesc2= true;
        }else{
            $("#mas2").attr('src','../Ejercicio_5/img/mas.png');
            mostrardesc2 = false;
        }
    });

    var mostrardesc3 = false;
    $("#mas3").click(function(){
        $("#descripcion3").toggle();
        if(mostrardesc3 == false){
        $("#mas3").attr('src','../Ejercicio_5/img/menos.png');
        mostrardesc3= true;
        }else{
            $("#mas3").attr('src','../Ejercicio_5/img/mas.png');
            mostrardesc3 = false;
        }
    });



    /*var videosm = ["./img/suits.mp4", "./img/homeland.mp4", "./img/strangerthings.mp4", "./img/billions.mp4"];
    var videoso = ["./img/suits.ogg", "./img/homeland.ogg", "./img/strangerthings.ogg", "./img/billions.ogg"];
    var foto = ["./img/suits.png"], "./img/homeland.png", "./img/strangerthings.png", "./img/billions.png"];
    var desc = ["Mike Ross es un joven con una mente brillante que siempre ha soñado con ser abogado. Por un incidente desafortunado es expulsado de la facultad antes de graduarse. Sin embargo, su prodigiosa memoria fotográfica le permite ganarse la vida con un trabajo poco corriente y fuera de la ley, suplantando a otros en los exámenes admisión para la escuela de derecho. Envuelto en un encargo puntual de tráfico de drogas, Mike sospecha que le han tendido una trampa, pero consigue deshacerse de la policía al colarse en una entrevista de trabajo para uno de los bufetes más importantes de Nueva York.",
    "Carrie Mathison, agente de la C.I.A., lleva a cabo una investigación poco ortodoxa sobre las amenazas de la seguridad de Estados Unidos en Irak, hecho que provoca una grave crisis diplomática y que la inquisitiva joven sea apartada de la labor de campo.",
    "Stranger Things transcurre en Hawking, típico pueblo norteamericano donde nunca pasa nada. Will Byers, un joven que vuelve a casa después de jugar una partida de rol con sus amigos, desaparece misteriosamente. Por otro lado, cerca del pueblo hay una central energética que esconde un centro de investigación del gobierno del cual se escapa un extraño ser y una niña.",
    "Billions es un drama que examina con mirada forense el mundo de las altas finanzas mediante el seguimiento de la colisión que se avecina entre dos figuras titánicas de gran poder."];
    var titulos = ["SUITS", "HOMELAND", "STRANGER THINGS", "BILLIONS"];
    var dragged;
    var dropped;*/





    $(function(){

        /* Variables para el vídeo principal*/
        var titulop = $(".titulop");
        var descrp = $(".descrp");
        var videop = $(".videop");
        $(".draggable").draggable({
            revert : true
        });

        $(".droppable").droppable({

            accept: ".draggable",

            drop: function(event, ui){
            /*Variable para el vídeo no principal*/
                var titulonp = $("ui.draggable").find(".titulonp").html();
                var descrnp = $("ui.draggable").find(".descrnp").html();
                var videonp = $("ui.draggable").find(".videonp");
            

                $("ui.draggable").find(".titulonp").html(titulop);
                $("ui.draggable").find(".descrnp").html(descrp);


                /*$("ui.draggable").find(".videonp").remove();
                $("ui.draggable").prepend($("ui.draggable").find(".videonp").html(videop));
*/


            }
        });


    });







/* var sm = $("#sourcem").attr("src");
                dropped = sm.substring(sm.length - 7, sm.length -5);
                var si = ui.draggable:first-child.attr("src");
                dragged = si.substring(si.length - 7. sm.length -5);

                switch(){
                    case 
                }  */

});




    
 