

/*var numlikes = parseInt(likes);*/

$(document).ready(function(){
    var likes =$("p[id=likes]").text();
    var numlikes = Number(likes);
    $("img[name=corazon]").click(function () {
    //$("img").click(function () {
    //$("#idimagen").click(function () {
    //$("img[class=claseimagen]").click(function () {
    //$(".claseimagen").click(function () {
    window.alert(likes);
    window.alert(numlikes);
    numlikes++;
    numlikes.toString();
    $("p[id=likes]").text(numlikes);
    });
});