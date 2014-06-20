$(document).ready(function(){
	$('.error').hide();
	$('.submit').click(function(event){
		$('.infobox').each(function(){
			var data = $(this).val();
			var len = data.length;

			if(len < 1){
				if($(this).attr('name') === 'userid'){
					$(this).parent().find('.error').show().text('El usuario no esta diligenciado');
				}
				else{
					$(this).parent().find('.error').show().text('La contrasena no esta diligenciada');
				}
			}
			else{
				$(this).parent().find('.error').hide();
			}
		});
		event.preventDefault();
	});
});