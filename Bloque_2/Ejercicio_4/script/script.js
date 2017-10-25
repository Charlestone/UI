/*--Variables--*/
var payment = document.getElementById('payment');
var transferencia = document.getElementById('transferencia');
var tarjeta = document.getElementById('tarjeta');
var paypal = document.getElementById('paypal');
var form = document.getElementById('main');

payment.addEventListener("change", metodospago);
form.addEventListener("submit", validateForm);


function validateForm() {

    /*Comprobación del usuario*/
    var a = document.forms["formulario"]["username"].value;
    if(a == "") {
        alert("Username must be filled out");
    }

    /*Comprobación de la contraseña*/
    var b = document.forms["formulario"]["password"].value;
    if(b == "") {
        alert("Password must be filled out");
    }
    /*Que la contraseña tenga un máximo de 8 caracteres 
    donde los permitidos son las letras a-z y dígitos 0-9*/
    var x = document.forms["formulario"]["password"].value;
    if(x.length > 8) {
       alert("Error: Password must contain a maximum of eight characters");       
    }

    /*if(x != ([a-z] || [0-9])){
        alert("Error: Password can only contain leters (a-z) and numbers (0-9)");
    }*/



    /*Comprobación de nombre*/
    var c = document.forms["formulario"]["NameLName"].value;
    if (c == "") {
        alert("Name and Last Name must be filled out");
    } 

    /*Comprobación email*/
    var d = document.forms["formulario"]["email"].value;
    if (d == "") {
        alert("Email must be filled out");
    } else {
        var atpos = d.indexOf("@");
        var dotpos = d.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=d.length) {
            alert("Not a valid e-mail address");
        } 
    }

    /*Comprobación dirección*/
    var e = document.forms["formulario"]["address"].value;
    if (e == "") {
        alert("Adress must be filled out");
    }

    //var b = document.forms["formulario"]["metodospago"].value;
	//if (b == "") {
    //    alert("Payment method must be filled out");
    //    return false;
    //}
    /*Comprobación de check*/
    var f = document.getElementById("myCheck").checked;
    if(f == false){
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
