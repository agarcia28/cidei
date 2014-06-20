$(document).ready(function(){
	$('.errorn').hide();
	$('.errore').hide();
	$('.errorp').hide();
	$('.errorpv').hide();
	$('.errorc').hide();
	$('.errorpa').hide();
	$('.errorci').hide();
	$('.resultc').hide();

	$('.button').bind('click', function(event){
		var name = $('.infoboxname').val();
		var email = $('.infoboxemail').val();
		var pass1 = $('.infoboxpass1').val();
		var pass2 = $('.infoboxpass2').val();
		var food = $('.infoboxf:checked').length;
		var pay = $('.infoboxpay:checked').length;
		var city = $('select option:selected').val();

		if(name.length < 1){
			$('.errorn').show();
			$('.errorn').text('Debe ingresar su nombre');
		}
		else if(name.length > 30){
			$('.errorn').show();
			$('.errorn').text('El nombre esta muy largo');
		}
		if(!valid_email(email)){
			$('.errore').show();
			$('.errore').text('El correo no es valido');
		}
		else if(email.length < 1){
			$('.errore').show();
			$('.errore').text('Debe ingresar un correo');
		}
		if(pass1 !== pass2){
			$('.errorp').show();
			$('.errorp').text('Las contrasenas no concuerdan');
		}
		if(pass1.length < 1){
			$('.errorpv').show();
			$('.errorpv').text('Debe ingresar la contrasena');
		}
		if(food === 0){
			$('.errorc').show();
			$('.errorc').text('Debe seleccionar al menos un alimento');
		}
		else if(food !== 0){
			$('.errorc').hide();
			var total = 0;
			$('.infoboxf:checked').each(function(){
				total = total + parseInt($(this).val());
				console.log(total);
			});
			$('.resultc').show();
			$('.resultc').text('Su total es: ' + total);
		}
		if(pay === 0){
			$('.errorpa').show();
			$('.errorpa').text('Debe seleccionar un medio de pago');
		}
		if(city === '0'){
			$('.errorci').show();
			$('.errorci').text('Debe seleccionar una ciudad');
		}
		
		event.preventDefault();
	});

	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}
});