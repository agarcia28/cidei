$(document).ready(function(){
	localStorage.clear();
	function Validate(){};

	Validate.prototype = {
		email : function(email){
			var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/)
			return pattern.test(email);
		},
		userid : function(uid){
			var pattern = new RegExp(/^[0-9]+$/);
			return pattern.test(uid);
		}
	}


	$('#nid').focus(function(){
		$(this).addClass('inputs');
	});
	$('#username').focus(function(){
		$(this).addClass('inputs');
	});
	$('.password').focus(function(){
		$(this).addClass('inputs');
	});
	$('.conf-password').focus(function(){
		$(this).addClass('inputs');
	});

	$('.nid-error').addClass('error');
	$('.nid-error').hide();

	$('.user-error').addClass('error');
	$('.user-error').hide();

	$('.password-error').addClass('error');
	$('.password-error').hide();

	$('.conf-password-error').addClass('error');
	$('.conf-password-error').hide();

	$('.email-error').addClass('error');
	$('.email-error').hide();

	$('.food-error').addClass('error');
	$('.food-error').hide();

	$('.pay-error').addClass('error');
	$('.pay-error').hide();

	$('.city-error').addClass('error');
	$('.city-error').hide();

	$('.nid-success').addClass('success');
	$('.nid-success').hide();

	$('.user-success').addClass('success');
	$('.user-success').hide();

	$('.password-success').addClass('success');
	$('.password-success').hide();

	$('.conf-password-success').addClass('success');
	$('.conf-password-success').hide();

	$('.email-success').addClass('success');
	$('.email-success').hide();

	$('.food-success').addClass('success');
	$('.food-success').hide();

	$('.pay-success').addClass('success');
	$('.pay-success').hide();

	$('.city-success').addClass('success');
	$('.city-success').hide();

	$('#buttons #info').remove();

	$('.button').bind('click', function(event){
		
		if ($('#info')){
			$('#openModal > div').empty();
			$('#info').remove();
			console.log("Si Existe Info");
		}else{
			console.log("No Existe Info");
		}

		var validate = new Validate();

		var data = $('#nid').val();

		if(validate.userid(data)){
			$('#nid').next().hide();
			$('.nid-error').next().hide();
			$('.nid-success').show();
			$('.nid-success').text('Documento Valido');
			localStorage.setItem('nid', data);
		} else{
			$('input#nid').addClass('error');
			$('.nid-success').hide();
			$('.nid-error').next().show();
			$('.nid-error').text('Indique su Documento de Identidad');
			event.preventDefault();
		}

		var data = $('#username').val();

		var len = data.length;

		if(len < 1 && data === ''){
			$('#username').next().show();
			$('.user-success').hide();
			$('.user-error').next().show();
			$('.user-error').text('Indique su(s) Nombre(s) y Apellido(s)');
			event.preventDefault();
		} else{
			$('#username').next().hide();
			$('.user-error').next().hide();
			$('.user-success').show();
			$('.user-success').text('Nombre(s) y Apellido(s) Valido(s)');
			localStorage.setItem('username', data);
		}

		var data = $('.password').val();

		var len = data.length;

		if(len < 1 && data === ''){
			$('.password').next().show();
			$('.password-success').hide();
			$('.password-error').next().show();
			$('.password-error').text('Indique una Contraseña');
			event.preventDefault();
		} else{
			$('.password').next().hide();
			$('.password-error').next().hide();
			$('.password-success').show();
			$('.password-success').text('Contraseña Valida');
			localStorage.setItem('password', data);
		}

		var confData = $('.conf-password').val();

		var len = confData.length;

		if(len < 1 && confData === ''){
			$('.conf-password').next().show();
			$('.conf.password-success').hide();
			$('.conf-password-error').next().show();
			$('.conf-password-error').text('Confirme la Contraseña');
			event.preventDefault();
		} else{
			$('.conf-password').next().hide();
			$('.conf-password-error').next().hide();
			$('.conf.password-success').show();
				$('.conf.password-success').text('Confirmación Contraseña Valida');

			if($('.password').val() !== $('.conf-password').val()){
				$('.conf-password').next().show();
				$('.conf.password-success').hide();
				$('.conf-password-error').next().show();
				$('.conf-password-error').text('La Contraseña no es Igual');
				event.preventDefault();
			} else{
				$('.conf-password').next().hide();
				$('.conf-password-error').next().hide();
			}
		}

		var data = $('.emailadd').val();

		if(validate.email(data)){
			$('.emailadd').next().hide();
			$('.email-error').next().hide();
			$('.email-success').show();
			$('.email-success').text('Email Valido');
			localStorage.setItem('email', data);
			
		} else{
			$('.emailadd').next().hide();
			$('.email-success').hide();
			$('.email-error').next().show();
			$('.email-error').text('El email es incorrecto');
			event.preventDefault();
		}

		var count = 0, meals = {};

		$('#checkboxes').find(':checked').each(function(){
			if($(this).is(':checked')){
				count += parseInt($(this).val());
				meals[$(this).attr('name')] = parseInt($(this).val());
			}
		});

		if(count === 0){
			$('.food-error').css({'margin' : 50}).show();
			$('.food-total').hide();
			$('.food-success').hide();
			$('.food-error').text('Debes Seleccionar un alimento');
			event.preventDefault();
		} else{
			$('.food-error').hide();
			$('.food-total').show();
			$('.food-total').text('El total de la compra: $' + count + ' M/Cte');
			$('.food-success').show();
			$('.food-success').text('Alimentos Validos');

			localStorage.setItem('total', count);
			localStorage.setItem('meals', JSON.stringify(meals));
		}

		count = 0;

		$('#radios').find(':radio').each(function(){
			if($(this).is(':checked')){
				count++;
				localStorage.setItem('paymode', $(this).val());
			}
		});

		if(count === 0){
			$('pay-error').css({'margin-left' : 50}).show();
			$('.pay-success').hide();
			$('.pay-error').text('Debe Seleccionar un Modo de Pago');
			event.preventDefault();
		} else{
			$('.pay-error').hide();
			$('.pay-success').show();
			$('.pay-success').text('Modo de Pago Valido');
		}

		count = $('select option:selected').val();

		if(count == '0'){
			$('.city-error').show();
			$('.city-success').hide();
			$('.city-error').text('Debe Seleccionar una Ciudad');
			event.preventDefault();
		} else{
			$('.city-error').hide();
			$('.city-success').show();
			$('.city-success').text('Ciudad Valida');
			localStorage.setItem('city', count);

			$('#buttons').append(
				'<a id="info" href="#openModal"> Ver detalle del Pedido</a>' 
			);
			
			//$('#info').show();

			$('.inputs').removeClass('error');
			$('.inputs').addClass('success');
		}
		//event.preventDefault();
	});

	$(document).on('click', '#info', function(){
		//$('#openModal > div').empty();

		$('#openModal > div').append(
			'<h2Detalle del Pedido</h2>' +
			'<ul>' +
			'<li>Su Documento es: ' + localStorage.getItem('nid') + '</li>' +
			'<li>Su Nombre es: ' + localStorage.getItem('username') + '</li>' +
			'<li>Su email es: ' + localStorage.getItem('email') + '</li>' +
			'<li id="listMeals">Los ALimentos Solicitados son: ' + '<ul></ul></li>' +
			'<li>El Modo de Pago es: ' + localStorage.getItem('paymode') + '</li>' +
			'<li>La Ciudad Donde Vive es: ' + localStorage.getItem('city') + '</li></ul>' +
			'<div><a href="#close" title="Close" class="close">X</a></div>' +
			'<!--a id="info" href="#openModal"> Ver detalle del Pedido</a-->'
			);

		var meals = JSON.parse(localStorage.getItem('meals'));

		$.each(meals, function(key, value){
			$('#listMeals > ul').append('<li>El Producto ' + key + ' cuenta $' + value + ' M/Cte</li>');
		});
	});
});