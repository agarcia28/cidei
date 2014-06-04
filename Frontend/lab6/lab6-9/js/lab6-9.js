$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();

	$('.submit').bind('click', function(event){
		var data = $('.infobox').val();
		if(valid_email(data)){
			$('.error').hide();
			localStorage.setItem('email', data);
			$('.result').show();
			$('.result').html('<h1>El valor del correo electronico es: ' + localStorage.getItem('email') + '</h1>');
		}
		else{
			$('.result').hide();
			$('.error').show();
			$('.error').html('<h1>Ingrese una direccion de correo valida</h1>');
		}
		
		event.preventDefault();
	});

	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}
});