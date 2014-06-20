$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();

	$('.submit').bind('click', function(event){
		var count = $('select option:selected').val();

		if(count === '0' || count === undefined){
			$('p.result').hide();
			$('.error').show();
			$('.error').text('Debe seleccionar al menos un elemento');
		}
		else{
			var selectOptions = [];
			$('select option:selected').each(function(){
				selectOptions.push(' ' + $(this).text());
			});

			$('.error').hide();
			$('p.result').show();
			$('p.result').text('Ud. Selecciono el alimento: ' + selectOptions);
		}
		event.preventDefault();
	});
});