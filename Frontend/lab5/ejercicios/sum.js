/* Ejercicio donde se suma A + B = C*/

function Sum(a, b){
 	this.a = a;
 	this.b = b;
 }

 Sum.prototype = {
 	constructor : Sum,
 	getA : function(){
 		console.log("El valor de A es: " + this.a);
 	},
 	getB : function(){
 		console.log("El valor de B es: " + this.b);
 	},
 	getResult : function(){
 		var result = this.a + this. b
 		console.log("El resultado es: " + result);
 	},
 }