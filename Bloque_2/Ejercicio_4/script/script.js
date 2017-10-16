/*Declaración de variables*/
var modal = document.getElementsByClassName('modal')[0];
//usar para cuando se intenta acceder sin cuenta
var close = document.getElementsByClassName('close')[0]; 
var log = document.getElementById('login');

window.addEventListener("load", showModal);
close.addEventListener("click", hideModal);

function showModal() {
	modal.style.display = "block";
}

function hideModal() {
	modal.style.display = "none";
	document.getElementById('f-email').value = document.getElementById('modal-email').value;
	document.getElementById('f-password').value = document.getElementById('modal-password').value;
}