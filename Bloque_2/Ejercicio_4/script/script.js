var modal = document.getElementsByClassName('modal')[0];
var close = document.getElementsByClassName('close')[0];
window.addEventListener("load", showModal);
close.addEventListener("click", hideModal);

function showModal() {
	modal.style.display = "block";
}

function hideModal() {
	modal.style.display = "none";
	document.getElementById('f-username').value = document.getElementById('modal-username').value;
	document.getElementById('f-password').value = document.getElementById('modal-password').value;
}