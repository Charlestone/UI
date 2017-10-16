var body = document.getElementsByTagName('body')[0];
var modal = document.getElementsByClassName('modal')[0];
body.addEventListener("load",showModal);

//body.addEventListener("unload",);


function showModal() {
	modal.style.display = "block";
}