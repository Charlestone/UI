

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
    var mostrardesc1 = false;
    $("img[name=mas1]").click(function(){
        $("#descripcion1").toggle();

        if(mostrardesc1 == false){
        $(".mas").attr('src','../Ejercicio_5/img/menos.png');
        mostrardesc1= true;
        }else{
            $(".mas").attr('src','../Ejercicio_5/img/mas.png');
            mostrardesc1 = false;
        }

    });

    $("img[name=mas2]").click(function(){
        $("#descripcion2").toggle();

    });

    $("img[name=mas3]").click(function(){
        $("#descripcion3").toggle();

    });

   

    /*Hago la imagen del primer video draggable y el contendeor que contiene
    el vídeo grande*/
    $(function(){
        $("#draggable").draggable();
        $("#droppable"). droppable({
            drop: function(event, ui){
                var dirvideo = $("#draggable").attr("urlvideo");
                var $video = $("#droppable");
                $video.empty().append('<source src="'+dirvideo+'" type="video/mp4" />');
                $video.get(0).load();
                $video.get(0).play(); 
            }
        });


    });

 

    /*Hago la imagen del primer video droppable*/



});




    
 