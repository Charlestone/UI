$(document).ready(function() {
  $("#body").ready(function(){
    //El siguiente par de lineas esta puesto por firefox
    $("#languages").val("choose");
    $("#languages").val("choose");
    $(".modal").show();

  });
  
  $("#login").click(function(){
    $(".modal").hide();
    $("input[name=email]").val($("input[name=emailm]").val());
    $("input[name=password]").val($("input[name=passwordm]").val());
  });

  $("#payment").change(function() {
    switch($("#payment").val()){
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