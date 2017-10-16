
var payment = document.getElementById('payment');
var transferencia = document.getElementById('transferencia');
var tarjeta = document.getElementById('tarjeta');
var paypal = document.getElementById('paypal');

payment.addEventListener("change", metodospago);


function validateForm() {
    var x = document.forms["formulario"]["email"].value;
    if (x == "") {
        alert("e-mail must be filled out");
        return false;
    }
}

function metodospago(){

	switch(payment.value){

		case 'transferencia':
			paypal.style.display = "none";
			tarjeta.style.display = "none";
			transferencia.style.display = "list-item";
			break;	

		case 'tarjeta':
			paypal.style.display = "none";
			transferencia.style.display = "none";
			tarjeta.style.display = "list-item";	
			break;

		case 'paypal':
			transferencia.style.display = "none";
			tarjeta.style.display = "none";
			paypal.style.display = "list-item";	
			break;
	}
		
}
