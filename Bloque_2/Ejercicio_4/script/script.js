$(document).ready(function() {
  $("#body").ready(function(){
    //El siguiente par de lineas esta puesto por firefox
    $(".modal").show();

  });
  var errors = "";
  var email = /[a-z0-9]+@([a-z0-9]+\.)+[a-z]{2,4}/;
  var password = /[a-z0-9]{1,8}/;
  $("#login").click(function(){
    if (!email.test($("#modal-email").val())) {
      errors+= "Email inválido.\n";
    }
    if (!password.test($("#modal-password").val())) {
      errors+= "Contraseña inválida.\n";
    }
    if (!errors) {
      $(".modal").hide();
      $("input[name=email]").val($("input[name=emailm]").val());
      $("input[name=password]").val($("input[name=passwordm]").val());  
    } else {
      alert(errors + "Por favor, introduzca de nuevo los campos inválidos.");
    }
      
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