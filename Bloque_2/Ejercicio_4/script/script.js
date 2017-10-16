var modal = document.getElementsByClassName('modal')[0];
var close = document.getElementsByClassName('close')[0];
close.addEventListener("click", hideModal);
window.addEventListener("load", showModal);

function showModal() {
	modal.style.display = "block";
}

function hideModal() {
	modal.style.display = "none";
}