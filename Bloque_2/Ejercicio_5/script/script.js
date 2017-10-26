

$(document).ready(function(){
    var likes =$("p[id=likes]").text();
    var numlikes = Number(likes);

    var oculto1 = true;
    var oculto2 = true;
    var oculto3 = true;


    $("img[name=corazon]").click(function () {
    numlikes++;
    numlikes.toString();
    $("p[id=likes]").text(numlikes);
    });
    var shares = $("p[id=shares]").text();
    var numshares = Number(shares);
    $("img[name=compartir]").click(function(){
      numshares++;
      numshares.toString();
      $("p[id=shares]").text(numshares);


    });

     $("img[name=mas1]").click(function(){
        if(oculto1 == false){
        $("#descripcion1").hide();
        oculto1 = true;
        } else { 
            $("#descripcion1").show();
            oculto1=false;
        }

    });

    
    $("img[name=mas2]").click(function(){

        if(oculto2 == false){
        $("#descripcion2").hide();
        oculto2 = true;
        } else { 
            $("#descripcion2").show();
            oculto2=false;
        }

    });

    $("img[name=mas3]").click(function(){
        if(oculto3 == false){
        $("#descripcion3").hide();
        oculto3 = true;
        } else { 
            $("#descripcion3").show();
            oculto3=false;
        }

    });

    /*Hago la imagen del primer video draggable*/
    $(function(){
        $("#draggable").draggable();
    });



});




    
 