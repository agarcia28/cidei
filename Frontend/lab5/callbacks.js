/* Callbacks en JS */
/*
Un callback es una función, que por parametro se le envia otra
función, y la función qu elo recibe, espera a que se ejecute 
esa función
*/

function algo(miCallback){
	miCallback();
}

algo(function(){
	console.log("Esto es un callback");
});

function otroCallback(miCallback){
	miCallback("Un argumento");
}

otroCallback(function(unValor){
	console.log("Algo se imprime y es: " + unValor);
});

/* Multiples callbacks llamado en determinados casos */

function algoOcurre(callback1, callback2, callback3){
	// Pasa la primera vez
	callback1("Primer paso");

	// Siguiente callback

	callback2("Segundo paso");

	// Y por ultimo
	callback3("Ultimo y tercer paso");
}

// Llamado y uso de los multiples callbacks para "algoOcurre"
algoOcurre(
	function(paso1){
		console.log(paso1);
	},
	function(paso2){
		console.log(paso2);
	},
	function(paso3){
		console.log(paso3);
	}
);