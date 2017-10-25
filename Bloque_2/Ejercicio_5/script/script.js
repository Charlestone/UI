

$(document).ready(function(){
    var likes =$("p[id=likes]").text();
    var numlikes = Number(likes);
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
        $(".posdescripcion1").show();
    });

    $("img[name=mas2]").click(function(){
        $(".posdescripcion2").show();
    });

    $("img[name=mas3]").click(function(){
        $(".posdescripcion3").show();
    });


   /* $(window).click(function(){
        if($('#descripcion').attr("display")!="none"){
        $('#descripcion').hide();
        }
    });*/
});




    
 