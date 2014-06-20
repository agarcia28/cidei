var logic = require('./logic');

exports.get = function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});

	res.end(
		logic.page('Divisor', logic.navbar(),
			[
				(!isNaN(req.a) && !isNaN(req.b) ? ('<p> {a} / {b} = {div} </p>').replace('{a}', req.a).replace('{b}', req.b).replace('{div}', (req.a / req.b)) : ''),
				'<p>Ingrese los numeros para Calcular</p>',
				'<form name="divide" action="/divide" method="get">',
				'De: <input type="text" name="a">',
				'De: <input type="text" name="b">',
				'<input type="submit" value="Calcular">',
				"</from>"
			].join('\n'))
	);
}