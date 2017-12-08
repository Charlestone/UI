
$(document).ready(function() {
$("#corazon1").hide();
$("#compartir1").hide();
$("#listas").hide();
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

    /* Si se hace click en el corazon */
    $("#corazon").click(function() {
        numlikes++;
        numlikes.toString();
        $("p[id=likes]").text(numlikes);
        $("#corazon").hide();
        $("#corazon1").show();
    });
    /* Si se hace click en el icono de compartir */
    $("#compartir").click(function() {
        numshares++;
        numshares.toString();
        $("p[id=shares]").text(numshares);
        $("#compartir").hide();
        $("#compartir1").show();
    });
        /* Si se hace click en el corazon coloreado se reduce */
    $("#corazon1").click(function() {
        numlikes--;
        numlikes.toString();
        $("p[id=likes]").text(numlikes);
        $("#corazon").show();
        $("#corazon1").hide();
    });
    /* Si se hace click en el icono de compartir coloreado se reduce */
    $("#compartir1").click(function() {
        numshares--;
        numshares.toString();
        $("p[id=shares]").text(numshares);
        $("#compartir").show();
        $("#compartir1").hide();
    });
    /* Valores para saber donde esta el raton*/
    var ejeX=0;
    var ejeXespecial=0;
    var ejeY=0;
    /*Funcion para obtener la posicion del raton*/
    $(document).mousemove( function(e) {
            ejeX = e.pageX;
            ejeXespecial = e.pageX-150;
            ejeY = e.pageY;
        });
    /* Funciones para mostrar las listas donde añadir el video*/
    $(".añadir").mouseover(function(){
            $('#listas').css({'top':ejeY,'left':ejeX}).fadeIn("fast"); 
    }); 
        $("#mas3").mouseover(function(){
            $('#listas').css({'top':ejeY,'left':ejeXespecial}).fadeIn("fast"); 
    });
    /*Funcion para ocultar el div con las listas*/
    $(document).click(function(){
        if ( $("#listas").css('display') != 'none' ){
                $("#listas").hide();
        } 
    });
    /*Funcion para que al clickar en el div de las listas no desaparezca*/
    $('#listas').click(function(event){
     event.stopPropagation();
 });
    $(".corazon").click(function() {
       if($(this).attr("src") == "./img/corazon.png"){
            $(this).attr("src", "./img/corazon1.png");
       }else{
            $(this).attr("src", "./img/corazon.png");
       }
    });
    /* Si se hace click en el icono de compartir */
        $(".compartir").click(function() {
       if($(this).attr("src") == "./img/compartir.png"){
            $(this).attr("src", "./img/compartir1.png");
       }else{
            $(this).attr("src", "./img/compartir.png");
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
                if ( $("#compartir1").css('display') != 'none' ){       
                        $("#compartir").show();
                        $("#compartir1").hide();
                }
                if ( $("#corazon1").css('display') != 'none' ){       
                        $("#corazon").show();
                        $("#corazon1").hide();
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