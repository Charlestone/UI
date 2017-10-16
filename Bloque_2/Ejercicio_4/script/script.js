
var payment = document.getElementById('payment');
var transferencia = document.getElementById('transferencia');
var tarjeta = document.getElementById('tarjeta');
var paypal = document.getElementById('paypal');

payment.addEventListener("change", metodospago);


function validateForm() {
    var x = document.forms["formulario"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }

    var y = document.forms["formulario"]["NameLName"].value;
    if (y == "") {
        alert("Name and Last Name must be filled out");
        return false;
    } 

    var a = document.forms["formulario"]["adress"].value;
    if (a == "") {
        alert("Adress must be filled out");
        return false;
    }

    var b = document.forms["formulario"]["metodospago"].value;
	if (b == "") {
        alert("Payment method must be filled out");
        return false;
    }
    
   var c = document.getElementById("myCheck").checked;
   if(c == false){
		alert('You must agree to the terms first.');
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
