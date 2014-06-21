// Comentario de linea sencilla
/*
Comentario
multi-linea
*/

/**
* @author Ana Maria Garcia agarcia@cidei.net
* @license MIT
* @copyright Todos los derechos reservados
*/
$(document).ready(function(){
	$('#getInfo').click(function(e){
		var data = {};
		data.title = "hola";
		data.message = "message";

		$.ajax({
			type : 'POST',
			data : JSON.stringify(data),
			contentType : 'application/json',
			url : 'http://127.0.0.1:8585/values',
			success : function(data){
				console.log('success');
				data = JSON.stringify(data);

				$.each(data, function(){
					$('#info').append('<span>' + value + '</span');
				});
			}
		});
	});
});