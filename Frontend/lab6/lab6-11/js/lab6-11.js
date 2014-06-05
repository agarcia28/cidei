$(document).ready(function(){
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

	$('nid-error').addClass('error');
	$('nid-error').hide();

	$('user-error').addClass('error');
	$('user-error').hide();

	$('password-error').addClass('error');
	$('password-error').hide();

	$('conf-password-error').addClass('error');
	$('conf-password-error').hide();

	$('email-error').addClass('error');
	$('email-error').hide();

	$('food-error').addClass('error');
	$('food-error').hide();

	$('pay-error').addClass('error');
	$('pay-error').hide();

	$('city-error').addClass('error');
	$('city-error').hide();

	$('#buttons #info').remove();

	$('.button').bind('click', function(event){
		var validate = new Validate();

		var data = $('#nid').val();

		if(validate.userid(data)){
			$('#nid').next().hide();
			$('#nid-error').next().hide();
			localStorage.setItem('nid', data);
		} else{
			$('input#nid').addClass('error');
			$('.nid-error').next().show();
			$('.nid-error').text('Indique su Documento de Identidad');
		}

		var data = $('#username').val();

		var len = data.length;

		if(len < 1 && data === ''){
			$('#username').next().show();
			$('.user-error').next().show();
			$('.user-error').text('Indique su(s) Nombre(s) y Apellido(s)');
		} else{
			$('#username').next().hide();
			$('.user-error').next().hide();
			localStorage.setItem('username', data);
		}

		var data = $('.password').val();

		var len = data.length;

		if(len < 1 && data === ''){
			$('.password').next().show();
			$('.password-error').next().show();
			$('.password-error').text('Indique una Contraseña');
		} else{
			$('.password').next().hide();
			$('.password-error').next().hide();
			localStorage.setItem('password', data);
		}

		var confData = $('.conf-password').val();

		var len = confData.length;

		if(len < 1 && confData === ''){
			$('.conf-password').next().show();
			$('.conf-password-error').next().show();
			$('.conf-password-error').text('Confirme la Contraseña');
		} else{
			$('.conf-password').next().hide();
			$('.conf-password-error').next().hide();

			if($('.password').val() !== $('.conf-password').val()){
				$('.conf-password').next().show();
				$('.conf-password-error').next().show();
				$('.conf-password-error').text('La Contraseña no es Igual');
			} else{
				$('.conf-password').next().hide();
				$('.conf-password-error').next().hide();
			}
		}

		var data = $('.emailadd').val();

		if(validate.email(data)){
			$('.emailadd').next().hide();
			$('.email-error').next().hide();
			localStorage.setItem('email', data);
			
		} else{
			$('.emailadd').next().hide();
			$('.email-error').next().show();
			$('.email-error').text('El email es incorrecto');
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
			$('.food-error').text('Debes Seleccionar un alimento');
		} else{
			$('.food-error').hide();
			$('.food-total').show();
			$('.food-total').text('El total de la compra: $' + count + ' M/Cte');

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
			$('.pay-error').text('Debe Seleccionar un Modo de Pago');
		} else{
			$('.pay-error').hide();
		}

		count = $('select option:selected').val();

		if(count == '0'){
			$('.city-error').show();
			$('.city-error').text('Debe Seleccionar una Ciudad');
		} else{
			$('.city-error').hide();
			localStorage.setItem('city', count);

			$('#buttons').append(
				'<a id="info" href="#openModal">Ver Detalle del Pedido</a>'
			);

			$('.inputs').removeClass('error');
			$('.inputs').addClass('success');
		}
		event.preventDefault();
	});

	$(document).on('click', '#info', function(){
		$('#openModal > div').append(
			'<h2Detalle del Pedido</h2>' +
			'<ul>' +
			'<li>Su Documento es: ' + localStorage.getItem('nid') + '</li>' +
			'<li>Su Nombre es: ' + localStorage.getItem('username') + '</li>' +
			'<li>Su email es: ' + localStorage.getItem('email') + '</li>' +
			'<li id="listMeals">Los ALimentos Solicitados son: ' + '<ul></ul></li>' +
			'<li>El Modo de Pago es: ' + localStorage.getItem('paymode') + '</li>' +
			'<li>La Ciudad Donde Vive es: ' + localStorage.getItem('city') + '</li></ul>'
			);

		var meals = JSON.parse(localStorage.getItem('meals'));

		$.each(meals, function(key, value){
			$('#listMeals > ul').append('<li>El Producto ' + key + ' cuenta $' + value + ' M/Cte</li>');
		});
	});
});