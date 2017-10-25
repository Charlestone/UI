
var likes = document.getElementById('likes').value;
var numlikes = Number(likes);

$(document).ready(function(){

    $("img[name=corazon]").click(function () {
    //$("img").click(function () {
    //$("#idimagen").click(function () {
    //$("img[class=claseimagen]").click(function () {
    //$(".claseimagen").click(function () {
    
    numlikes++;
    $("p[id=likes]").val(numlikes);
    });
});