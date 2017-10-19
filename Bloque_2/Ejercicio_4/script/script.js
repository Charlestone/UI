/*Declaración de variables*/
var modal = document.getElementsByClassName('modal')[0];
var log = document.getElementById('login');
var payment = document.getElementsByTagName('')

/*Tratamiento de eventos*/
window.addEventListener("load", showModal);
log.addEventListener("click", hideModal);

/*Funciones*/
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

function validateForm() {
    /*Comprobación de nombre*/
    var y = document.forms["formulario"]["NameLName"].value;
    if (y == "") {
        alert("Name and Last Name must be filled out");
    } 

    /*Comprobación email*/
    var x = document.forms["formulario"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
    } else {
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            alert("Not a valid e-mail address");
        } 
    }

    /*Comprobación dirección*/
    var a = document.forms["formulario"]["address"].value;
    if (a == "") {
        alert("Adress must be filled out");
    }

    //var b = document.forms["formulario"]["metodospago"].value;
 	//if (b == "") {
    //    alert("Payment method must be filled out");
    //    return false;
    //}
    
    /*Comprobación de check*/
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