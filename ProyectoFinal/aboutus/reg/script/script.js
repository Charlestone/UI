$(document).ready(function() {
    /* Para poner el nombre del usuario */
    var cookies = document.cookie.split(";");
    if (cookies[0]) {
        var forms = cookies[0].match(/\$.+?\#/g); 
        $("#username").text(forms[0].substr(1, forms[0].length - 2));
    }    
     /* Para el logo */
    $("#logo").click(function(){
        window.location.href= '../../principal/reg/principalr.html';
    });
    /* Para el menu desplegable */
    $(".menu").click(function() {
        $(".dropdown-content").toggle();
    });
    /* Para el menu de usuario*/
    $("#userphoto").click(function(){
        $(".dropdown-content-1").toggle();
    });
});