$(document).ready(function() {

    /* Variables */
    var likes = $("#likes").text();
    var numlikes = Number(likes);
    var shares = $("#shares").text();
    var numshares = Number(shares);
    var eachlikes = [0, 0, 0, 0];
    var eachshares = [0, 0, 0, 0];
    var videosm = ["./img/suits.mp4", "./img/homeland.mp4", "./img/strangerthings.mp4", "./img/billions.mp4"];
    var videoso = ["./img/suits.ogg", "./img/homeland.ogg", "./img/strangerthings.ogg", "./img/billions.ogg"];
    var foto = ["./img/suits.png", "./img/homeland.png", "./img/strangerthings.png", "./img/billions.png"];
    var mostrardesc1 = false;
    var mostrardesc2 = false;
    var mostrardesc3 = false;


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
                likes = $("#likes").text();
                numlikes = Number(likes);
                shares = $("#shares").text();
                numshares = Number(shares);
            }
        });
    });
    /*Funcion para que muestre una modal al usuario no registrado*/
   $(".funcionalidad").click(function(){
       $("#noreg").show();
   });

});