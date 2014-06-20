/* Alcance de las variables en las funciones */

// Variable global
var a = "a";

function levelb(){
	// Variable local
	var b = "b";

	function levelc(){
		var c = "c";

		function leveld(){
			var d = 'd';
			console.log(a + b + c + d);
		}
		leveld();
		console.log(a + b + c);
	}
	levelc();
	console.log(a + b);
}

levelb();
console.log(a);