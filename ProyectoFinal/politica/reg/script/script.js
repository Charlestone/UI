$(document).ready(function() {
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