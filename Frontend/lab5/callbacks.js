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