/*Declaración de variables*/
var modal = document.getElementsByClassName('modal')[0];
//usar para cuando se intenta acceder sin cuenta
//var close = document.getElementsByClassName('close')[0]; 
var log = document.getElementById('login');

window.addEventListener("load", showModal);
log.addEventListener("click", hideModal);

function showModal() {
	modal.style.display = "block";
}

function hideModal() {
	modal.style.display = "none";
	if (document.getElementById('modal-email').value != null && document.getElementById('modal-email').value != "") {
		document.getElementById('f-email').value = document.getElementById('modal-email').value;
	}
	if (document.getElementById('modal-password').value != null && document.getElementById('modal-password').value != "") {
		document.getElementById('f-password').value = document.getElementById('modal-password').value;
	}
	
}