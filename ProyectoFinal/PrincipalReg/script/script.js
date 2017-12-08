$(document).ready(function() {

/*Variables para cada funcion de likes y shares*/
 var    corazon1 = true,
        corazon2 = true,
        corazon3 = true,
        corazon4 = true,
        corazon5 = true,
        corazon6 = true,
        compartir1 = true,
        compartir2 = true,
        compartir3 = true,
        compartir4 = true,
        compartir5 = true,
        compartir6 = true;


    /* Para el logo */
    $("#logo").click(function(){
        window.location.href= './basenr.html';
    });
    /* Para el menu desplegable */
    $(".menu").click(function() {
        $(".dropdown-content").toggle();
    });

    $("#userphoto").click(function(){
        $(".dropdown-content-1").toggle();
    });


        /* Si se hace click en el corazon1 */
    $("#corazon1").click(function() {
        if (corazon1) {
            $("#corazon1").attr('src', './img/corazonColoreado.png');
            corazon1 = false;
            return;
        }
        else{
            $("#corazon1").attr('src', './img/corazon.png');
            corazon1 = true;
            return;
        }
    });

    /* Si se hace click en el corazon2 */
    $("#corazon2").click(function() {
        if (corazon2) {
            $("#corazon2").attr('src', './img/corazonColoreado.png');
            corazon2 = false;
            return;
        }
        else{
            $("#corazon2").attr('src', './img/corazon.png');
            corazon2 = true;
            return;
        }
    });

        /* Si se hace click en el corazon3 */
    $("#corazon3").click(function() {
        if (corazon3) {
            $("#corazon3").attr('src', './img/corazonColoreado.png');
            corazon3 = false;
            return;
        }
        else{
            $("#corazon3").attr('src', './img/corazon.png');
            corazon3 = true;
            return;
        }
    });

        /* Si se hace click en el corazon4 */
    $("#corazon4").click(function() {
        if (corazon4) {
            $("#corazon4").attr('src', './img/corazonColoreado.png');
            corazon4 = false;
            return;
        }
        else{
            $("#corazon4").attr('src', './img/corazon.png');
            corazon4 = true;
            return;
        }
    });

        /* Si se hace click en el corazon5 */
    $("#corazon5").click(function() {
        if (corazon5) {
            $("#corazon5").attr('src', './img/corazonColoreado.png');
            corazon5 = false;
            return;
        }
        else{
            $("#corazon5").attr('src', './img/corazon.png');
            corazon5 = true;
            return;
        }
    });

        /* Si se hace click en el corazon6 */
    $("#corazon6").click(function() {
        if (corazon6) {
            $("#corazon6").attr('src', './img/corazonColoreado.png');
            corazon6 = false;
            return;
        }
        else{
            $("#corazon6").attr('src', './img/corazon.png');
            corazon6 = true;
            return;
        }
    });

        /* Si se hace click en el corazon7 */
    $("#corazon7").click(function() {
        if (corazon7) {
            $("#corazon7").attr('src', './img/corazonColoreado.png');
            corazon7 = false;
            return;
        }
        else{
            $("#corazon7").attr('src', './img/corazon.png');
            corazon7 = true;
            return;
        }
    });

        /* Si se hace click en el corazon8 */
    $("#corazon8").click(function() {
        if (corazon8) {
            $("#corazon8").attr('src', './img/corazonColoreado.png');
            corazon8 = false;
            return;
        }
        else{
            $("#corazon8").attr('src', './img/corazon.png');
            corazon8 = true;
            return;
        }
    });

        /* Si se hace click en el corazon9 */
    $("#corazon9").click(function() {
        if (corazon9) {
            $("#corazon9").attr('src', './img/corazonColoreado.png');
            corazon9 = false;
            return;
        }
        else{
            $("#corazon9").attr('src', './img/corazon.png');
            corazon9 = true;
            return;
        }
    });



        /* Si se hace click en el compartir1 */
    $("#compartir1").click(function() {
        if (compartir1) {
            $("#compartir1").attr('src', './img/compartirColoreado.png');
            compartir1 = false;
            return;
        }
        else{
            $("#compartir1").attr('src', './img/compartir.png');
            compartir1 = true;
            return;
        }
    });
        /* Si se hace click en el compartir2 */
    $("#compartir2").click(function() {
        if (compartir2) {
            $("#compartir2").attr('src', './img/compartirColoreado.png');
            compartir2 = false;
            return;
        }
        else{
            $("#compartir2").attr('src', './img/compartir.png');
            compartir2 = true;
            return;
        }
    });

        /* Si se hace click en el compartir3 */
    $("#compartir3").click(function() {
        if (compartir3) {
            $("#compartir3").attr('src', './img/compartirColoreado.png');
            compartir3 = false;
            return;
        }
        else{
            $("#compartir3").attr('src', './img/compartir.png');
            compartir3 = true;
            return;
        }
    });

        /* Si se hace click en el compartir4 */
    $("#compartir4").click(function() {
        if (compartir4) {
            $("#compartir4").attr('src', './img/compartirColoreado.png');
            compartir4 = false;
            return;
        }
        else{
            $("#compartir4").attr('src', './img/compartir.png');
            compartir4 = true;
            return;
        }
    });

        /* Si se hace click en el compartir5 */
    $("#compartir5").click(function() {
        if (compartir5) {
            $("#compartir5").attr('src', './img/compartirColoreado.png');
            compartir5 = false;
            return;
        }
        else{
            $("#compartir5").attr('src', './img/compartir.png');
            compartir5 = true;
            return;
        }
    });

        /* Si se hace click en el compartir6 */
    $("#compartir6").click(function() {
        if (compartir6) {
            $("#compartir6").attr('src', './img/compartirColoreado.png');
            compartir6 = false;
            return;
        }
        else{
            $("#compartir6").attr('src', './img/compartir.png');
            compartir6 = true;
            return;
        }
    });

        /* Si se hace click en el compartir7 */
    $("#compartir7").click(function() {
        if (compartir7) {
            $("#compartir7").attr('src', './img/compartirColoreado.png');
            compartir7 = false;
            return;
        }
        else{
            $("#compartir7").attr('src', './img/compartir.png');
            compartir7 = true;
            return;
        }
    });

        /* Si se hace click en el compartir8 */
    $("#compartir8").click(function() {
        if (compartir8) {
            $("#compartir8").attr('src', './img/compartirColoreado.png');
            compartir8 = false;
            return;
        }
        else{
            $("#compartir8").attr('src', './img/compartir.png');
            compartir8 = true;
            return;
        }
    });

        /* Si se hace click en el compartir9 */
    $("#compartir9").click(function() {
        if (compartir9) {
            $("#compartir9").attr('src', './img/compartirColoreado.png');
            compartir9 = false;
            return;
        }
        else{
            $("#compartir9").attr('src', './img/compartir.png');
            compartir9 = true;
            return;
        }
    });
});